import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-maestro',
  templateUrl: './pag-maestro.page.html',
  styleUrls: ['./pag-maestro.page.scss'],
})
export class PagMaestroPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['login']);
  }
}
