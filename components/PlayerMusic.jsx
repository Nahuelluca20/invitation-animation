import {useState, useEffect} from "react";
import {Heading} from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";

function PlayerMusic({url, bandName, songTitle}) {
  // const ReactPlayer = dynamic(() => import("react-player/lazy"), {ssr: true});
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      <Heading fontSize="20px" fontWeight="600">
        {songTitle}
      </Heading>
      <Heading fontSize="20px" fontWeight="600" pb={4}>
        {bandName}
      </Heading>
      {hasWindow && <ReactPlayer height="200px" playing={true} url={url} width="100%" />}
    </>
  );
}

export default PlayerMusic;
