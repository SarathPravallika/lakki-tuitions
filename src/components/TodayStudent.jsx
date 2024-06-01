import {
  Card,
  CheckboxField,
  Flex,
  Text,
  Input,
  Button,
  Icon,
} from "@aws-amplify/ui-react";

import {} from "@aws-amplify/ui-react";

const IconSave = () => {
  return (
    <Icon
      ariaLabel=""
      pathData="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM19 19H5V5H16.17L19 7.83V19ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM6 6H15V10H6V6Z"
    />
  );
};

const TodayStudent = ({ name, entryTime, exitTime, remarks }) => {
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
            checked={!!entryTime}
            isDisabled={!!entryTime}
            onChange={() => {}}
          />
        </Flex>
        <Flex direction="row">
          <Text>Exit: </Text>
          <CheckboxField
            name="exitTime"
            value="yes"
            checked={!!exitTime}
            isDisabled={!!exitTime}
            onChange={() => {}}
          />
        </Flex>
        <Flex direction="column">
          <Flex direction="row">
            <Input
              id="remarks"
              name="remarks"
              type="remarks"
              placeholder="Enter remarks for today's class"
            />
            <Button size="small">
              <IconSave />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default TodayStudent;
