import BaseModel from "./base-model";

export default interface Planet extends BaseModel{
    population:string,
    diameter:string,
    rotationPeriod:string
};