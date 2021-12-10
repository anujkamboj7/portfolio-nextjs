import Head from "next/head";
import { Box, Heading, Text } from "@chakra-ui/react";
import Project from "../src/components/project";
const { Client } = require("@notionhq/client");

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Anuj kamboj - Software Developer</title>
        <meta
          name='description'
          content='Hey, I am Anuj Kamboj a Software Developer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        maxW='2xl'
        mx='auto'
        px={{ base: "16px", sm: "20px" }}
        textAlign='center'
        sx={{
          "&::-webkit-scrollbar": {
            width: "16px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
        }}
      >
        <Box py={{ base: "80px", sm: "120px" }}>
          <Heading
            as='h1'
            size='2xl'
            mb='25px'
            fontWeight='bold'
            bgGradient='linear(to-l, #48c6ef, #6f86d6)'
            bgClip='text'
            lineHeight='130%'
          >
            Hi, I'm Anuj Kamboj
          </Heading>
          <Heading
            as='h2'
            size='lg'
            fontWeight='medium'
            lineHeight='tall'
            color='gray.500'
          >
            I'm a
            <Text as='span' color='gray.300'>
              {" "}
              Developer,{" "}
            </Text>
            who loves{" "}
            <Text as='span' color='gray.300'>
              to build Web Apps
            </Text>{" "}
            and{" "}
            <Text as='span' color='gray.300'>
              deliver quality products.
            </Text>
          </Heading>
        </Box>
      </Box>
      <Project projects={projects} />
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return {
    props: {
      projects: response.results,
    },
    revalidate: 1,
  };
}
