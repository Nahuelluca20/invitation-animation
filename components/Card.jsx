import {
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  Flex,
  Box,
  Link,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import {useSpring, animated} from "react-spring";

import {useMusicContext} from "../context/MusicContext";

import ConfirmButton from "./ConfirmButton";
import InputText from "./InputText";
import Header from "./Header";

const calc = (x, y) => [
  ((y - window.innerHeight / 2) / window.innerHeight) * 12,
  ((x - window.innerWidth / 2) / window.innerWidth) * 12,
];
const trans = (x, y) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`;

function Card() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 0],
    config: {mass: 5, tension: 200, friction: 50},
  }));

  const {chagePersonName, changeNumberPersons, selectedGroup, setSelectedGroup} = useMusicContext();

  return (
    <animated.div
      style={{
        transform: props.xys.interpolate(trans),
        maxWidth: "700px",
      }}
      onMouseLeave={() => set({xys: [0, 0, 1]})}
      onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
    >
      <Flex
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
            <Stack pt={5}>
              <InputText
                functionChange={chagePersonName}
                label="Nombre y Apellido:"
                placeholder="Ponga su Nombre"
              />
              <InputText
                functionChange={changeNumberPersons}
                label="Números de personas:"
                placeholder="Ponga el n° de personas"
              />
              <Header text="29/10/2022" title="Fecha" />
              <Header text="Aires del Sausal, 21hs" title="Lugar y Hora" />
            </Stack>
          </Stack>
          <Stack pb={5} pl={5}>
            <RadioGroup value={selectedGroup} onChange={setSelectedGroup}>
              <Stack>
                <Radio colorScheme="green" size="lg" value="542615324236">
                  Confirmar a Aylén
                </Radio>
                <Radio colorScheme="green" size="lg" value="542616520819">
                  Confirmar a Lorena
                </Radio>
              </Stack>
            </RadioGroup>
          </Stack>

          <Stack backgroundColor="#D6B583">
            <Text fontWeight="700" px={5} py={2} textTransform="uppercase">
              birthday pass
            </Text>
          </Stack>
        </Box>

        <Flex display={{base: "block", md: "flex"}}>
          <Divider
            borderColor="black"
            borderWidth={{base: "1px"}}
            my={{base: 5, md: 0}}
            orientation="vertical"
            variant="dashed"
          />

          <Stack justify="space-between">
            <Stack p={4} textAlign="center">
              <Heading borderBottom="2px solid black" pb={2}>
                D/A
              </Heading>
              <Text
                color="#D6B486"
                fontWeight="600"
                pt={5}
                textAlign="center"
                textTransform="uppercase"
              >
                Come fly with me
              </Text>
              <Link
                href="https://www.google.com/maps/place/Aires+del+Sauzal/@-32.865999,-68.7494954,15z/data=!4m5!3m4!1s0x0:0xdb24486077b1fb85!8m2!3d-32.865999!4d-68.7494954"
                style={{textDecoration: "none"}}
              >
                <Stack alignItems="center" cursor="pointer">
                  <Text fontWeight="600">29/10/2022</Text>
                  <Image
                    src="https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FAires%2Bdel%2BSauzal%2F%40-32.865999%2C-68.7494954%2C15z%2Fdata%3D%214m5%213m4%211s0x0%3A0xdb24486077b1fb85%218m2%213d-32.865999%214d-68.7494954&s=6&e=m"
                    width="150px"
                  />
                  <Text color="#D6B486" fontWeight="600" textTransform="uppercase">
                    qr scan/click
                  </Text>
                </Stack>
              </Link>
            </Stack>
            <Stack backgroundColor="#D6B583">
              <ConfirmButton />
            </Stack>
          </Stack>
        </Flex>
      </Flex>
    </animated.div>
  );
}

export default Card;
