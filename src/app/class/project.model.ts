export class UserProjectDtls {
    name : string;
    description : string;
    type : string;
    category : string;
    skills : string[];
    start_date : Date;
    end_date : Date;
    constructor(name : string, description : string, type : string, category : string, skills : string[], start_date : Date, end_date : Date){
            this.name = name;
            this.description = description;
            this.type = type;
            this.category = category;
            this.skills = skills;
            this.start_date = start_date;
            this.end_date = end_date;
        }
}
