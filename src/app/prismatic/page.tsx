'use client';

import DeckStandings from "@/components/prismatic/DeckStandings";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [mode, setMode] = useState(1);

  const handleModeChange = (displayMode: number) => {
    setMode(displayMode);
  }
  
  return (
    <main>
      { mode === 1 && <DeckStandings /> }
      { mode === 2 && <h1>Selected</h1>}

      <select
        value={mode}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          handleModeChange(Number(e.target.value));
        }}
      >
        <option value={1}>Standings</option>
        <option value={2}>Selected</option>
      </select>
    </main>
  )
}