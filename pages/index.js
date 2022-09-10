import { Heading, Stack } from "@chakra-ui/react";
import Head from "next/head";

import GenderMusicSelector from "../components/GenderMusicSelector";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aylén XV</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <div class="star-field">
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>

      <Stack
        backgroundColor="#1B1B1B"
        justify="center"
        overflow="hidden"
        p="20px"
      >
        <Heading
          fontWeight="700"
          color="#E1C091"
          fontFamily="Dancing Script"
          fontSize="50px"
          pb={10}
          textAlign="center"
        >
          MIS XV AÑOS
        </Heading>
        <GenderMusicSelector />
      </Stack>

      </div>
    </>
  );
}
