import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getNotionData = async (databaseId: string | undefined) => {
  if (databaseId) {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });
    return response.results;
  }
};
