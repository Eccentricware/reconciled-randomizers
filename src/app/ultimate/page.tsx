'use client';

import { ChangeEvent, useState } from 'react';

export default function Home() {
  const [mode, setMode] = useState(1);

  const handleModeChange = (poolMode: number) => {
    setMode(poolMode);
  }

  return (
    <main>
      {mode === 1 && <h1>Single</h1>}
      {mode === 3 && <h1>3-Person Squad Strike</h1>}
      {mode === 5 && <h1>5-Person Squad Strike</h1>}
      {mode === 0 && <h1>Custom</h1>}
      {mode === -1 && <h1>Favor Editing</h1>}

      <select value={mode} onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        handleModeChange(Number(e.target.value))
      }}>
        <option value={1}>Single</option>
        <option value={3}>3 Person Squad Strike</option>
        <option value={5}>5 Person Squad Strike</option>
        <option value={0}>Custom</option>
        <option value={-1}>Favor Editing</option>
      </select>
    </main>
  )
}