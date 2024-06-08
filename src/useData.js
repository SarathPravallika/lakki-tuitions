import { generateClient } from "aws-amplify/api";
import { createEntry as createEntryMutation } from "./graphql/mutations";
import { listStudents as listStudentsQuery } from "./graphql/queries";
import { useEffect, useState } from "react";
const client = generateClient();

const useData = ({ isAdmin }) => {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");

  const createStudentEntries = async () => {
    await client.graphql({
      query: createEntryMutation,
      variables: {
        input: {
          studentID: "1",
          entryTime: "",
          exitTime: "",
          remarks: "",
        },
      },
    });
  };

  const getAllStudentsData = async () => {
    const result = await client.graphql({
      query: listStudentsQuery,
    });
    const output = result.data.listStudents.items;
    setStudents(output);
    setSelectedStudentId(output[0]?.id);
  };

  useEffect(() => {
    getAllStudentsData();
  }, []);

  return {
    students,
    selectedStudentId,
    setSelectedStudentId,

    getAllStudentsData,
  };
};

export default useData;
