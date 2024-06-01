import { Card, Heading, Flex, Divider } from "@aws-amplify/ui-react";
import { todayActivitiesData } from "../services/temp";
import TodayStudent from "./TodayStudent";

const TodayEntries = ({ data = todayActivitiesData }) => {
  return (
    <Card>
      <Heading level={6}>Date: {new Date().toLocaleDateString()}</Heading>
      <div className="p-1" />
      <Divider orientation="horizontal" />
      <div className="p-1" />
      <Flex direction="column" gap="small">
        {data.map(({ name, entryTime, exitTime, remarks }) => (
          <TodayStudent
            name={name}
            entryTime={entryTime}
            exitTime={exitTime}
            remarks={remarks}
          />
        ))}
      </Flex>
    </Card>
  );
};

export default TodayEntries;
