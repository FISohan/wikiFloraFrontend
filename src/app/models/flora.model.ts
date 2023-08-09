import { Hierarchy } from "./hiererchy.model";
import { Photo } from "./photo.model";
import { ScientificName } from "./scientific_name.model";

export interface Flora {
    id:             string;
    banglaName:     string;
    alphabetIndex:  number;
    othersName:     string;
    description:    string;
    contributer:    string;
    scientificName: ScientificName;
    photos:         Photo[];
    hierarchy:      Hierarchy;
}