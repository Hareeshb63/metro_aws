/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMetroSt2am = /* GraphQL */ `
  query GetMetroSt2am($id: ID!) {
    getMetroSt2am(id: $id) {
      id
      Attiguppe
      Jalahalli
      Jayanagar
      MgRoad
      Vijaynagar
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMetroSt2ams = /* GraphQL */ `
  query ListMetroSt2ams(
    $filter: ModelMetroSt2amFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMetroSt2ams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Attiguppe
        Jalahalli
        Jayanagar
        MgRoad
        Vijaynagar
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
