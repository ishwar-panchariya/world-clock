import { Component, OnInit } from '@angular/core';
import { CurrencyApiService } from 'src/app/service/currency-api.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {

  resultRate: any;
  swappedRate: any;

  fromInputValue: number = 0;
  toInputValue: number = 0;

  fromCurrency: string | undefined; 
  toCurrency: string | undefined; 

  currencyCode: any[]=[];

  constructor(private api: CurrencyApiService) { }

  ngOnInit() {
    // this.calculateCurrencyOne()
    // this.getCurrencyRate()
    this.fetchCountries()
  }

  // async getCurrencyRate() {
   
  //   try {
  //     const exchangeRate = await this.api.getExchangeRate(this.selectedFromCurrency, this.selectedToCurrency).subscribe((res) => {
  //       console.log(res)
  //       let rate = res[this.fromCurrency + "_" + this.toCurrency];
  //       this.resultRate = rate;
  //       console.log(exchangeRate, this.resultRate, this.fromCurrency, this.toCurrency)
  //     });
  //   }
  //   catch (err) {
  //     console.error(err);
  //   }
  // }

  calculateCurrencyOne(selectedFromCurrency, selectedToCurrency) {

    this.api.getExchangeRate(selectedFromCurrency, selectedToCurrency).subscribe((res) => {
            console.log(res)
            let rate = res[this.fromCurrency + "_" + this.toCurrency];
            this.resultRate = rate;
            console.log(this.resultRate, this.fromCurrency, this.toCurrency)
          });
    this.toInputValue = this.fromInputValue * this.resultRate;
  }

  calculateCurrencyTwo(selectedToCurrency, selectedFromCurrency) {

    this.api.getExchangeRate(selectedFromCurrency, selectedToCurrency).subscribe((res) => {
            console.log(res)
            let rate = res[this.fromCurrency + "_" + this.toCurrency];
            this.resultRate = rate;
            console.log(this.resultRate, this.fromCurrency, this.toCurrency)
          });
    this.fromInputValue = this.toInputValue / this.resultRate;
  }

  async fetchCountries() {
    try {
      const res = await this.api.getCurrencyList().subscribe((res) => {
        console.log(res)
        for (let x in res['results']) {
          // this.currencyCode.push(res['results'][x].id);
          this.currencyCode.push(res['results'][x]);
        }
        console.log(this.currencyCode)
      });
    } catch (err) {
      console.error(err);
    }
  }

  selectedFromCurrency: string | undefined;
  selectedToCurrency: string | undefined;

  onFromCurrencyChange(){
    this.selectedFromCurrency = this.fromCurrency;
  }

  onToCurrencyChange() {
    this.selectedToCurrency = this.toCurrency
  }

  swap(from, to) {
    this.fromCurrency = to
    this.toCurrency = from
    console.log(this.selectedFromCurrency, this.selectedToCurrency)
  }
}
