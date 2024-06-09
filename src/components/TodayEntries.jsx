/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Heading, Flex, Divider, TextField } from "@aws-amplify/ui-react";
import useEntries from "../useEntries";
import TodayStudent from "./TodayStudent";
import { useState, useEffect } from "react";

const TodayEntries = ({ students }) => {
  const { entries, updateEntry, buildEntries } = useEntries({ students });

  const [dateValue] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    buildEntries({ selectedDate: dateValue });
  }, [dateValue]);

  return (
    <Card>
      <div className="flex justify-between items-center">
        <Heading level={6}>Entries for</Heading>
        <TextField name="dateField" value={dateValue} isDisabled type="date" />
      </div>

      <div className="p-1" />
      <Divider orientation="horizontal" />
      <div className="p-1" />

      <Flex direction="column" gap="small">
        {Object.values(entries).map(
          ({ studentID, entryID, name, entryTime, exitTime, remarks }) => (
            <TodayStudent
              key={`${studentID}${entryTime}`}
              entryID={entryID}
              studentID={studentID}
              name={name}
              entryTime={entryTime}
              exitTime={exitTime}
              remarks={remarks}
              updateEntry={updateEntry}
            />
          )
        )}
      </Flex>
    </Card>
  );
};

export default TodayEntries;
