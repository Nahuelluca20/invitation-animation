import {Heading, Stack} from "@chakra-ui/react";

import Card from "../components/Card";

export default function Home() {
  return (
    <Stack
      backgroundColor="#1B1B1B"
      height={{lg: "100vh"}}
      justify="center"
      overflow="hidden"
      p="20px"
    >
      <Heading color="#E1C091" fontSize="50px" pb={10} textAlign="center">
        MIS XV AÑOS
      </Heading>
      <Card />
    </Stack>
  );
}
