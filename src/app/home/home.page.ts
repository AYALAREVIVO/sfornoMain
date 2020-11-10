import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Product } from '../class/Product';
import { DetalisPage } from '../detalis/detalis.page';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  details: FormGroup;
  tab:boolean;

  New:Product[];
products:Product[];
panellist;
  constructor( private productServise:ProductService,public router: Router) {
    this.New=this.productServise.getNewProducts();
this.products=this.productServise.getProducts();
this.tab=true;
  }
  ngOnInit() {
  
  
  }
  close(event){
this.productServise.removeNewProduct(event)
  }

  edit(event){
const navigationExtras: NavigationExtras = {
  queryParams: {
    special: JSON.stringify(event)
  }
};
this.router.navigate(['/detalis'], navigationExtras);
 //this.router.navigate(['/detalis']);
 
  }
  addProduct(){
    alert("add");
  const navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(null)
    }
  };
  this.router.navigate(['/detalis'], navigationExtras);
}
addDay(){
  this.router.navigate(['/date']);
}
open(c){
  if(c=="c")
this.tab=true;
else this.tab=false;
}
tabSituation(a){
  this.tab=a;
}
}
