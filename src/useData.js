import { generateClient } from "aws-amplify/api";
import { listStudents as listStudentsQuery } from "./graphql/queries";
import { useEffect, useState } from "react";
const client = generateClient();

const useData = ({ isAdmin, loginEmail }) => {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");

  const getAllStudentsData = async () => {
    const result = await client.graphql({
      query: listStudentsQuery,
      ...(isAdmin
        ? {}
        : {
            variables: {
              filter: { parentEmail: { eq: loginEmail } },
            },
          }),
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
