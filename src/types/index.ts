export interface Film {
  id: string;
  title: string;
  director: string;
  releaseDate: string;
  openingCrawl: string;
  episodeID?: string;
}

export interface Description {
  id: string;
  name: string;
}

export interface Person {
  name: string;
  species?: Species;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  mass: string;
  skinColor: string;
  starshipConnection?: StarshipConnection;
  vehicleConnection: VehicleConnection;
}

export interface Species {
  name: string;
}

export interface StarshipConnection {
  starships: Starship[];
}

export interface Starship {
  id: string;
  name: string;
}

export interface VehicleConnection {
  vehicles: Vehicle[];
}

export interface Vehicle {
  id: string;
  name: string;
}
