const { Client } = require("@notionhq/client");

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId,
  });
  console.log(response);
  res.status(200).json(response.results);
}
