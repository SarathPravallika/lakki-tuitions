import { Card, SelectField, Heading, Divider } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import { getStudent as getStudentQuery } from "../graphql/queries";
import { useEffect, useState } from "react";
import StudentsDetailsForm from "./StudentsDetailsForm";
import { initialStudentData } from "../services/studentDetailsInitialData";
const client = generateClient();

const StudentsDetails = ({
  loginEmail,
  students = [],
  selectedStudentId = "",
  setSelectedStudentId,
  getAllStudentsData,
}) => {
  const [details, setDetails] = useState(initialStudentData);

  async function fetchSpecificStudentData(id) {
    const studentDetails = await client.graphql({
      query: getStudentQuery,
      variables: { id },
    });
    const details = studentDetails.data.getStudent;

    const {
      name,
      email,
      mobileNumber,
      flatNumber,
      age,
      class: class1,
      school,
      batch,
      subjects,
      days,
      id: id1,
    } = details;

    setDetails({
      name,
      email,
      mobileNumber,
      flatNumber,
      age,
      class: class1,
      school,
      batch,
      subjects,
      days,
      id: id1,
    });
  }

  useEffect(() => {
    setDetails(initialStudentData);
    if (selectedStudentId) {
      fetchSpecificStudentData(selectedStudentId);
    }
  }, [selectedStudentId]);

  return (
    <Card className="flex">
      <div className="flex justify-between items-center">
        <Heading level={6}>Students details </Heading>
        <span
          onClick={() => {
            setSelectedStudentId("");
          }}
          className="text-sky-600 underline cursor-pointer"
        >
          Add
        </span>
      </div>

      <div>
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
      </div>

      <div className="p-1" />
      <Divider orientation="horizontal" />
      <div className="p-1" />

      <StudentsDetailsForm
        loginEmail={loginEmail}
        details={details}
        setSelectedStudentId={setSelectedStudentId}
        getAllStudentsData={getAllStudentsData}
      />
    </Card>
  );
};

export default StudentsDetails;
