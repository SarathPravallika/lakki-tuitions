import "@aws-amplify/ui-react/styles.css";
import { Menu, MenuItem, Button, Heading, View } from "@aws-amplify/ui-react";

const Header = ({ isAdmin, signOut, setRoute }) => {
  return (
    <View className="App flex justify-between items-center h-8">
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
      <Heading level={6}>Pravallika tuitions</Heading>
      <Button size="small" onClick={signOut}>
        Sign Out
      </Button>
    </View>
  );
};

export default Header;
