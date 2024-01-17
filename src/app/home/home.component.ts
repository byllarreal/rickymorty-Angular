import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,MatCardModule,MatButtonModule,NgClass],
  providers:[ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{  
  data:any;
  clase:string="";
  constructor(private servicio:ApiService){}  
  ngOnInit(): void {
    this.servicio.getData().subscribe(
      (data) => {
        this.data=data;
        console.log(data);
      }
    );
  }
  
}
