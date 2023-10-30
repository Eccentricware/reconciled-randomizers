import React, { FC, useState } from 'react';

interface UltimateProps {}

const UltimateBody: FC<UltimateProps> = () => {
  const [mode, setMode] = useState('');

  return (
    <main>
      <h1>Ultimate Page</h1>
      <select value={mode}>
        <option>Single</option>
        <option>3 Person Squad Strike</option>
        <option>5 Person Squad Strike</option>
        <option>Custom</option>
        <option>Favor Editing</option>
      </select>
    </main>
  )
};

export default UltimateBody;