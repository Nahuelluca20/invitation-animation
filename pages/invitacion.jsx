import {Heading, Stack, Flex} from "@chakra-ui/react";
import Head from "next/head";
import {useState, useEffect} from "react";

import Success from "../components/Success";
import PlayerMusic from "../components/PlayerMusic";
import {useMusicContext} from "../context/MusicContext";
import Card from "../components/Card";
import MegadethLogo from "../assets/megadethLogo.png";

export default function Invitation() {
  const {musicSelected, invitation} = useMusicContext();
  const [musicInfo, setMusicInfo] = useState({
    imgLogo: "",
    songTitle: "",
    bandName: "",
    url: "",
  });

  const musicGeneres = [
    {
      name: "thrash metal",
      imgLogo: MegadethLogo,
      songTitle: "Tornado of souls",
      bandName: "Megadeth",
      url: "https://www.youtube.com/watch?v=O_WKN7I2VPc&ab_channel=4KVideoEnhancer",
    },

    {
      name: "k-pop",
      imgLogo: MegadethLogo,
      songTitle: "Dynamite",
      bandName: "BTS",
      url: "https://www.youtube.com/watch?v=gdZLi9oWNZg&ab_channel=HYBELABELS",
    },
    {
      name: "luismi ❤️",
      imgLogo: MegadethLogo,
      songTitle: "Ahora te puedes marchar",
      bandName: "Luis Miguel",
      url: "https://www.youtube.com/watch?v=yG7MPEQm1-w&ab_channel=WarnerMusicM%C3%A9xico",
    },
    {
      name: "reggaeton",
      imgLogo: MegadethLogo,
      songTitle: "Despacito ",
      bandName: "Luis Fonsi",
      url: "https://www.youtube.com/watch?v=1Tx_pPB2mU8&ab_channel=OdilonHuamani",
    },
    {
      name: "trap",
      imgLogo: MegadethLogo,
      songTitle: "Hello Cotto",
      bandName: "Duki ",
      url: "https://www.youtube.com/watch?v=6biv8AQcjNU&ab_channel=MUEVARecords",
    },

    {
      name: "nu-metal",
      imgLogo: MegadethLogo,
      songTitle: "Custer",
      bandName: "Slipknot ",
      url: "https://www.youtube.com/watch?v=FdBqOCS8LmM&ab_channel=Slipknot",
    },
    {
      name: "doom metal",
      imgLogo: MegadethLogo,
      songTitle: "Paranoid",
      bandName: "BLACK SABBATH",
      url: "https://www.youtube.com/watch?v=0qanF-91aJo&ab_channel=BlackSabbath",
    },
    {
      name: "heavy metal",
      imgLogo: MegadethLogo,
      songTitle: "The Trooper",
      bandName: "Iron Maiden",
      url: "https://www.youtube.com/watch?v=X4bgXH3sJ2Q&ab_channel=IronMaiden",
    },
    {
      name: "Rock and roll",
      imgLogo: MegadethLogo,
      songTitle: "Rock and Roll",
      bandName: "Led Zeppelin",
      url: "https://www.youtube.com/watch?v=RCN6eRVav5k&ab_channel=LedZeppelin-Topic",
    },
    {
      name: "pop",
      imgLogo: MegadethLogo,
      songTitle: "Thriller",
      bandName: "Michael Jackson",
      url: "https://www.youtube.com/watch?v=4V90AmXnguw&ab_channel=michaeljacksonVEVO",
    },
    {
      name: "jazz",
      imgLogo: MegadethLogo,
      songTitle: "My Way",
      bandName: "Frank Sinatra",
      url: "https://www.youtube.com/watch?v=w019MzRosmk&ab_channel=FrankSinatraVEVO",
    },
    {
      name: "rap",
      imgLogo: MegadethLogo,
      songTitle: "Young Wild And Free",
      bandName: "Snoop Dogg",
      url: "https://www.youtube.com/watch?v=YjDn1kAe154&ab_channel=JesusJoel",
    },
  ];

  async function Play() {
    try {
      const res = await musicGeneres.filter((item) => item.name === musicSelected);

      const result = await res[0];

      if (musicSelected === result.name) {
        setMusicInfo({
          imgLogo: result.imgLogo,
          songTitle: result.songTitle,
          bandName: result.bandName,
          url: result.url,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    Play();
  }, [musicSelected]);

  return (
    <>
      <Head>
        <title>Aylén XV</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <div className="star-field">
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
        <Stack
          backgroundColor="#1B1B1B"
          height={{lg: "100vh"}}
          justify="center"
          overflow="hidden"
          p="20px"
        >
          <Heading
            color="#E1C091"
            fontFamily="Dancing Script"
            fontSize="45px"
            fontWeight="700"
            pb={10}
            textAlign="center"
            textTransform="uppercase"
          >
            {musicSelected}
          </Heading>
          <Flex
            alignItems="center"
            direction={{lg: "row-reverse"}}
            display={{base: "block", lg: "flex"}}
            justifyContent="space-around"
          >
            <Stack color="white" mb={{base: "10", lg: "0"}} textAlign="center">
              <PlayerMusic
                bandName={musicInfo.bandName}
                songTitle={musicInfo.songTitle}
                url={musicInfo.url}
              />
            </Stack>
            {invitation ? <Success /> : <Card />}
          </Flex>
        </Stack>
      </div>
    </>
  );
}
