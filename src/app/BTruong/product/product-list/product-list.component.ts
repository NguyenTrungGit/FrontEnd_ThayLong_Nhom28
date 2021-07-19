import { Input, SimpleChanges, OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() rangePrice:any;
  @Input() categoryName:any;
  categoryTemp:any;
    maxPrice:number=0;
    minPrice:number=999999999999;
    totalLenght:any;
    page:number =1;
    showport:any =[];
    datas: Product[] = [];
    constructor(private productService: ProductService) {}
    ngOnChanges(changes: SimpleChanges): void {
           this.getProducts();
    }

    ngOnInit(): void {
      this.categoryTemp=this.categoryName;
     this.getProducts();
    }
    getProducts(){
      this.maxPrice=Number(Object.values(this.rangePrice)[1]);
      this.minPrice=Number(Object.values(this.rangePrice)[0]);
      if(this.categoryName==="tatca"){
        this.productService.getProductsByPrice(this.minPrice,this.maxPrice).subscribe((res: any) => {
          this.datas=res;
        });
      }else{
        this.productService.getProductsByPriceAndCategory(this.minPrice,this.maxPrice,this.categoryName).subscribe((res: any) => {
          this.datas = res;
        });
      }
    }
    sort(event: any) {
      switch (event.target.value) {
        case "":{
          this.datas;
          break;
        }
        case "Low":
          {
            this.datas = this.datas.sort((low, high) => low.price - high.price)
            break;
          }

        case "High":
          {
            this.datas= this.datas.sort((low, high) => high.price - low.price);
            break;
          }

        case "Name-a":
          {
            this.datas = this.datas.sort(function (low, high) {
              if (low.name < high.name) {
                return -1;
              }
              else if (low.name > high.name) {
                return 1;
              }
              else {
                return 0;
              }
            })
            break;
          }
          case "N":
          {

            this.datas = this.datas.sort(function (low, high) {

              if (low.name < high.name) {
                return 1;
              }
              else if (low.name > high.name) {
                return -1;
              }
              else {
                return 0;
              }
            })

            break;
          }

        default: {
          this.datas = this.datas.sort((low, high) => low.price - high.price);

          break;
        }

      }
      return this.datas;

    }


}
