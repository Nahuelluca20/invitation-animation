import {createContext, useContext, useState, useEffect} from "react";

import {useLocalStorage} from "../hooks/useLocalStorage";

const MusicContext = createContext();

export function AppContext({children}) {
  const [music, setMusic] = useLocalStorage("music", "");
  const [musicSelected, setMusicSelected] = useState();
  const [invitation, setInvitation] = useState(false);
  const [personName, setPersonName] = useState();
  const [numberPersons, setNumberPersons] = useState();

  useEffect(() => {
    setMusicSelected(music);
  }, [music]);

  const selectMusic = (musicSelected) => {
    setMusic(musicSelected);
  };

  const setInvitationState = () => {
    setInvitation(true);
  };

  const chagePersonName = (e) => {
    e.preventDefault();
    setPersonName(e.target.value);
  };

  const changeNumberPersons = (e) => {
    e.preventDefault();
    setNumberPersons(e.target.value);
  };

  return (
    <MusicContext.Provider
      value={{
        selectMusic,
        musicSelected,
        invitation,
        setInvitationState,
        chagePersonName,
        changeNumberPersons,
        personName,
        numberPersons,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
export function useMusicContext() {
  return useContext(MusicContext);
}
