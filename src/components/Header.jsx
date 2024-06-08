import "@aws-amplify/ui-react/styles.css";
import { Menu, MenuItem, Button, Heading, View } from "@aws-amplify/ui-react";

const Header = ({ isAdmin, signOut, setRoute }) => {
  return (
    <View className="App flex justify-between">
      <Menu menuAlign="start">
        <MenuItem onClick={() => setRoute("studentsDetails")}>
          Student(s) Details
        </MenuItem>
        <MenuItem onClick={() => setRoute("dayToDayActivities")}>
          Day to Day activities
        </MenuItem>
        {isAdmin && (
          <MenuItem onClick={() => setRoute("todayEntries")}>
            Fill daily entries
          </MenuItem>
        )}
      </Menu>
      <Heading level={3}>Pravallika tuitions</Heading>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default Header;
