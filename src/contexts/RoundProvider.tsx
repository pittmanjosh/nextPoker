import React, {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import Card from "@classes/Card";
import Round from "@models/Round";
import roundReducer, {
  initialRound,
  RoundAction,
} from "@services/round/reducers";

const RoundContext = createContext<Round>(initialRound);
const RoundDispatchContext = createContext<Dispatch<RoundAction>>(() => {});

export default function RoundProvider({ children }: PropsWithChildren) {
  const [round, dispatch] = useReducer(roundReducer, initialRound);

  return (
    <RoundContext.Provider value={round}>
      <RoundDispatchContext.Provider value={dispatch}>
        {children}
      </RoundDispatchContext.Provider>
    </RoundContext.Provider>
  );
}

export const useRoundContext = () => {
  return useContext(RoundContext);
};

export const useRoundDispatchContext = () => {
  return useContext(RoundDispatchContext);
};
