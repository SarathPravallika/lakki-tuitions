import { Card, Flex, Text } from "@aws-amplify/ui-react";

const StudentDayActivity = ({ date, day, entryTime, exitTime, remarks }) => {
  return (
    <Card variation="elevated" width="100%">
      <Flex direction="column" gap="small">
        <div>
          <Text>
            <b>Date: &nbsp;</b>
            {date} ({day})
          </Text>
        </div>
        <div>
          <Text>
            <b>Entry time: &nbsp;</b>
            {entryTime}
          </Text>
        </div>
        <div>
          <Text>
            <b>Exit time: &nbsp;</b>
            {exitTime}
          </Text>
        </div>
        <div>
          <Text>
            <b>Remarks: &nbsp;</b>
            {remarks}
          </Text>
        </div>
      </Flex>
    </Card>
  );
};

export default StudentDayActivity;
