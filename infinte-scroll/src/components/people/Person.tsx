import React from 'react';

type PersonProps = {
  name: string;
  hairColor: string;
  eyeColor: string;
}
export const Person: React.FC<PersonProps> = ({name, hairColor, eyeColor}) => {
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  )
}