import {createContext, useContext, useState, useEffect} from "react";

import {useLocalStorage} from "../hooks/useLocalStorage";

const MusicContext = createContext();

export function AppContext({children}) {
  const [music, setMusic] = useLocalStorage("music", "");
  const [musicSelected, setMusicSelected] = useState();

  useEffect(() => {
    setMusicSelected(music);
  }, [music]);

  const selectMusic = (musicSelected) => {
    setMusic(musicSelected);
  };

  return (
    <MusicContext.Provider value={{selectMusic, musicSelected}}>{children}</MusicContext.Provider>
  );
}
export function useMusicContext() {
  return useContext(MusicContext);
}
