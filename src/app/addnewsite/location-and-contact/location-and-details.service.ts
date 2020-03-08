import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoactionAndContactDetailsService{
    public registrationInfo: any

    constructor(private http:HttpClient){

    }
    saveAllLocationAndContactDetails(data) {

        let url = ("http://localhost:8082/api/Marne/createProjectLocationAndContactDetails");
        return this.http.post(url, data);
      }
}