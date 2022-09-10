import {Text, Heading, Stack} from "@chakra-ui/react";

function Header({title, text}) {
  return (
    <Stack>
      <Heading color="#C9AA79" fontSize="15px" fontWeight="600" mb={0} ml={2}>
        {title}
      </Heading>
      <Text backgroundColor="white" borderRadius={0} px={5} py={1}>
        {text}
      </Text>
    </Stack>
  );
}

export default Header;
