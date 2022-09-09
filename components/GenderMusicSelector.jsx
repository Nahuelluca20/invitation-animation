import {Link, Image, Text, Grid, Heading, Stack} from "@chakra-ui/react";

import {useMusicContext} from "../context/MusicContext";

function GenderMusicSelector() {
  const items = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0BSrKjNFo-BjgAMfMBUorl03MqfzIU1JIg&usqp=CAU",
      title: "thrash metal",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqruX1ynIiW4CFw_ee4hlv7RT46d0Rvi6yQ&usqp=CAU",
      title: "k-pop",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHTyqWjDfJCKsUTuPIabZzvZJZS8AITrVxA&usqp=CAU",
      title: "luismi <3",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQRpolcNTD76tDkpzOVQ9stwwXMkWzCiCiQ&usqp=CAU",
      title: "reggaeton",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3MhyQONNkmhkaiO1ijuIYY6zt64YWBNKJQ&usqp=CAU",
      title: "trap",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGYuooIAK3KhcPVPe86rrWK2rjSDTTDdKCQ&usqp=CAU",
      title: "nu-metal",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxL3Gvq0Sj1jigCAOFYAaXsm2swWq2HBFkPA&usqp=CAU",
      title: "doom metal",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRINWTa7wDoaTvOnsi3XSCBeNlqtVywejmiQ&usqp=CAU",
      title: "heavy metal",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxM09PN-J5tbnbscNEjBRQU0lO-DqgVozFhw&usqp=CAU",
      title: "Rock and roll",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyEl75hVIJ90PYESbs3nKBVaAOB9EuXUXmw&usqp=CAU",
      title: "pop",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUUd3PeeX1YjwRjhKpaHVkCxZRQ_HcYwUCg&usqp=CAU",
      title: "jazz",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QtQCZxiLv-AmkBR1TV8b6kLdIbvcCSI39A&usqp=CAU",
      title: "rap",
    },
  ];

  const {selectMusic} = useMusicContext();

  return (
    <>
      <Heading color="#E1C091" fontSize="45px" fontWeight="700" pb={20} textAlign="center">
        Elige tu género favorito
      </Heading>
      <Grid
        gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)"}}
        justifyContent="center"
        px={20}
        rowGap={{base: "20px", lg: "40px"}}
      >
        {items.map((item) => (
          <Link
            key={item.title}
            cursor="pointer"
            href="/invitacion"
            onClick={() => selectMusic(item.title)}
          >
            <Stack align="center">
              <Image borderRadius="full" boxSize="100px" src={item.img} />
              <Text color="#E1C091" fontWeight="700" textTransform="uppercase">
                {item.title}
              </Text>
            </Stack>
          </Link>
        ))}
      </Grid>
    </>
  );
}

export default GenderMusicSelector;
