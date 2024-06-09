import { put } from "aws-amplify/api";

const sendSMSMessage = async (mobileNumber, message) => {
  const putOperation = put({
    apiName: "tuitionsAPI",
    path: "/tuitions",
    options: {
      body: { mobileNumber, textMessage: message },
    },
  });

  const { body } = await putOperation.response;
  const response = await body.json();

  console.log(response);
};

export default sendSMSMessage;
