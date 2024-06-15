import { put } from "aws-amplify/api";

const sendWAMessage = async (mobileNumber, message) => {
  const putOperation = put({
    apiName: "tuitionsWA",
    path: "/tuitionsWA",
    options: {
      body: { to: `whatsapp:${mobileNumber}`, body: message },
    },
  });

  const { body } = await putOperation.response;
  const response = await body.json();

  console.log(response);
};

export default sendWAMessage;
