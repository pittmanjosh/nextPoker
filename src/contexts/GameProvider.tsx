import React, {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import Game, { initialGame } from "@models/Game";
import reducer, { GameAction } from "@services/reducers";

const GameContext = createContext<Game>(initialGame);
const GameDispatchContext = createContext<Dispatch<GameAction>>(() => {});

export default function GameProvider({ children }: PropsWithChildren) {
  const [game, dispatch] = useReducer(reducer, initialGame);

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}

export const useGameContext = () => {
  return useContext(GameContext);
};

export const useGameDispatchContext = () => {
  return useContext(GameDispatchContext);
};
