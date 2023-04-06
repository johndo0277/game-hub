import React, { useEffect, useState } from "react";
import apiClient from "../serivices/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesReponse {
  count: number;
  results: Game[];
}
export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesReponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
