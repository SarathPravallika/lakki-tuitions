/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getStudent } from "../graphql/queries";
import { updateStudent } from "../graphql/mutations";
const client = generateClient();
export default function StudentUpdateForm(props) {
  const {
    id: idProp,
    student: studentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    parentEmail: "",
    name: "",
    email: "",
    mobileNumber: "",
    hasOptedSMS: false,
    flatNumber: "",
    age: "",
    class: "",
    school: "",
    batch: "",
    subjects: "",
    days: "",
  };
  const [parentEmail, setParentEmail] = React.useState(
    initialValues.parentEmail
  );
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [mobileNumber, setMobileNumber] = React.useState(
    initialValues.mobileNumber
  );
  const [hasOptedSMS, setHasOptedSMS] = React.useState(
    initialValues.hasOptedSMS
  );
  const [flatNumber, setFlatNumber] = React.useState(initialValues.flatNumber);
  const [age, setAge] = React.useState(initialValues.age);
  const [class1, setClass1] = React.useState(initialValues.class);
  const [school, setSchool] = React.useState(initialValues.school);
  const [batch, setBatch] = React.useState(initialValues.batch);
  const [subjects, setSubjects] = React.useState(initialValues.subjects);
  const [days, setDays] = React.useState(initialValues.days);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = studentRecord
      ? { ...initialValues, ...studentRecord }
      : initialValues;
    setParentEmail(cleanValues.parentEmail);
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setMobileNumber(cleanValues.mobileNumber);
    setHasOptedSMS(cleanValues.hasOptedSMS);
    setFlatNumber(cleanValues.flatNumber);
    setAge(cleanValues.age);
    setClass1(cleanValues.class);
    setSchool(cleanValues.school);
    setBatch(cleanValues.batch);
    setSubjects(cleanValues.subjects);
    setDays(cleanValues.days);
    setErrors({});
  };
  const [studentRecord, setStudentRecord] = React.useState(studentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getStudent.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getStudent
        : studentModelProp;
      setStudentRecord(record);
    };
    queryData();
  }, [idProp, studentModelProp]);
  React.useEffect(resetStateValues, [studentRecord]);
  const validations = {
    parentEmail: [{ type: "Required" }],
    name: [{ type: "Required" }],
    email: [{ type: "Required" }],
    mobileNumber: [{ type: "Required" }],
    hasOptedSMS: [{ type: "Required" }],
    flatNumber: [{ type: "Required" }],
    age: [{ type: "Required" }],
    class: [{ type: "Required" }],
    school: [{ type: "Required" }],
    batch: [{ type: "Required" }],
    subjects: [{ type: "Required" }],
    days: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          parentEmail,
          name,
          email,
          mobileNumber,
          hasOptedSMS,
          flatNumber,
          age,
          class: class1,
          school,
          batch,
          subjects,
          days,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateStudent.replaceAll("__typename", ""),
            variables: {
              input: {
                id: studentRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "StudentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Parent email"
        isRequired={true}
        isReadOnly={false}
        value={parentEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentEmail: value,
              name,
              email,
              mobileNumber,
              hasOptedSMS,
              flatNumber,
              age,
              class: class1,
              school,
              batch,
              subjects,
              days,
            };
            const result = onChange(modelFields);
            value = result?.parentEmail ?? value;
          }
          if (errors.parentEmail?.hasError) {
            runValidationTasks("parentEmail", value);
          }
          setParentEmail(value);
        }}
        onBlur={() => runValidationTasks("parentEmail", parentEmail)}
        errorMessage={errors.parentEmail?.errorMessage}
        hasError={errors.parentEmail?.hasError}
        {...getOverrideProps(overrides, "parentEmail")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentEmail,
              name: value,
              email,
              mobileNumber,
              hasOptedSMS,
              flatNumber,
              age,
              class: class1,
              school,
              batch,
              subjects,
              days,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentEmail,
              name,
              email: value,
              mobileNumber,
              hasOptedSMS,
              flatNumber,
              age,
              class: class1,
              school,
              batch,
              subjects,
              days,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Mobile number"
        isRequired={true}
        isReadOnly={false}
        value={mobileNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentEmail,
              name,
              email,
              mobileNumber: value,
              hasOptedSMS,
              flatNumber,
              age,
              class: class1,
              school,
              batch,
              subjects,
              days,
            };
            const result = onChange(modelFields);
            value = result?.mobileNumber ?? value;
          }
          if (errors.mobileNumber?.hasError) {
            runValidationTasks("mobileNumber", value);
          }
          setMobileNumber(value);
        }}
        onBlur={() => runValidationTasks("mobileNumber", mobileNumber)}
        errorMessage={errors.mobileNumber?.errorMessage}
        hasError={errors.mobileNumber?.hasError}
        {...getOverrideProps(overrides, "mobileNumber")}
      ></TextField>
      <SwitchField
        label="Has opted sms"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasOptedSMS}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              parentEmail,
              name,
              email,
              mobileNumber,
              hasOptedSMS: value,
              flatNumber,
              age,
              class: class1,
              school,
              batch,
              subjects,
              days,
            };
            const result = onChange(modelFields);
            value = result?.hasOptedSMS ?? value;
          }
          if (errors.hasOptedSMS?.hasError) {
            runValidationTasks("hasOptedSMS", value);
          }
          setHasOptedSMS(value);
        }}
        onBlur={() => runValidationTasks("hasOptedSMS", hasOptedSMS)}
        errorMessage={errors.hasOptedSMS?.errorMessage}
        hasError={errors.hasOptedSMS?.hasError}
        {...getOverrideProps(overrides, "hasOptedSMS")}
      ></SwitchField>
      <TextField
        label="Flat number"
        isRequired={true}
        isReadOnly={false}
        value={flatNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentEmail,
              name,
              email,
              mobileNumber,
              hasOptedSMS,
              flatNumber: value,
              age,
              class: class1,
              school,
              batch,
              subjects,
              days,
            };
            const result = onChange(modelFields);
            value = result?.flatNumber ?? value;
          }
          if (errors.flatNumber?.hasError) {
            runValidationTasks("flatNumber", value);
          }
          setFlatNumber(value);
        }}
        onBlur={() => runValidationTasks("flatNumber", flatNumber)}
        errorMessage={errors.flatNumber?.errorMessage}
        hasError={errors.flatNumber?.hasError}
        {...getOverrideProps(overrides, "flatNumber")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={true}
        isReadOnly={false}
        value={age}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentEmail,
              name,
              email,
              mobileNumber,
              hasOptedSMS,
              flatNumber,
              age: value,
              class: class1,
              school,
              batch,
              subjects,
              days,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <TextField
        label="Class"
        isRequired={true}
        isReadOnly={false}
        value={class1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentEmail,
              name,
              email,
              mobileNumber,
              hasOptedSMS,
              flatNumber,
              age,
              class: value,
              school,
              batch,
              subjects,
              days,
            };
            const result = onChange(modelFields);
            value = result?.class ?? value;
          }
          if (errors.class?.hasError) {
            runValidationTasks("class", value);
          }
          setClass1(value);
        }}
        onBlur={() => runValidationTasks("class", class1)}
        errorMessage={errors.class?.errorMessage}
        hasError={errors.class?.hasError}
        {...getOverrideProps(overrides, "class")}
      ></TextField>
      <TextField
        label="School"
        isRequired={true}
        isReadOnly={false}
        value={school}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentEmail,
              name,
              email,
              mobileNumber,
              hasOptedSMS,
              flatNumber,
              age,
              class: class1,
              school: value,
              batch,
              subjects,
              days,
            };
            const result = onChange(modelFields);
            value = result?.school ?? value;
          }
          if (errors.school?.hasError) {
            runValidationTasks("school", value);
          }
          setSchool(value);
        }}
        onBlur={() => runValidationTasks("school", school)}
        errorMessage={errors.school?.errorMessage}
        hasError={errors.school?.hasError}
        {...getOverrideProps(overrides, "school")}
      ></TextField>
      <TextField
        label="Batch"
        isRequired={true}
        isReadOnly={false}
        value={batch}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentEmail,
              name,
              email,
              mobileNumber,
              hasOptedSMS,
              flatNumber,
              age,
              class: class1,
              school,
              batch: value,
              subjects,
              days,
            };
            const result = onChange(modelFields);
            value = result?.batch ?? value;
          }
          if (errors.batch?.hasError) {
            runValidationTasks("batch", value);
          }
          setBatch(value);
        }}
        onBlur={() => runValidationTasks("batch", batch)}
        errorMessage={errors.batch?.errorMessage}
        hasError={errors.batch?.hasError}
        {...getOverrideProps(overrides, "batch")}
      ></TextField>
      <TextField
        label="Subjects"
        isRequired={true}
        isReadOnly={false}
        value={subjects}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentEmail,
              name,
              email,
              mobileNumber,
              hasOptedSMS,
              flatNumber,
              age,
              class: class1,
              school,
              batch,
              subjects: value,
              days,
            };
            const result = onChange(modelFields);
            value = result?.subjects ?? value;
          }
          if (errors.subjects?.hasError) {
            runValidationTasks("subjects", value);
          }
          setSubjects(value);
        }}
        onBlur={() => runValidationTasks("subjects", subjects)}
        errorMessage={errors.subjects?.errorMessage}
        hasError={errors.subjects?.hasError}
        {...getOverrideProps(overrides, "subjects")}
      ></TextField>
      <TextField
        label="Days"
        isRequired={true}
        isReadOnly={false}
        value={days}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentEmail,
              name,
              email,
              mobileNumber,
              hasOptedSMS,
              flatNumber,
              age,
              class: class1,
              school,
              batch,
              subjects,
              days: value,
            };
            const result = onChange(modelFields);
            value = result?.days ?? value;
          }
          if (errors.days?.hasError) {
            runValidationTasks("days", value);
          }
          setDays(value);
        }}
        onBlur={() => runValidationTasks("days", days)}
        errorMessage={errors.days?.errorMessage}
        hasError={errors.days?.hasError}
        {...getOverrideProps(overrides, "days")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || studentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || studentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
