export interface BaseResponseModel {
    id: string,
    name: string,
    url: string
}

export interface ListResponseModel<T> {
    count: number,
    results: T[]
}

export interface PlanetResponseModel extends BaseResponseModel {
    population: string,
    diameter: string,
    rotation_period: string
}


export interface StarShipResponseModel extends BaseResponseModel {
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    crew: string,
    passengers: string,
    cargo_capacity: string
}

export interface PersonResponseModel extends BaseResponseModel {
    gender: string,
    birth_year: string,
    eye_color: string
}