import React from "react";

type SpeciesProps = {
  name: string;
  language: string;
  averageLifespan: number;
}

export const Species: React.FC<SpeciesProps> = ({ name, language, averageLifespan}) => {
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifespan}</li>
      </ul>
    </li>
  )
}