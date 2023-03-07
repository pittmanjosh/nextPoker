import createDeck from "@services/createDeck";
import { PropsWithChildren, createContext, useState, useReducer } from "react";
import Card from "../classes/Card";
import Player, { Score } from "../models/Player";
import Character from "@models/Character";
import playersReducer from "./reducers/playersReducer";

export const Context = createContext({});

const GameContext = ({ children }: PropsWithChildren) => {
  const [players, playersDispatch] = useReducer(playersReducer, []);
  const [community, setCommunity] = useState<Array<Card>>([]);
  const [deck, setDeck] = useState<Array<Card>>(createDeck());

  return (
    <Context.Provider value={{ players, community, deck }}>
      {children}
    </Context.Provider>
  );
};

export default GameContext;
