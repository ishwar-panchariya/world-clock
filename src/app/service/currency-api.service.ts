import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  currencyApiKey: string = "788d456d1c928185ac4e";    // old key: ffb9529f80913b12f6b4
  currencyApiURL: string = 'https://free.currconv.com/api/v7/convert';
  currencyListApi: string = 'https://free.currconv.com/api/v7/currencies';


  constructor(private http: HttpClient) { }
  
  getExchangeRate(fromCurrency: String, toCurrency: String){
    const query = fromCurrency + '_' + toCurrency;
    return this.http.get(`${this.currencyApiURL}?q=${query}&compact=ultra&apiKey=${this.currencyApiKey}`);    
  }

  getCurrencyList() {
    return this.http.get(`${this.currencyListApi}?apiKey=${this.currencyApiKey}`);    
  }
}
