import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ParkUserService {

  API_URI = "http://localhost:3000/api/park"

  constructor( private https: HttpClient ) { }

  sendData( requestData: Request ) {
      return this.https.post( this.API_URI , requestData )
  }

}