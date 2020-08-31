import Person from "./person";
import Planet from "./planet";
import StarShip from "./star-ship";

export default interface SwApiServiceInterface {
    getAllPerson: (page: number) => Promise<Person[]>
    getAllPersonsCount: () => Promise<number>
    getPerson: (id: string) => Promise<Person>
    getAllPlanets: (page: number) => Promise<Planet[]>
    getAllPlanetsCount: () => Promise<number>
    getPlanet: (id: number) => Promise<Planet>
    getAllStarShips: (page: number) => Promise<StarShip[]>
    getAllStarShipsCount: () => Promise<number>
    getStarShip: (id: string) => Promise<StarShip>
}