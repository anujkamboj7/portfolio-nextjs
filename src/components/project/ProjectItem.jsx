import {
  Box,
  Link,
  Heading,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

const ProjectItem = ({ projects }) => {
  const color = useColorModeValue("gray.800", "blue.400");

  return (
    <Box>
      {projects.map((project) => (
        <Box mt={{ base: "30px", sm: "40px" }} key={project.id}>
          <Heading as='h2' size='md' fontWeight='bold' color={color}>
            {project.properties.Title.title[0].plain_text}
          </Heading>
          <Box mt='8px' mb='10px'>
            {project.properties.Tags.multi_select.map((tag) => (
              <Text
                as='span'
                px='4px'
                marginRight='10px'
                fontSize='14px'
                backgroundColor='gray.700'
                textTransform='lowercase'
                color='gray.200'
                borderRadius='3px'
                key={tag.id}
                whiteSpace='nowrap'
              >
                #{tag.name}
              </Text>
            ))}
          </Box>

          <Text fontSize='15px' marginBottom='10px'>
            {project.properties.Description.rich_text[0].plain_text}
          </Text>

          <HStack spacing='20px'>
            {project.properties.Live_Url.url ? (
              <Link
                href={project.properties.Live_Url.url}
                fontWeight='semibold'
                textDecoration='underline'
                _focus={{ outline: "none" }}
                isExternal
              >
                View Live
              </Link>
            ) : (
              ""
            )}

            {project.properties.Github_Url.url ? (
              <Link
                href={project.properties.Github_Url.url}
                fontWeight='semibold'
                textDecoration='underline'
                _focus={{ outline: "none" }}
                isExternal
              >
                Source Code
              </Link>
            ) : (
              ""
            )}
          </HStack>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectItem;
