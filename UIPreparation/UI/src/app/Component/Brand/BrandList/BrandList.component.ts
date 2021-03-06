import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/Brand';
import { Color } from 'src/app/models/Color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-BrandList',
  templateUrl: './BrandList.component.html',
  styleUrls: ['./BrandList.component.css']
})
export class BrandListComponent implements OnInit {

  brands:Brand[]=[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private brandService:BrandService,
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getBrands();
    });

  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
    });
  }

}
