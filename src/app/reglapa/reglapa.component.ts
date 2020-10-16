import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reglapa',
  templateUrl: './reglapa.component.html',
  styleUrls: ['./reglapa.component.css']
})
export class ReglapaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  testmethod = {
     maxnumber: null,
     numberIndex: null,
     maxnumberlist: null,
     maxnumberIs: null,
     maxnumberIndex: null,

  GetCorrectNumbers(){

    this.maxnumber = (document.getElementById("getStringFromInput") as HTMLInputElement).value;
    this.maxnumberlist = [];
    
    console.log(this.maxnumber.length);
    for(let i=0; i<this.maxnumber.length; i++){
      let newNumber = Number(this.maxnumber[i]);
      if(isNaN(newNumber)){
        newNumber = 0;
        this.maxnumberlist.push(newNumber);
      }else{
        this.maxnumberlist.push(newNumber);
      }
      
    }
    let result = this.maxnumberlist;

    
    console.log(result);
    console.log(Math.max.apply(Math, result));
    this.maxnumberIs = Math.max.apply(Math, result);
    this.maxnumberIndex = this.maxnumberlist.indexOf(this.maxnumberIs);

  }
  }

}
