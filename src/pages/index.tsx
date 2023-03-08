import Head from "next/head";
import Table from "@components/Table";
import CharacterSelector from "@components/CharacterSelector";

export default function Home() {
  return (
    <div style={{ padding: "2em" }}>
      <CharacterSelector />
      <Table />
    </div>
  );
}
