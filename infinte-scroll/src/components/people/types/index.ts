export type TPeople = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string,
    height: number,
    mass: number,
    hair_color: string | 'n/a',
    skin_color: string,
    eye_color: string,
    birth_year: string | unknown,
    gender: "male" | "female" | 'n/a',
    homeworld: "https://swapi.dev/api/planets/1/",
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    "created": string,
    "edited": string,
    "url": string
  }>
}