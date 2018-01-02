import { Output } from './../common/common';
import { HttpClient } from '@angular/common/http';
import { Injector, Injectable } from '@angular/core';

/*
  Generated class for the WebapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebapiProvider {
  private baseUrl: string = "http://localhost:3000/";
  protected controller: string = "";
  constructor(public http: HttpClient) {
    console.log('Hello WebapiProvider Provider');
  }

  protected baseGet(controller: string): Promise<Output> {
    return new Promise<Output>((resolve, reject) => {
      this.http.get(this.baseUrl + controller).subscribe(
        (response) => {
          resolve(response as Output);
        });
    })
  }
}

export class SecondHandHouse extends WebapiProvider {
  constructor(public http: HttpClient) {
    super(http);
    this.controller = "SecondHandHouse";
  }

  public get(queryString?: string): Promise<Output> {
    return new Promise<Output>((resolve, reject) => {
      this.baseGet(this.controller + queryString).then(
        (response) => {
          console.log(response);
          resolve(response)
        },
        (error) => {

        }
      );
    });
  }
}