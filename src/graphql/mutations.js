/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      parentEmail
      name
      email
      mobileNumber
      flatNumber
      age
      class
      school
      batch
      subjects
      days
      entries {
        items {
          id
          studentID
          entryTime
          exitTime
          remarks
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      parentEmail
      name
      email
      mobileNumber
      flatNumber
      age
      class
      school
      batch
      subjects
      days
      entries {
        items {
          id
          studentID
          entryTime
          exitTime
          remarks
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      parentEmail
      name
      email
      mobileNumber
      flatNumber
      age
      class
      school
      batch
      subjects
      days
      entries {
        items {
          id
          studentID
          entryTime
          exitTime
          remarks
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEntry = /* GraphQL */ `
  mutation CreateEntry(
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
      id
      studentID
      entryTime
      exitTime
      remarks
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry(
    $input: UpdateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    updateEntry(input: $input, condition: $condition) {
      id
      studentID
      entryTime
      exitTime
      remarks
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry(
    $input: DeleteEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    deleteEntry(input: $input, condition: $condition) {
      id
      studentID
      entryTime
      exitTime
      remarks
      createdAt
      updatedAt
      __typename
    }
  }
`;
