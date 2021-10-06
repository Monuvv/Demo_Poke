import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {
  pokeList: any[] =[];
  page  = 1 ;
  offset = 0;
  noOfRows = 10;
  pokeNumbers : number;
  btnStyle = 'btn-default';
  constructor(private baseService: BaseService,private router: Router) { }

  ngOnInit() {
    this.getDetails();

  }

  getDetails()
  {
    this.pokeList = [];
     let numbersAsString;
    if(this.page == 1)
    {
      numbersAsString = 0;
    }else{
      numbersAsString = `${this.page}${0}`;
    }

    this.baseService.getPokeDetails(numbersAsString ,this.noOfRows).subscribe((res:any) =>
      {
        this.pokeNumbers = res.count;
        res.results.forEach(element => {
          this.baseService.getNextPokeDetails(element.name).
          subscribe((data:any) =>
          {

            this.pokeList.push(data);
            console.log(this.pokeList);
            //this.pokeList.sort((a,b) => a.name.localeCompare(b.name))

          });
        });

      });
  }

  sortByName()
  {
    this.pokeList.sort((a,b) => a.name.localeCompare(b.name));
  }
  sortByHeight()
  {
    this.pokeList.sort((a,b) => a.height > b.height ? 1 : -1);
  }
  sortByWeight()
  {
    this.pokeList.sort((a,b) => a.weight > b.weight ? 1 : -1);
  }
}
