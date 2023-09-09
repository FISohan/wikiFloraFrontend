import { Reply } from "./reply";

export interface Comment {
    id: string;
    userId: string;
    floraId: string;
    commentBody: string;
    replies: Reply[];
    createdDate: Date;
  }