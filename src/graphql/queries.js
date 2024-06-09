/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      parentEmail
      name
      email
      mobileNumber
      hasOptedSMS
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        parentEmail
        name
        email
        mobileNumber
        hasOptedSMS
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
      nextToken
      __typename
    }
  }
`;
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
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
export const listEntries = /* GraphQL */ `
  query ListEntries(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const entriesByStudentID = /* GraphQL */ `
  query EntriesByStudentID(
    $studentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    entriesByStudentID(
      studentID: $studentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
