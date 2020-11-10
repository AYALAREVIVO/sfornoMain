import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../class/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.page.html',
  styleUrls: ['./detalis.page.scss'],
})
export class DetalisPage implements OnInit {
product:Product;
nameButtonSave:string;
  constructor(private route: ActivatedRoute,public servise:ProductService,public router: Router) {
  //   this.route.queryParams.subscribe(params => {
  //     this.firstname = params["firstname"];
  //     this.lastname = params["lastname"];
  // });

  this.route.queryParams.subscribe(params => {
      this.product = JSON.parse(params.special);
  });
   }

  ngOnInit() {
    if(this.product!=null)
    {
      this.nameButtonSave="שמור שינויים";
    }
    else{
      this.nameButtonSave="שמור";
  this.product=new Product();
    }
  }
 
  sendImage($event){
    alert("d");
    const file: File = $event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.product.img=event.target.result;
    };
    reader.readAsDataURL(file);
  }
  seve(){
    this.servise.seveProduct(this.product);
    this.router.navigate(['/home']);

    
  }
  close(){
    this.router.navigate(['/home']);

  }
}
