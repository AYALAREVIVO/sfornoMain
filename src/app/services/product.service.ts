import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../class/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  data: Product[] = [
    { id: 0, name: 'סידור', price: 8.99, amount: 0 ,img:"/assets/1.webp"},
    { id: 1, name: 'מנחה', price: 5.49, amount: 0 ,img:"/assets/2.webp"},
    { id: 2, name: 'תהילים', price: 4.99, amount: 0 ,img:"/assets/3.webp"},
    { id: 3, name: 'משנת החודש', price: 6.99, amount: 0 ,img:"/assets/4.webp"}
  ];
  dataNew: Product[] = [
    { id: 0, name: 'סידור', price: 8.99, amount: 0 ,img:"/assets/1.webp"},
    { id: 1, name: 'מנחה', price: 5.49, amount: 0 ,img:"/assets/2.webp"},
    { id: 2, name: 'תהילים', price: 4.99, amount: 0 ,img:"/assets/3.webp"},
    { id: 3, name: 'משנת החודש', price: 6.99, amount: 0 ,img:"/assets/4.webp"}
  ];
 
  // private cart = [];
  // private cartItemCount = new BehaviorSubject(0);
  a:Product;
  constructor() {
//      this.data=new Product[10]();
//     this.a.id= 3; this.a.name= 'משנת החודש'; this.a.price= 6.99;this.a.amount= 0 ;this.a.img="/assets/4.webp";
//  this.data.push(this.a);
  }
 
  getProducts() {
    return this.data;
  }
  getNewProducts() {
    return this.dataNew;
  }
  seveProduct(product:Product){
    let flag=0;
for (let index = 0; index < this.data.length; index++) {
  if(this.data[index].id==product.id){
    this.data[index].amount=product.amount;
    this.data[index].img=product.img;
    this.data[index].name=product.name;
    this.data[index].price=product.price;
    alert(flag);
    flag=1;
    break;
  }
}
  if(flag==0){
    this.addProduct(product);
}
  }
 
  addProduct(product:Product) {
    alert("add"+product.img);
  
this.data.push(product);
  }
  addNewProduct(product) {
    this.dataNew.push(product);
  }
 
  removeProduct(product) {
   
    for (var i = 0; i < this.data.length; i++) {
      if(product.id==this.data[i].id)
     { this.data.splice(i, 1);
    break;    
    }
  }
}
  removeNewProduct(product) {
    for (var i = 0; i < this.data.length; i++) {
      if(product.id==this.dataNew[i].id)
     { 
      this.dataNew.splice(i, 1);  
      break;  
    }
    }
  }
}

