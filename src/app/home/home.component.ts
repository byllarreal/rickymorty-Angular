import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  providers:[ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{  
  data:any;
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
