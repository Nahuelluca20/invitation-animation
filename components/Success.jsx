import {Stack, Box, Flex, Heading, Text, Image} from "@chakra-ui/react";

export default function Success() {
  return (
    <Stack
      backgroundColor="#F9F1E8"
      boxShadow="dark-lg"
      display={{base: "block", md: "flex"}}
      justifyContent="space-between"
      maxWidth="700px"
      minWidth={{base: "100px", lg: "700px"}}
      overflowY="hidden"
    >
      <Box width="100%" zIndex={1}>
        <Stack p={4}>
          <Flex
            alignItems="center"
            borderBottom="2px solid black"
            justifyContent="space-between"
            pb={2}
          >
            <Flex alignItems="center">
              <Image
                height="30px"
                src="https://img.icons8.com/ios-filled/100/1C1C1C/birthday-presents.png"
                width="30px"
              />
              <Flex ml={2}>
                <Heading color="#E1C091">LOVE</Heading>
                <Heading color="#1C1C1C">AIRLINE</Heading>
              </Flex>
            </Flex>
            <Image
              height="30px"
              src="https://img.icons8.com/ios-filled/100/1C1C1C/airplane-mode-on.png"
              transform="rotate(-50deg)"
              width="30px"
            />
          </Flex>
          <Stack py={5}>
            <Heading>Gracias por Asistir</Heading>
          </Stack>
        </Stack>

        <Stack backgroundColor="#D6B583">
          <Text fontWeight="700" px={5} py={2} textTransform="uppercase">
            birthday pass
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
