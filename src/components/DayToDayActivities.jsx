import {
  Card,
  Heading,
  Divider,
  Flex,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import StudentDayActivity from "./StudentDayActivity";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { entriesByStudentID as entriesByStudentIDQuery } from "../graphql/queries";
import { weekday } from "../utils";
const client = generateClient();

const DayToDayActivities = ({
  isAdmin,
  students,
  selectedStudentId,
  setSelectedStudentId,
}) => {
  const [data, setData] = useState([]);
  const [dateValue, setDateValue] = useState("");

  async function fetchSpecificStudentEntriesData({ studentID, selectedDate }) {
    const studentDetails = await client.graphql({
      query: entriesByStudentIDQuery,
      variables: {
        studentID,
        filter: { createdAt: { contains: selectedDate } },
      },
    });
    const details = studentDetails.data.entriesByStudentID.items;

    setData(details);
  }

  useEffect(() => {
    if (selectedStudentId) {
      setData([]);
      fetchSpecificStudentEntriesData({
        studentID: selectedStudentId,
        selectedDate: dateValue,
      });
    }
  }, [selectedStudentId, dateValue]);

  return (
    <Card className="flex">
      <Heading level={6}>Day to Day activities</Heading>

      <div className="flex gap-1 justify-between">
        <SelectField
          placeholder="Select student"
          value={selectedStudentId}
          onChange={(e) => setSelectedStudentId(e.target.value)}
        >
          {students.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </SelectField>
        <TextField
          name="dateField"
          value={dateValue}
          type="date"
          onChange={(e) => {
            let { value } = e.target;
            setDateValue(value);
          }}
        />
      </div>

      <div className="p-1" />
      <Divider orientation="horizontal" />
      <div className="p-1" />

      <Flex direction="column" gap="small">
        {data.map(({ id, createdAt, entryTime, exitTime, remarks }, index) => (
          <StudentDayActivity
            key={index}
            date={createdAt.split("T")[0]}
            day={weekday[new Date(createdAt).getDay()]}
            entryTime={entryTime.split(" ")[1]}
            exitTime={exitTime.split(" ")[1]}
            remarks={remarks}
          />
        ))}
      </Flex>
    </Card>
  );
};

export default DayToDayActivities;
