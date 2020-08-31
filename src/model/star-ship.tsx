import BaseModel from "./base-model";

export default interface StarShip extends BaseModel {
    model: string,
    manufacturer: string,
    costInCredits: string,
    length: string,
    crew: string,
    passengers: string,
    cargoCapacity: string
};