export default class SwApiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`fetch error for url ${url}`)
        }
        return await res.json();
    };

    async getAllPeople() {
        const peoples = await this.getResource(`/people`);
        return peoples.results;
    }


    getPerson(id) {
        return this.getResource(`/people/${id}`);
    }


    async getAllPlanets() {
        const planets = await this.getResource(`/planets`);
        return planets.results;
    }


    getPlanet(id) {
        return this.getResource(`/planets/${id}`);
    }

    async getAllStarShips() {
        const starShips = await this.getResource(`/starships`);
        return starShips.results;
    }


    getStarShip(id) {
        return this.getResource(`/starships/${id}`);
    }

}