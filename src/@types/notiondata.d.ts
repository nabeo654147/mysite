import type {
  QueryDatabaseResponse,
  ListBlockChildrenResponse,
  QueryDatabaseParameters,
  ListDatabasesResponse,
  GetDatabaseResponse,
  UpdatePageBodyParameters,
} from '@notionhq/client/build/src/api-endpoints';

declare type NotionPage = QueryDatabaseResponse['results'][number];

declare type NotionProperty = QueryDatabaseResponse['results'][number]['properties'];

// export type NotionProperty = ListDatabasesResponse['results'];
// export type NotionProperty = ListDatabasesResponse['results'][number]['properties'];
