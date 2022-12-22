import { AnimalType } from "src/external/enum/animal-type.enum"
import GameAsset from "./game-asset.entity"

export class Animal extends GameAsset {
    animalType: AnimalType
}