import { Card, View, Flex, Text } from "@aws-amplify/ui-react";

const StudentDayActivity = ({ date, day, entryTime, exitTime, remarks }) => {
  return (
    <Card variation="elevated" width="100%">
      <Flex direction="column" gap="small">
        <div>
          <Text>
            Date: &nbsp;
            {date} {day}
          </Text>
        </div>
        <div>
          <Text>Entry time: &nbsp;{entryTime}</Text>
        </div>
        <div>
          <Text>Exit time: &nbsp;{exitTime}</Text>
        </div>
        <div>
          <Text>Remarks: &nbsp;{remarks}</Text>
        </div>
      </Flex>
    </Card>
  );
};

export default StudentDayActivity;
