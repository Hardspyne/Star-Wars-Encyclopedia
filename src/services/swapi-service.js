export default class SwApiService {

    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`fetch error for url ${url}`)
        }
        return await res.json();
    };

    async getAllPerson() {
        const persons = await this.getResource(`/people`);
        return persons.results.map(SwApiService._convertToPerson);
    }


    async getPerson(id) {
        const result = await this.getResource(`/people/${id}`);
        return await SwApiService._convertToPerson(result);
    }


    async getAllPlanets() {
        const planets = await this.getResource(`/planets`);
        return planets.results.map(this._convertToPlanet);
    }


    async getAllPlanetsCount() {
        const planets = await this.getResource(`/planets`);
        return planets.count;
    }


    async getPlanet(id) {
        const result = await this.getResource(`/planets/${id}`);
        return await this._convertToPlanet(result);
    }

    async getAllStarShips() {
        const starShips = await this.getResource(`/starships`);
        return starShips.results.map(SwApiService._convertToStarShip);
    }


    async getStarShip(id) {
        const result = await this.getResource(`/starships/${id}`);
        return await SwApiService._convertToStarShip(result);
    }

    async _getImageUrlId(id) {
        const res = await fetch(`${this._imageBase}/planets/${id}.jpg`);
        if (!res.ok) {
            return null;
        } else {
            return res.url;
        }
    }

    static _extractId(from) {
        const idRegex = /\/([0-9]+)\/$/;
        return from.url.match(idRegex)[1];
    }

    async _convertToPlanet(from) {
        const id = SwApiService._extractId(from);
        const imageUrl = await this._getImageUrlId(id);
        return {
            id,
            imageUrl,
            name: from.name,
            population: from.population,
            diameter: from.diameter,
            rotationPeriod: from.rotation_period
        }
    }

    static async _convertToStarShip(from) {
        const id = SwApiService._extractId(from);
        //todo
        //  const imageUrl = await this._getImageUrlOrDefaultById(id);
        return {
            id,
            imageUrl: null,
            name: from.name,
            model: from.model,
            manufacturer: from.manufacturer,
            costInCredits: from.costInCredits,
            length: from.length,
            crew: from.crew,
            passengers: from.passengers,
            cargoCapacity: from.cargoCapacity
        }
    }


    static async _convertToPerson(from) {
        const id = SwApiService._extractId(from);
        //todo
        //  const imageUrl = await this._getImageUrlOrDefaultById(id);
        return {
            id,
            imageUrl: null,
            name: from.name,
            gender: from.gender,
            birthYear: from.birthYear,
            eyeColor: from.eyeColor
        }
    }

}