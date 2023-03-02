import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@styles/Home.module.css";
import createDeck from "@services/createDeck";
import Card from "@components/Card";
import sortCards from "@services/sortCards";
import Game from "@models/Game";
import { useState } from "react";
import { Button } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [game, setGame] = useState(new Game());

  return (
    <div>
      <Button
        onClick={() => {
          game.getDeck().shuffle();
          setGame(game);
        }}
      >
        Shuffle Deck
      </Button>
    </div>
  );
}
