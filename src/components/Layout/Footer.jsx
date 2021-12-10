import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box px='20px' py='16px'>
      <Box maxW='7xl' mx='auto'>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Text p={"16px"} fontSize='14px'>
            <Link
              href='https://github.com/anujkamboj7/portfolio-nextjs'
              textDecoration='underline'
              _focus={{ outline: "none" }}
              isExternal
            >
              Source code on Github
            </Link>
          </Text>
          <Link href='/' mx='8px' _focus={{ outline: "none" }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 32 32'
            >
              <path
                id='Subtraction_1'
                data-name='Subtraction 1'
                d='M16,32A16,16,0,0,1,4.686,4.686,16,16,0,1,1,27.314,27.314,15.9,15.9,0,0,1,16,32Zm4.385-15.278h0L23.124,21h2.615l-3.9-5.925,3.787-4.739h-2.7l-2.718,3.508-.967,1.326V10.336h-2.2V21h2.2V17.953l1.142-1.229ZM9.12,18.8h3.853l.74,2.2h2.336L12.057,10.336H10.021L6.052,21H8.388l.731-2.2Zm3.26-1.78H9.714l1.326-3.991,1.34,3.99Z'
                fill='rgba(255,255,255,0.98)'
              />
            </svg>
          </Link>
          <Text p='16px' fontSize='14px'>
            Copyright © 2021 Anuj Kamboj
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
