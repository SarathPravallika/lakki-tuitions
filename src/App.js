import "@aws-amplify/ui-react/styles.css";
import { useState } from "react";
import { withAuthenticator, View } from "@aws-amplify/ui-react";
import TodayEntries from "./components/TodayEntries";
import Header from "./components/Header";
import StudentsDetails from "./components/StudentsDetails";
import DayToDayActivities from "./components/DayToDayActivities";
import useData from "./useData";

function App(props) {
  const {
    signOut,
    user: {
      signInDetails: { loginId: loginEmail },
    },
  } = props;
  const isAdmin = loginEmail === "lakki2922@gmail.com";
  const [route, setRoute] = useState("studentsDetails");

  const {
    students,
    selectedStudentId,
    setSelectedStudentId,
    getAllStudentsData,
  } = useData({ isAdmin, loginEmail });

  const renderRouting = () => {
    switch (route) {
      case "studentsDetails":
        return (
          <StudentsDetails
            isAdmin={isAdmin}
            loginEmail={loginEmail}
            students={students}
            selectedStudentId={selectedStudentId}
            setSelectedStudentId={setSelectedStudentId}
            getAllStudentsData={getAllStudentsData}
          />
        );
      case "dayToDayActivities":
        return (
          <DayToDayActivities
            isAdmin={isAdmin}
            students={students}
            selectedStudentId={selectedStudentId}
            setSelectedStudentId={setSelectedStudentId}
          />
        );
      case "todayEntries":
        return <TodayEntries students={students} />;
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
