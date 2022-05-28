export type TSpecies = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    classification: string, 
    designation: string, 
    average_height: number, 
    average_lifespan: number, 
    language: string, 
    name: string,
    height: number,
    mass: number,
    hair_color: string | 'n/a',
    skin_color: string,
    eye_color: string,
    birth_year: string | unknown,
    gender: "male" | "female" | 'n/a',
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    "created": string,
    "edited": string,
    "url": string
  }>
}