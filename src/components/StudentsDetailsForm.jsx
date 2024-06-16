import {
  Card,
  Flex,
  Text,
  Button,
  Label,
  Input,
  SelectField,
  View,
  CheckboxField,
} from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import { createStudent as createStudentMutation } from "../graphql/mutations";
import { useEffect, useState } from "react";
import { initialStudentData } from "../services/studentDetailsInitialData";
import sendWAMessage from "../services/whatsappMessages";

const client = generateClient();

const StudentsDetailsForm = ({
  loginEmail,
  details,
  setSelectedStudentId,
  getAllStudentsData,
}) => {
  const [data, setData] = useState(initialStudentData);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setData(details);
    setDisabled(!!details.id);
  }, [details]);

  const createStudent = async (event) => {
    event.preventDefault();

    const payload = {
      parentEmail: loginEmail,
      name: data.name,
      email: data.email,
      mobileNumber: data.mobileNumber,
      flatNumber: data.flatNumber,
      age: data.age,
      class: data.class,
      school: data.school,
      batch: data.batch,
      subjects: data.subjects,
      days: data.days,
      hasOptedSMS: data.hasOptedSMS,
    };

    // create student
    const createStudentResult = await client.graphql({
      query: createStudentMutation,
      variables: {
        input: payload,
      },
    });
    const newStudent = createStudentResult.data.createStudent;
    if (data.hasOptedSMS) {
      sendWAMessage(
        `+91${data.mobileNumber}`,
        `Dear Parent, Thank you for registering your child ${data.name} for Pravallika tuitions. Learning is always in fashion.`
      );
    }
    event.target.reset();

    getAllStudentsData();
    setSelectedStudentId(newStudent.id);
  };

  return (
    <Card variation="elevated" width="100%">
      <View as="form" margin="0 0" onSubmit={createStudent}>
        <Flex direction="column" width="100%">
          <Card variation="elevated">
            <Flex direction="column" gap="small">
              <Label htmlFor="name">
                Student Name
                <Text as="span" fontSize="small" color="font.error">
                  {" "}
                  (required)
                </Text>
              </Label>
              <Input
                id="name"
                name="name"
                value={data.name}
                type="text"
                isRequired={true}
                isDisabled={disabled}
                onChange={(e) => {
                  let { value } = e.target;
                  setData({
                    ...data,
                    name: value,
                  });
                }}
              />
              <Label htmlFor="email">
                Email
                <Text as="span" fontSize="small" color="font.error">
                  {" "}
                  (required)
                </Text>
              </Label>
              <Input
                id="email"
                name="email"
                value={data.email}
                type="email"
                isRequired={true}
                isDisabled={disabled}
                onChange={(e) => {
                  let { value } = e.target;
                  setData({
                    ...data,
                    email: value,
                  });
                }}
              />
              <Label htmlFor="mobileNumber">
                Mobile Number
                <Text as="span" fontSize="small" color="font.error">
                  {" "}
                  (required)
                </Text>
              </Label>
              <Input
                id="mobileNumber"
                name="mobileNumber"
                value={data.mobileNumber}
                type="text"
                isRequired={true}
                isDisabled={disabled}
                maxLength={10}
                onChange={(e) => {
                  let { value } = e.target;
                  setData({
                    ...data,
                    mobileNumber: value,
                  });
                }}
              />

              <Label htmlFor="hasOptedSMS">
                Opt for Whatsapp notifications
                <Text as="span" fontSize="small" color="font.error">
                  {" "}
                  (required)
                </Text>
              </Label>
              <CheckboxField
                name="hasOptedSMS"
                value="yes"
                checked={data.hasOptedSMS}
                isDisabled={disabled}
                onChange={(e) => {
                  setData({
                    ...data,
                    hasOptedSMS: e.target.checked,
                  });
                }}
              />

              <Label htmlFor="flatNumber">
                Flat number
                <Text as="span" fontSize="small" color="font.error">
                  {" "}
                  (required)
                </Text>
              </Label>
              <Input
                id="flatNumber"
                name="flatNumber"
                value={data.flatNumber}
                type="string"
                isRequired={true}
                isDisabled={disabled}
                onChange={(e) => {
                  let { value } = e.target;
                  setData({
                    ...data,
                    flatNumber: value,
                  });
                }}
              />
            </Flex>
          </Card>

          <Card variation="elevated">
            <Flex direction="column" gap="small">
              <Label htmlFor="age">
                Student Age
                <Text as="span" fontSize="small" color="font.error">
                  {" "}
                  (required)
                </Text>
              </Label>
              <Input
                id="age"
                name="age"
                value={data.age}
                type="text"
                isRequired={true}
                isDisabled={disabled}
                onChange={(e) => {
                  let { value } = e.target;
                  setData({
                    ...data,
                    age: value,
                  });
                }}
              />
              <SelectField
                placeholder="Select student class"
                label=" Student Class (required)"
                name="class"
                value={data.class}
                isDisabled={disabled}
                onChange={(e) => {
                  let { value } = e.target;
                  setData({
                    ...data,
                    class: value,
                  });
                }}
              >
                <option value="P1">Class PP1</option>
                <option value="P2">Class PP2</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
              </SelectField>
              <Label htmlFor="school">
                Student School
                <Text as="span" fontSize="small" color="font.error">
                  {" "}
                  (required)
                </Text>
              </Label>
              <Input
                id="school"
                name="school"
                type="string"
                value={data.school}
                isRequired={true}
                isDisabled={disabled}
                onChange={(e) => {
                  let { value } = e.target;
                  setData({
                    ...data,
                    school: value,
                  });
                }}
              />
            </Flex>
          </Card>

          <Card variation="elevated">
            <Flex direction="column" gap="small">
              <SelectField
                placeholder="Select a batch (5 students/batch)"
                label="Batch (required)"
                name="batch"
                value={data.batch}
                isDisabled={disabled}
                onChange={(e) => {
                  let { value } = e.target;
                  setData({
                    ...data,
                    batch: value,
                  });
                }}
              >
                <option value="B1">4 P.M - 5 P.M</option>
                <option value="B2">5 P.M - 6 P.M</option>
                <option value="B3">6 P.M - 7 P.M</option>
                <option value="B4">7 P.M - 8 P.M</option>
                <option value="B5">8 P.M - 9 P.M</option>
              </SelectField>
              <SelectField
                placeholder="Select the subjects"
                label="Subjects (required)"
                name="subjects"
                value={data.subjects}
                isDisabled={disabled}
                onChange={(e) => {
                  let { value } = e.target;
                  setData({
                    ...data,
                    subjects: value,
                  });
                }}
              >
                <option value="S1">All subjects</option>
                <option value="S2">Any one subject</option>
                <option value="S3">Any two subjects</option>
              </SelectField>
              <SelectField
                placeholder="Select the days"
                label="Days (required)"
                name="days"
                value={data.days}
                isDisabled={disabled}
                onChange={(e) => {
                  let { value } = e.target;
                  setData({
                    ...data,
                    days: value,
                  });
                }}
              >
                <option value="D1">Monday - Friday</option>
                <option value="D2">Monday, Wednesday, Friday</option>
                <option value="D3">Tuesday, Thursday</option>
              </SelectField>
            </Flex>
          </Card>

          {!disabled && (
            <Button type="submit" variation="primary">
              Submit
            </Button>
          )}
        </Flex>
      </View>
    </Card>
  );
};

export default StudentsDetailsForm;
