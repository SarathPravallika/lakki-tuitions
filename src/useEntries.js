import { generateClient } from "aws-amplify/api";
import {
  createEntry as createEntryMutation,
  updateEntry as updateEntryMutation,
} from "./graphql/mutations";
import { listEntries as listEntriesQuery } from "./graphql/queries";
import { useState } from "react";
const client = generateClient();

const useEntries = ({ students }) => {
  const [entries, setEntries] = useState({});

  const buildEntries = async ({ selectedDate }) => {
    const newEntries = {};
    students?.forEach((student) => {
      const { id, name } = student;
      newEntries[id] = {
        entryID: "",
        studentID: id,
        name,
        entryTime: "",
        exitTime: "",
        remarks: "",
      };
    });

    const response = await client.graphql({
      query: listEntriesQuery,
      variables: {
        filter: { createdAt: { contains: selectedDate } },
      },
    });
    const savedListEntriesData = response.data.listEntries.items;

    savedListEntriesData?.forEach((savedEntry) => {
      const {
        id: entryID,
        studentID,
        entryTime,
        exitTime,
        remarks,
      } = savedEntry;

      if (newEntries[studentID]) {
        newEntries[studentID] = {
          ...newEntries[studentID],
          entryID,
          entryTime,
          exitTime,
          remarks,
        };
      }
    });

    setEntries(newEntries);
  };

  const updateEntry = async ({
    entryID,
    studentID,
    entryTime,
    exitTime,
    remarks,
  }) => {
    const result = await client.graphql({
      query: entryID ? updateEntryMutation : createEntryMutation,
      variables: {
        input: {
          ...(entryID ? { id: entryID } : {}),
          studentID,
          entryTime,
          exitTime,
          remarks,
        },
      },
    });

    if (entryID) {
      const output = result.data.updateEntry;
      const { entryTime, exitTime, remarks } = output;
      const updatedStudentEntry = {
        ...entries[studentID],
        entryTime,
        exitTime,
        remarks,
      };

      setEntries({
        ...entries,
        [studentID]: updatedStudentEntry,
      });
    } else {
      const output = result.data.createEntry;
      const { id, entryTime, exitTime, remarks } = output;
      const insertedStudentEntry = {
        ...entries[studentID],
        entryID: id,
        entryTime,
        exitTime,
        remarks,
      };

      setEntries({
        ...entries,
        [studentID]: insertedStudentEntry,
      });
    }
  };

  return {
    entries,

    buildEntries,
    updateEntry,
  };
};

export default useEntries;
