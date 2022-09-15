import {Link} from "@chakra-ui/react";

import {useMusicContext} from "../context/MusicContext";

function ConfirmButton() {
  const {setInvitationState, personName, numberPersons, selectedGroup} = useMusicContext();

  if (
    numberPersons !== undefined &&
    personName !== undefined &&
    (selectedGroup === "542615324236" || selectedGroup === "542616520819")
  ) {
    return (
      <Link
        cursor="pointer"
        fontWeight="700"
        href={`https://wa.me/${selectedGroup}?text=${
          "Hola! mi nombre es: " + personName + " y vamos: " + numberPersons
        }`}
        px={5}
        py={2}
        textTransform="uppercase"
        onClick={() => setInvitationState()}
      >
        Confirmar
      </Link>
    );
  } else {
    return (
      <Link
        cursor="pointer"
        fontWeight="700"
        px={5}
        py={2}
        textTransform="uppercase"
        onClick={() =>
          alert("completa todos los campos: Nombre, numero de personas y a quién confirmar")
        }
      >
        Confirmar
      </Link>
    );
  }
}

export default ConfirmButton;
