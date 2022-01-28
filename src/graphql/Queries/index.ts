import { gql } from "apollo-boost";

export const GET_FILMS = gql`
  {
    allFilms {
      films {
        id
        title
        director
        releaseDate
        openingCrawl
      }
    }
  }
`;

export const GET_FILM_INFO = gql`
  query ($id: ID) {
    film(id: $id) {
      id
      title
      episodeID
      director
      releaseDate
      openingCrawl
      producers
      starshipConnection {
        starships {
          id
          name
          starshipClass
        }
      }
      planetConnection {
        planets {
          id
          name
        }
      }
      speciesConnection {
        species {
          id
          name
        }
      }
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
      characterConnection {
        characters {
          id
          name
        }
      }
    }
  }
`;

export const GET_CHARACTER_INFO = gql`
  query ($id: ID) {
    person(id: $id) {
      id
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
      species {
        name
      }
      homeworld {
        name
      }
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
      starshipConnection {
        starships {
          id
          name
        }
      }
    }
  }
`;
