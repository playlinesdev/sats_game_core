import { AnimalType } from "src/external/enum/animal-type.enum";
import { Animal } from "./animal.entity";
import { StructureAbstract } from "./core/structure.abstract";

export class AnimalShed extends StructureAbstract {
    slots: Animal[]
    max: number
    animalTypes: AnimalType[]
}
