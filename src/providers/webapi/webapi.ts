import { Output } from './../common/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injector, Injectable } from '@angular/core';

/*
  Generated class for the WebapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebapiProvider {
  private baseUrl: string = "http://192.168.199.110:3000/";
  protected controller: string = "";
  constructor(public http: HttpClient) {
    console.log('Hello WebapiProvider Provider');
  }

  public get(queryString: string): Promise<any> {
    let that = this;
    return new Promise<any>((resolve, reject) => {
      this.http.get(this.baseUrl + this.controller + queryString).subscribe(
        (response) => {
          resolve(response as any);
        });
    })
  }

  public post(json: any): Promise<any> {
    let that = this;
    return new Promise<any>((resolve, reject) => {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append("Content-Type", "application/json");
      this.http.post(this.baseUrl + this.controller, json, { headers: headers }).subscribe(
        (response) => {
          resolve(response as any);
        });
    })
  }
}

export class SecondHandHouse extends WebapiProvider {
  constructor(public http: HttpClient) {
    super(http);
    this.controller = "SecondHandHouse";
  }
}

export class NewHouse extends WebapiProvider {
  constructor(public http: HttpClient) {
    super(http);
    this.controller = "NewHouse";
  }
}

export class Project extends WebapiProvider {
  constructor(public http: HttpClient) {
    super(http);
    this.controller = "Project";
  }
}

export class Favorite extends WebapiProvider {
  constructor(public http: HttpClient) {
    super(http);
    this.controller = "Favorite";
  }
}