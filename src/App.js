import "@aws-amplify/ui-react/styles.css";
import { useState } from "react";
import { withAuthenticator, View } from "@aws-amplify/ui-react";
import TodayEntries from "./components/TodayEntries";
import Header from "./components/Header";
import StudentsDetails from "./components/StudentsDetails";
import DayToDayActivities from "./components/DayToDayActivities";

function App(props) {
  const {
    signOut,
    user: {
      signInDetails: { loginId },
    },
  } = props;
  const isAdmin = loginId === "lakki2922@gmail.com";
  const [route, setRoute] = useState(
    isAdmin ? "todayEntries" : "dayToDayActivities"
  );

  const renderRouting = () => {
    switch (route) {
      case "studentsDetails":
        return <StudentsDetails isAdmin={isAdmin} />;
      case "dayToDayActivities":
        return <DayToDayActivities isAdmin={isAdmin} />;
      case "todayEntries":
        return <TodayEntries />;
      default:
        return null;
    }
  };

  return (
    <View className="App">
      <Header isAdmin={isAdmin} setRoute={setRoute} signOut={signOut} />
      {renderRouting()}
    </View>
  );
}

export default withAuthenticator(App);
