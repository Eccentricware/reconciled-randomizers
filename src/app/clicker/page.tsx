'use client';

import { useEffect, useState } from "react";

import { ChargeTypes, Spell } from "./models/spells";
import { createTimeline, RotationState } from "./utils/rotation-planner";
import { start } from "repl";
import { create } from "domain";

export default function Home() {
  const [dmgArtifacts, setDmgArtifacts] = useState<Artifact[]>([]);
  const [clkDmgArtifacts, setClkDmgArtifacts] = useState<Artifact[]>([]);

  const [dmgTotalMultiplier, setDmgTotalMultiplier] = useState(0);
  const [clkDmgTotalMultiplier, setClkDmgTotalMultiplier] = useState(0);

  const [spells, setSpells] = useState<Spell[]>([]);
  const [rotation, setRotation] = useState<RotationState[]>(createTimeline(spells));

  useEffect(() => {
    setRotation(createTimeline(spells));
  }, [spells]);

  return (
    <main>
      <h1>Wizard</h1>
      <table>
        <thead>
          <tr>
            <th>Elapsed</th>
            <th>Spell</th>
            <th>EEC</th>
            <th>EMC</th>
            <th>Energy</th>
            <th>Mana</th>
            <th>FFS</th>
            <th>IFS</th>
            <th>LFS</th>
            <th>DRS</th>
            <th>EC</th>
            <th>FL2</th>
            <th>Ritual Timer</th>
            <th>Energon Timer</th>
          </tr>
        </thead>
        <tbody>
          {rotation.map((state, index) => (
            <tr key={index}>
              <td>{state.elapsedTime}</td>
              <td>{state.spellName}</td>
              <td>-</td>
              <td>-</td>
              <td>{state.energy}</td>
              <td>{state.mana}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}