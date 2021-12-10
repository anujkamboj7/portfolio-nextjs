import { Heading, Box, Flex } from "@chakra-ui/react";
import ProjectList from "./ProjectList";

const Project = ({ projects }) => {
  return (
    <Box
      maxW='2xl'
      mx='auto'
      px='20px'
      py={{ base: "30px", sm: "40px" }}
      id='projects'
    >
      <Flex alignItems='center' justifyContent='center' pb='10px'>
        <Heading as='h2' fontSize='18px' fontWeight='semibold' mr='5px'>
          Projects
        </Heading>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z'
          ></path>
          <path
            fill='currentColor'
            d='m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z'
          ></path>
        </svg>
      </Flex>
      <ProjectList projects={projects} />
    </Box>
  );
};

export default Project;
