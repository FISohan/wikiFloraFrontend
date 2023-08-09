import { Flora } from "./flora.model";

export interface Page {
    maxPageIndex:     number;
    currentPageIndex: number;
    data:             Flora[];
}
