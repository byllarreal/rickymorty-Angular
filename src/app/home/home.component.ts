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
  constructor(private servicio:ApiService){}
  data:[]=[];
  ngOnInit(): void {
    this.servicio.getData().subscribe(
      (resultData) => {
        this.data=resultData;
        console.log(this.data);
      }
    );
  }
  
}
