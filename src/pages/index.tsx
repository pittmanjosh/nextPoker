import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@styles/Home.module.css";
import createDeck from "@services/createDeck";
import Card from "@components/Card";
import sortCards from "@services/sortCards";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import CharacterSelector from "@components/CharacterSelector";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <CharacterSelector />
      <Button>Button </Button>
    </div>
  );
}
