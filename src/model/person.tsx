import BaseModel from "./base-model";

export default interface Person extends BaseModel {
    gender: string,
    birthYear: string,
    eyeColor: string
};