import { SafeUrl } from '@angular/platform-browser';

export class UserInfo {
    userName: string;
    userId: string;
    password: string;
    // accountType: string;
    profNotCompleted: boolean = false;
    profileImageId : string = "";
    profilePic : SafeUrl = "";
    fullName: string = "";
    isMentor: boolean;
    bearerToken: string;

    constructor(name: string, id:string, pwd: string, token: string, isMentor: boolean)
    {
        this.userName = name;
        this.userId = id;
        this.password = pwd;
        this.isMentor = isMentor;
        this.bearerToken = token;
    }
}

