const AWS = require("aws-sdk");
const SNSClient = new AWS.SNS();

exports.handler = async (event) => {
  const { mobileNumber, textMessage } = JSON.parse(event.body);
  let response;

  const params = {
    PhoneNumber: mobileNumber,
    Message: textMessage,
  };

  try {
    // eslint-disable-next-line no-unused-vars
    const resp = await SNSClient.publish(params).promise();

    response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify({
        message: "SMS sent successfully",
      }),
    };
  } catch (e) {
    console.log(e);
  }
  return response;
};
