import { Component, OnInit } from '@angular/core'

import { NotesUserService } from '../../services/notes-user.service'
import { ParkUserService } from '../../services/park-user.service'
import { PalindromeUserService } from '../../services/palindrome-user.service'

import { Router } from '@angular/router'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  requestData: Request = {
    compra: null,
    pagamento: null,

    firstRange: null,
    lastRange: null,

    tipoVeiculo: '',
    anoDeFabrica: '',
    marca: '',

    numPassageiros: null
  }

  responseData: Response

  responseErros: any = {
    messages: []
  }

  isLoading: boolean = false

  constructor( private notesService: NotesUserService, private palindromeService: PalindromeUserService, 
    private parkService: ParkUserService, private router: Router ) { 

  }

  ngOnInit() {

  }

  sendData() {
    this.isLoading = true
    this.rendaService.sendData( this.requestData ).subscribe(
      response => {
        this.responseErros = []
        this.responseData = response
        this.isLoading = false
      },
      error => {
        this.responseErros = error.error
        this.isLoading = false
      }
      )
  }

}