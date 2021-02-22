export class UserMilestoneDtls {
    name : string;
    status : string;
    description : string;
    start_date : string;
    end_date : string;
    constructor(
        name : string, 
        status : string, 
        description : string,
        start_date : string,
        end_date : string
        ){
            this.name = name;
            this.description = description;
            this.end_date = end_date;
            this.start_date = start_date;
            this.status = status;
        }
}
