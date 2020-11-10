import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { SpecialDate } from '../class/SpecialDate';
import { DateServiceService } from '../services/date-service.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {
  month:string[]=["תשרי","חשון","כסלו","טבת","שבט","אדר","ניסן","אייר","סיון","תמוז","אב","אלול"];
  day:number[];
  date:SpecialDate;

  constructor(public router: Router,public service:DateServiceService) {
    this.day=new Array(31);
  for (let index = 0; index < this.day.length; index++) {
    this.day[index] = index+1;
  }
  this.date=new SpecialDate();
  }
  save(){
    this.date.page=-1;
    this.service.addDate(this.date);
    this.router.navigate(['/home']);

  }

  ngOnInit() {
  }
  close(){
    this.router.navigate(['/home']);

  }


}
