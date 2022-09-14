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
      title: "luismi ❤️",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9C6RSm-tabIuYWLBp2XNtt6sLOjTPN63TA&usqp=CAU",
      title: "rock nacional",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63Llm7rnPo4370NIG9iX-ifb4U9y4uB-sVQ&usqp=CAU",
      title: "cuarteto",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSre-O6vUFwvZ09zZvjL69GmJa1qWsy2jwSZA&usqp=CAU",
      title: "folklore",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSynjiwFgXymCEV0L4aPr-O7eC8M_4_WGDFsw&usqp=CAU",
      title: "cumbia",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIlL-r9GAQm5b-yXoGBMEG5YKsf9a9NuwW4g&usqp=CAU",
      title: "ska",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQRpolcNTD76tDkpzOVQ9stwwXMkWzCiCiQ&usqp=CAU",
      title: "reggaeton",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnu3DT2K6hrOKRr3Uj7anUqY4priAfTHJtA&usqp=CAU",
      title: "rap metal",
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
      <Heading
        color="#E1C091"
        fontFamily="Playfair Display"
        fontSize="45px"
        fontWeight="700"
        pb={20}
        textAlign="center"
      >
        Elige tu género favorito
      </Heading>
      <Grid
        columnGap={{base: "10", lg: "0"}}
        gridTemplateColumns={{base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)"}}
        justifyContent="center"
        px={10}
        rowGap={{base: "20px", lg: "40px"}}
      >
        {items.map((item) => (
          <Link
            key={item.title}
            cursor="pointer"
            href="/invitacion"
            textAlign="center"
            onClick={() => selectMusic(item.title)}
          >
            <Stack align="center">
              <Image borderRadius="full" boxSize="100px" src={item.img} />
              <Text
                color="#E1C091"
                fontFamily="Playfair Display"
                fontWeight="700"
                textTransform="uppercase"
              >
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
