import {
  Card,
  Heading,
  Divider,
  Flex,
  SelectField,
} from "@aws-amplify/ui-react";
import StudentDayActivity from "./StudentDayActivity";
import { useState, useEffect } from "react";

const DayToDayActivities = ({ isAdmin, selectedStudentId, students = [] }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        date: "1-Jan-2024",
        day: "Monday",
        entryTime: "4:00:05",
        exitTime: "5:10:00",
        remarks: "Taught 6 table",
      },
      {
        date: "2-Jan-2024",
        day: "Tuesday",
        entryTime: "4:00:05",
        exitTime: "5:10:00",
        remarks: "Taught 7 table",
      },
    ]);
  }, [selectedStudentId]);

  return (
    <Card className="flex">
      <Heading level={6}>Day to Day activities</Heading>
      {isAdmin ? (
        <SelectField placeholder="Select student">
          {students.map(({ id, name }) => (
            <option value={id}>{name}</option>
          ))}
        </SelectField>
      ) : null}
      <div className="p-1" />
      <Divider orientation="horizontal" />
      <div className="p-1" />
      <Flex direction="column" gap="small">
        {data.map(({ date, day, entryTime, exitTime, remarks }) => (
          <StudentDayActivity
            date={date}
            day={day}
            entryTime={entryTime}
            exitTime={exitTime}
            remarks={remarks}
          />
        ))}
      </Flex>
    </Card>
  );
};

export default DayToDayActivities;
