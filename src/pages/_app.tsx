import "@styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import GameProvider from "@contexts/GameProvider";
import { useReducer } from "react";
import reducer from "@services/game/reducers";
import Game, { initialGame } from "@models/Game";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  );
}
