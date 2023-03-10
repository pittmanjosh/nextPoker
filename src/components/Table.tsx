import React, { useEffect } from "react";
import { useGameContext, useGameDispatchContext } from "@contexts/GameProvider";
import CharacterImage from "./CharacterImage";
import { Button } from "react-bootstrap";
import { ActionType, GameAction } from "@services/game/reducers";
import CardArray from "./CardArray";
import { GameState } from "@models/Game";

type Props = {};

const Table = (props: Props) => {
  const game = useGameContext();
  const { players, hands, state, community } = game;

  const Community = () => <CardArray cards={community} showFront />;

  return state !== GameState.SELECTING_PLAYERS ? (
    <div className="game-table">
      <Community />
      {hands.map(({ pocket }, index) => {
        const isUser = players[index].isUser;

        return (
          <div className="player" key={players[index].character.nickname}>
            <CharacterImage
              className="in-game"
              isUser={isUser}
              character={players[index].character}
            />
            <CardArray cards={pocket} showFront={isUser} />
          </div>
        );
      })}
      <TableButton />
    </div>
  ) : null;
};

type ButtonProps = {
  type: ActionType;
  label: string;
};
const TableButton = (props: Props) => {
  const { state } = useGameContext();
  const dispatch = useGameDispatchContext();

  const buttons: ButtonProps[] = [
    {
      type: ActionType.DEAL_POCKET,
      label: "Deal Pocket",
    },
    {
      type: ActionType.DEAL_FLOP,
      label: "Deal Flop",
    },
    {
      type: ActionType.DEAL_TURN,
      label: "Deal Turn",
    },
    {
      type: ActionType.DEAL_RIVER,
      label: "Deal River",
    },
    {
      type: ActionType.UPDATE_SCORE,
      label: "Update Score",
    },
  ];

  let resolvedButtonProps: ButtonProps;

  switch (state) {
    case GameState.AWAITING_POCKET:
      resolvedButtonProps = buttons[0];
      break;
    case GameState.AWAITING_FLOP:
      resolvedButtonProps = buttons[1];
      break;
    case GameState.AWAITING_TURN:
      resolvedButtonProps = buttons[2];
      break;
    case GameState.AWAITING_RIVER:
      resolvedButtonProps = buttons[3];
      break;
    case GameState.UPDATING_SCORE:
      resolvedButtonProps = buttons[4];
      break;
    default:
      return null;
  }

  const { type, label } = resolvedButtonProps;

  return (
    <Button onClick={() => dispatch({ type, payload: {} })}>{label}</Button>
  );
};

export default Table;
