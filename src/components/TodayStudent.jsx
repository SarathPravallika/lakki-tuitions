import {
  Card,
  CheckboxField,
  Flex,
  Text,
  Input,
  Button,
  Icon,
} from "@aws-amplify/ui-react";
import { useState } from "react";

import {} from "@aws-amplify/ui-react";

const IconSave = () => {
  return (
    <Icon
      ariaLabel=""
      pathData="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM19 19H5V5H16.17L19 7.83V19ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM6 6H15V10H6V6Z"
    />
  );
};

const TodayStudent = ({
  entryID,
  studentID,
  name,
  entryTime,
  exitTime,
  remarks,
  updateEntry,
}) => {
  const [data, setData] = useState({
    name,
    entryTime,
    exitTime,
    remarks,
  });

  return (
    <Card variation="elevated" width="100%">
      <Flex direction="column" gap="small">
        <Flex direction="row">
          <Text>
            Name: &nbsp;
            {name}
          </Text>
        </Flex>
        <Flex direction="row">
          <Text>Entry: </Text>
          <CheckboxField
            name="entryTime"
            value="yes"
            checked={!!data.entryTime}
            isDisabled={!!data.entryTime}
            onChange={() => {
              const newEntryTime = new Date().toISOString();
              setData({
                ...data,
                entryTime: newEntryTime,
              });
              updateEntry({
                entryID,
                studentID,
                entryTime: newEntryTime,
                exitTime: data.exitTime,
                remarks: data.remarks,
                message: `entered the tuition at ${
                  newEntryTime.split("T")[1].split(".")[0]
                }`,
              });
            }}
          />
        </Flex>
        <Flex direction="row">
          <Text>Exit: </Text>
          <CheckboxField
            name="exitTime"
            value="yes"
            checked={!!data.exitTime}
            isDisabled={!!data.exitTime || !data.entryTime}
            onChange={() => {
              const newExitTime = new Date().toISOString();

              setData({
                ...data,
                exitTime: newExitTime,
              });
              updateEntry({
                entryID,
                studentID,
                entryTime: data.entryTime,
                exitTime: newExitTime,
                remarks: data.remarks,
                message: `left the tuition at ${
                  newExitTime.split("T")[1].split(".")[0]
                }`,
              });
            }}
          />
        </Flex>
        <Flex direction="column">
          <Flex direction="row">
            <Input
              id="remarks"
              name="remarks"
              type="remarks"
              placeholder="Enter remarks for today's class"
              value={data.remarks}
              onChange={(e) => {
                setData({
                  ...data,
                  remarks: e.target.value,
                });
              }}
            />
            <Button
              size="small"
              onClick={() => {
                updateEntry({
                  entryID,
                  studentID,
                  entryTime: data.entryTime,
                  exitTime: data.exitTime,
                  remarks: data.remarks,
                  message: data.remarks,
                });
              }}
            >
              <IconSave />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default TodayStudent;
