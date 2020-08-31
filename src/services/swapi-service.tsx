export default class SwApiService {

    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    async getResource(url:string) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`fetch error for url ${url}`)
        }
        return await res.json();
    };

    getAllPerson = async (page:number) => {
        const persons = await this.getResource(`/people?page=${page}`);
        return Promise.all(persons.results.map((person:any) => this._convertToPerson(person)));
    };

    getAllPersonsCount = async () => {
        const persons = await this.getResource(`/people`);
        return persons.count;
    };


    getPerson = async (id:string) => {
        const result = await this.getResource(`/people/${id}`);
        return await this._convertToPerson(result);
    };


    getAllPlanets = async (page:number) => {
        const planets = await this.getResource(`/planets?page=${page}`);
        return Promise.all(planets.results.map((planet:any) => this._convertToPlanet(planet)));
    };

    getAllPlanetsCount = async () => {
        const planets = await this.getResource(`/planets`);
        return planets.count;
    };

    getPlanet = async (id:number) => {
        const result = await this.getResource(`/planets/${id}`);
        return await this._convertToPlanet(result);
    };

    getAllStarShips = async (page:number) => {
        const starShips = await this.getResource(`/starships?page=${page}`);
        return Promise.all(starShips.results.map((starShips:any) => this._convertToStarShip(starShips)));
    };

    getAllStarShipsCount = async () => {
        const starShips = await this.getResource(`/starships`);
        return starShips.count;
    };

    getStarShip = async (id:string) => {
        const result = await this.getResource(`/starships/${id}`);
        return await this._convertToStarShip(result);
    };

    async _getImageUrBylId(id:string, type:string) {
        const res = await fetch(`${this._imageBase}/${type}/${id}.jpg`);
        if (!res.ok) {
            return null;
        } else {
            return res.url;
        }
    }

    static _extractId(from:any) {
        const idRegex = /\/([0-9]+)\/$/;
        return from.url.match(idRegex)[1];
    }

    async _convertToPlanet(from:any) {
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

    async _convertToStarShip(from:any) {
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


    async _convertToPerson(from:any) {
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