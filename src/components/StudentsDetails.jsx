import {
  Card,
  View,
  Flex,
  Text,
  Button,
  Label,
  Input,
  SelectField,
  Heading,
  Divider,
} from "@aws-amplify/ui-react";

const StudentsDetails = ({
  isAdmin,
  students = [],
  selectedStudentId = "1",
}) => {
  const dataById = {
    1: {
      name: "Student-1",

      email: "s1@xyz.com",
      mobileNumber: "9848022338",
      flatNumber: "H-1701",

      age: 8,
      class: 4,
      school: "Creek",
      board: "CBSE",

      batch: "5-6",
      days: "All days",
      subjects: "all",
    },
  };
  const dataOrder = ["1"];

  const disabled = !!selectedStudentId;

  return (
    <Card className="flex">
      <Heading level={6}>Students details</Heading>
      {isAdmin ? (
        <SelectField placeholder="Select student">
          {students.map(({ id, name }) => (
            <option value={id}>{name}</option>
          ))}
        </SelectField>
      ) : null}
      <div className="p-1" />
      <Divider orientation="horizontal" />
      <div className="p-1" />
      <Card variation="elevated" width="100%">
        <Flex as="form" direction="column" width="100%">
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
                type="text"
                isRequired={true}
                isDisabled={disabled}
              />
              <Label htmlFor="name">
                Email
                <Text as="span" fontSize="small" color="font.error">
                  {" "}
                  (required)
                </Text>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                isRequired={true}
                isDisabled={disabled}
              />
              <Label htmlFor="name">
                Mobile Number
                <Text as="span" fontSize="small" color="font.error">
                  {" "}
                  (required)
                </Text>
              </Label>
              <Input
                id="mobileNumber"
                name="mobileNumber"
                type="number"
                isRequired={true}
                isDisabled={disabled}
              />
            </Flex>

            <Flex direction="column" gap="small">
              <Label htmlFor="name">
                Flat number
                <Text as="span" fontSize="small" color="font.error">
                  {" "}
                  (required)
                </Text>
              </Label>
              <Input
                id="flatNumber"
                name="flatNumber"
                type="string"
                isRequired={true}
                isDisabled={disabled}
              />
            </Flex>
          </Card>

          <Card variation="elevated">
            <Flex direction="column" gap="small">
              <Label htmlFor="name">
                Student Age
                <Text as="span" fontSize="small" color="font.error">
                  {" "}
                  (required)
                </Text>
              </Label>
              <Input
                id="age"
                name="age"
                type="number"
                isRequired={true}
                isDisabled={disabled}
              />
              <SelectField
                placeholder="Select student class"
                label=" Student Class (required)"
                isDisabled={disabled}
              >
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
              </SelectField>
              <Label htmlFor="name">
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
                isRequired={true}
                isDisabled={disabled}
              />
            </Flex>
          </Card>

          <Card variation="elevated">
            <Flex direction="column" gap="small">
              <SelectField
                placeholder="Select a batch (5 students/batch)"
                label="Batch (required)"
                isDisabled={disabled}
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
                isDisabled={disabled}
              >
                <option value="S1">All subjects</option>
                <option value="S2">Any one subject</option>
                <option value="S3">Any two subjects</option>
              </SelectField>
              <SelectField
                placeholder="Select the days"
                label="Days (required)"
                isDisabled={disabled}
              >
                <option value="D1">Monday - Friday</option>
                <option value="D2">Monday, Wednesday, Friday</option>
                <option value="D3">Tuesday, Thursday</option>
              </SelectField>
            </Flex>
          </Card>

          {!disabled && <Button type="submit">Submit</Button>}
        </Flex>
      </Card>
    </Card>
  );
};

export default StudentsDetails;
