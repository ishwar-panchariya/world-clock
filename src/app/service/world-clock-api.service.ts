import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorldClockApiService {

  worldClockApiUrl: string = 'http://worldtimeapi.org/api//timezone';
  timeList: any[]=[];
  
  latestData: any[] = []
  latestTime: any[] = []
  
  constructor(private http: HttpClient) { }

  getWorldClockList() {
    return this.http.get(this.worldClockApiUrl)
  }

  getTime(area, location) {
    return this.http.get(`${this.worldClockApiUrl}/${area}/${location}`)
  }

  getUpdatedTime() {
    return setInterval(() => {
      for(let index = 0 ; index < this.timeList.length; index++) {
        let value = {...this.timeList[index]}
        this.getTime(value[0], value[1]).subscribe(res => {
          // this.latestData = []
          this.latestData[index] = res
          let splitResult = (this.latestData[index].datetime.split("T"))[1].split(".")
          let finalResult = splitResult[0].split(":")
          // this.hour = finalResult[0];
          // this.minute = finalResult[1];
          // this.second = finalResult[2];
          this.latestTime[index] = `${finalResult[0]}:${finalResult[1]}:${finalResult[2]}`

        })
      }
      // this.timeList.forEach(value => {
      //   this.api.getTime(value[0], value[1]).subscribe(res => {
      //     this.currentdata = res
      //     this.offset = this.currentdata.utc_offset
      //     this.timezone = this.currentdata.timezone
      //     let splitResult = (this.currentdata.datetime.split("T"))[1].split(".")
      //     let finalResult = splitResult[0].split(":")
      //     this.hour = finalResult[0];
      //     this.minute = finalResult[1];
      //     this.second = finalResult[2];
      //   })
      // })
      
    }, 1000);

  }
}
