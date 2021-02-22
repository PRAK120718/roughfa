import { Component } from '@angular/core';
import { UserInfo } from './class/user-info.model';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'findAch';

  public static sessionState : boolean = false;
  public static serviceBaseURl: string = "http://localhost:3001";
  public static fileUploadBaseURL: string = "http://localhost:3001"
  public static appUser: UserInfo;

  get getSessionState() 
  {
    return AppComponent.sessionState;
  }

  public static logError(error : any, component : string, method : string)
  {
    try
    {
      console.log("Error occurred in '" + component + "' Component, '" + method + "' Method.") ;
      console.log(error);

    }
    catch(ex)
    {
      throwError;
    }

  }
}
