import { Injectable } from '@angular/core';
import { SpecialDate } from '../class/SpecialDate';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {
  date: SpecialDate[] = [
    { id: 0, name: 'משה קלמנטינות',day:'9',month:'11',year:'2020' ,page:-1,return:1},
    { id: 1, name: 'משה קלמנטינות',day:'9',month:'11',year:'2020' ,page:-1,return:1},
    { id: 2, name: 'משה קלמנטינות',day:'9',month:'11',year:'2020' ,page:-1,return:1},
  ];  


  constructor() { }
  getDate(){
    return this.date;
  }
  addDate(date){
    this.date.push(date);
alert("need seve in sql");
  }
}
