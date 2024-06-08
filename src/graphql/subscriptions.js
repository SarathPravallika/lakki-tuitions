/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry($filter: ModelSubscriptionEntryFilterInput) {
    onCreateEntry(filter: $filter) {
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
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry($filter: ModelSubscriptionEntryFilterInput) {
    onUpdateEntry(filter: $filter) {
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
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry($filter: ModelSubscriptionEntryFilterInput) {
    onDeleteEntry(filter: $filter) {
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
