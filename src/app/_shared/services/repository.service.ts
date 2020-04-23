import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private httpClient: HttpClient, private environementService: EnvironmentUrlService) { }

  public getData(route: string){
    return this.httpClient.get(this.createCompleteRoute(route));
  }

  public create(route: string, body: any) {
    return this.httpClient.post(this.createCompleteRoute(route), body, this.generateHeaders());
  }

  public update(route: string, body: any) {
    return this.httpClient.put(this.createCompleteRoute(route), body, this.generateHeaders());
  }

  public delete(route: string) {
    return this.httpClient.delete(this.createCompleteRoute(route));
  }
  private createCompleteRoute(route: string) {
    return `${this.environementService.urlAddress}/${route}`;
  }

  private generateHeaders() {
    return {
       headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
}
