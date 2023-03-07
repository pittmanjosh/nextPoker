import "@styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import GameContext from "src/contexts/GameContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameContext>
      <Component {...pageProps} />
    </GameContext>
  );
}
