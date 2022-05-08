import { Component, OnInit } from '@angular/core';
import { WorldClockApiService } from 'src/app/service/world-clock-api.service';

@Component({
  selector: 'app-world-clock',
  templateUrl: './world-clock.page.html',
  styleUrls: ['./world-clock.page.scss'],
})
export class WorldClockPage implements OnInit {

  clockList;
  newClockList:string[]
  filterTerm: string;
  hourHandStyle; 
  minuteHandStyle; 
  secondHandStyle; 

  isRunning = true;
  timerId: any;

  date: Date;
  defaultHour: number = 0;
  defaultMinute: number = 0;
  defaultSecond: number = 0;

  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  area: string = 'Asia';
  location: string = 'Kolkata';

  currentdata: any;
  offset: string;
  timezone: any;

  latestData: any[] = []
  latestTime: any[] = []

  constructor(private api: WorldClockApiService) { }

  ngOnInit() {
    // this.getWorldClockList();
    this.defaultClock()
    this.latestData = this.api.latestData
    this.latestTime = this.api.latestTime
  }

  ngAfterViewInit() {
    // this.getTime(); 
    this.getDefaultTime();
  }

 
  animateAnalogClock() {
    this.hourHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.hour * 30) + (this.minute * 0.5) + (this.second * (0.5 / 60))}deg)` };
    
    this.minuteHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.minute * 6) + (this.second * 0.1)}deg)` };
    
    this.secondHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${this.second * 6}deg)` };
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  removeIt(index) {
    this.api.timeList.splice(index, 1)
    this.api.latestData.splice(index,1)
  }

  defaultClock() {
    this.api.getTime('asia', 'kolkata').subscribe(res =>{
      console.log(res)
    })
  }
  defaultDateTime: string
  getDefaultTime() {
    return setInterval(() => {
        this.api.getTime('asia', 'kolkata').subscribe(res => {
          this.currentdata = res
          this.offset = this.currentdata.utc_offset
          this.timezone = this.currentdata.timezone
          this.defaultDateTime = this.currentdata.datetime
          let splitResult = (this.currentdata.datetime.split("T"))[1].split(".")
          let finalResult = splitResult[0].split(":")
          this.hour = finalResult[0];
          this.minute = finalResult[1];
          this.second = finalResult[2];
          this.animateAnalogClock();
        })
    }, 1000);

  }
}
