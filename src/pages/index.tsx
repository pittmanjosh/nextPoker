import Head from "next/head";
import { useGameContext, useGameDispatchContext } from "@contexts/GameProvider";
import Table from "@components/Table";
import { Button } from "react-bootstrap";
import { ActionType } from "@services/reducers";
import { CHARACTERS } from "@models/Character";
import CharacterSelector from "@components/CharacterSelector";

export default function Home() {
  const game = useGameContext();
  const dispatch = useGameDispatchContext();

  return (
    <div style={{ padding: "2em" }}>
      <CharacterSelector />
      <Table />
    </div>
  );
}
