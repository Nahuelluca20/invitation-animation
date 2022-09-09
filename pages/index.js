import {Heading, Stack} from "@chakra-ui/react";
import Head from "next/head";

import GenderMusicSelector from "../components/GenderMusicSelector";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aylén XV</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <Stack backgroundColor="#1B1B1B" justify="center" overflow="hidden" p="20px">
        <Heading color="#E1C091" fontSize="50px" pb={10} textAlign="center">
          MIS XV AÑOS
        </Heading>
        <GenderMusicSelector />
      </Stack>
    </>
  );
}
