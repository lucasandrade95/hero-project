import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dataService: ApiService,
    private router:Router
  ) { }

  ngOnInit(): void {
    // this.dataService.getCadaster()
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
    //       this.router.navigate([redirect]);
    //     },
    //     error => {
    //       debugger
    //       alert("Usuário ou senha incorretos!")
    //     });
  }

}
