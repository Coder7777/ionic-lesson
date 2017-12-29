import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CommonProvider Provider');
  }

}

export class Output {
  public constructor() {
  }
  public Status: Status = new Status();

  public Result: Result = new Result();
}

export class Result {
  public Data: any = {};
}

export class Paged {
  public PageNumber: number = 1;
  public PageSize: number = 5;
}

export class PagedData {
  public constructor() {
  }
  public PageNumber: number = -1;
  public PageSize: number = -1;
  public PageCount: number = -1;
  public ItemCount: number = -1;
  public OrderField: string = "";
  public IsOrderByDesc: boolean = false;
}

export class Status {
  public constructor() {
  }
  public Success: boolean = false;
  public Code: string = "";
  public Msg: string = "";
}