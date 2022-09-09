import dynamic from "next/dynamic";
import {Heading} from "@chakra-ui/react";

function PlayerMusic({url, bandName, songTitle}) {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {ssr: false});

  return (
    <>
      <Heading fontSize="20px" fontWeight="600">
        {songTitle}
      </Heading>
      <Heading fontSize="20px" fontWeight="600" pb={4}>
        {bandName}
      </Heading>
      <ReactPlayer height="200px" playing={true} url={url} width="100%" />
    </>
  );
}

export default PlayerMusic;
