import { Component, OnInit } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
@Component({
  selector: 'app-cadaster',
  templateUrl: './cadaster.component.html',
  styleUrls: ['./cadaster.component.css']
})
export class CadasterComponent implements OnInit {
  angForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router:Router) {
    this.angForm = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', Validators.required],
      address: ['', [Validators.required]],
      message: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  postdata(angForm1)
  {
    this.dataService.cadasterUser(
      angForm1.value.name,
      angForm1.value.date,
      angForm1.value.address,
      angForm1.value.message)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
          this.router.navigate([redirect]);
        },
        error => {
          alert("Verifique os dados e tente novamente!")
        });
  }
  get name() { return this.angForm.get('name'); }
  get date() { return this.angForm.get('date'); }
  get address() { return this.angForm.get('address'); }
  get message() { return this.angForm.get('message'); }
}
