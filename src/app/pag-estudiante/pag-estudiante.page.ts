import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-estudiante',
  templateUrl: './pag-estudiante.page.html',
  styleUrls: ['./pag-estudiante.page.scss'],
})
export class PagEstudiantePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['login']);
  }

}
