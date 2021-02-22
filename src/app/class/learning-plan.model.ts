import { UserMilestoneDtls } from "./milestone.model";

export class UserLearningPlanDtls {
    name : string;
    description : string;
    milestones : UserMilestoneDtls[];
    constructor(
        name : string,
        description : string,  
        milestones : UserMilestoneDtls[]
        ){
            this.name = name;
            this.description = description;
            this.milestones = milestones;
        }
}
