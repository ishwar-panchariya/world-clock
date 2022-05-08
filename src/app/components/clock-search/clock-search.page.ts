import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorldClockApiService } from 'src/app/service/world-clock-api.service';

@Component({
  selector: 'app-clock-search',
  templateUrl: './clock-search.page.html',
  styleUrls: ['./clock-search.page.scss'],
})
export class ClockSearchPage implements OnInit {

  clockList: any;
  newClockList:string[]
  filterTerm: string;
  area: string;
  location: string;
  constructor(private api: WorldClockApiService, private router: Router) { }

  ngOnInit() {
    this.getWorldClockList()
  }

  searchCity() {
    this.newClockList.filter((x) => {return x.includes(this.filterTerm.toLowerCase())})
  }

  getWorldClockList() {
    this.api.getWorldClockList().subscribe((res) => {
      this.clockList = res
      this.newClockList = this.clockList.map(element => {
        element = element.split("/")
        return element.map(x => x.toLowerCase())
      })
      console.log(this.newClockList)
    })
     
  }

  addMe(data) {
    console.log(data)
    this.area = data[0]
    this.location = data[1]
    this.api.timeList.push(data)
    this.filterTerm = ''
    this.api.getUpdatedTime()
    this.router.navigate(['/world-clock'])
  }

}
