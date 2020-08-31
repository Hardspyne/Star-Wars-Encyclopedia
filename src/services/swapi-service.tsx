import Planet from "../model/planet";
import StarShip from "../model/star-ship";
import Person from "../model/person";
import {
    BaseResponseModel,
    ListResponseModel,
    PersonResponseModel,
    PlanetResponseModel,
    StarShipResponseModel
} from "../model/response-model";
import axios from "axios";
import SwApiServiceInterface from "../model/swapi-service-interface";


export default class SwApiService implements SwApiServiceInterface{

    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    async getResource<T>(url: string): Promise<T> {
        const res = await axios.get<T>(`${this._apiBase}${url}`);
        if (!(res.status >= 200 && res.status < 300)) {
            throw new Error(`fetch error for url ${url}`)
        }
        return res.data;
    };

    getAllPerson = async (page: number): Promise<Person[]> => {
        const persons = await this.getResource<ListResponseModel<PersonResponseModel>>(`/people?page=${page}`);
        return Promise.all(persons.results.map((person: any) => this._convertToPerson(person)));
    };

    getAllPersonsCount = async (): Promise<number> => {
        const persons = await this.getResource<ListResponseModel<PersonResponseModel>>(`/people`);
        return persons.count;
    };


    getPerson = async (id: string): Promise<Person> => {
        const result = await this.getResource<PersonResponseModel>(`/people/${id}`);
        return await this._convertToPerson(result);
    };


    getAllPlanets = async (page: number): Promise<Planet[]> => {
        const planets = await this.getResource<ListResponseModel<PlanetResponseModel>>(`/planets?page=${page}`);
        return Promise.all(planets.results.map((planet: any) => this._convertToPlanet(planet)));
    };

    getAllPlanetsCount = async (): Promise<number> => {
        const planets = await this.getResource<ListResponseModel<PlanetResponseModel>>(`/planets`);
        return planets.count;
    };

    getPlanet = async (id: number): Promise<Planet> => {
        const result = await this.getResource<PlanetResponseModel>(`/planets/${id}`);
        return await this._convertToPlanet(result);
    };

    getAllStarShips = async (page: number): Promise<StarShip[]> => {
        const starShips = await this.getResource<ListResponseModel<StarShipResponseModel>>(`/starships?page=${page}`);
        return Promise.all(starShips.results.map((starShips: any) => this._convertToStarShip(starShips)));
    };

    getAllStarShipsCount = async (): Promise<number> => {
        const starShips = await this.getResource<ListResponseModel<StarShipResponseModel>>(`/starships`);
        return starShips.count;
    };

    getStarShip = async (id: string): Promise<StarShip> => {
        const result = await this.getResource<StarShipResponseModel>(`/starships/${id}`);
        return await this._convertToStarShip(result);
    };

    async _getImageUrBylId(id: string, type: string) {
        const res = await fetch(`${this._imageBase}/${type}/${id}.jpg`);
        if (!res.ok) {
            return null;
        } else {
            return res.url;
        }
    }

    static _extractId(from: BaseResponseModel) {
        const idRegex = /\/([0-9]+)\/$/;

        let matchArray = from.url.match(idRegex);
        if (matchArray != null && matchArray.length >= 2) {
            return matchArray[1];
        }
        throw new Error("cant extract id from response");
    }

    async _convertToPlanet(from: PlanetResponseModel): Promise<Planet> {
        const id = SwApiService._extractId(from);
        const imageUrl = await this._getImageUrBylId(id, 'planets');
        return {
            id,
            imageUrl,
            name: from.name,
            population: from.population,
            diameter: from.diameter,
            rotationPeriod: from.rotation_period
        }
    }

    async _convertToStarShip(from: StarShipResponseModel): Promise<StarShip> {
        const id = SwApiService._extractId(from);
        const imageUrl = await this._getImageUrBylId(id, 'starships');

        return {
            id,
            imageUrl: imageUrl,
            name: from.name,
            model: from.model,
            manufacturer: from.manufacturer,
            costInCredits: from.cost_in_credits,
            length: from.length,
            crew: from.crew,
            passengers: from.passengers,
            cargoCapacity: from.cargo_capacity
        }
    }


    async _convertToPerson(from: PersonResponseModel): Promise<Person> {
        const id = SwApiService._extractId(from);
        const imageUrl = await this._getImageUrBylId(id, 'characters');
        return {
            id,
            imageUrl,
            name: from.name,
            gender: from.gender,
            birthYear: from.birth_year,
            eyeColor: from.eye_color
        }
    }

}