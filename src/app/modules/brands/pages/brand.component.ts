import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '@modules/brands/Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: [ './brand.component.css' ],
})
export class BrandComponent implements OnInit {
  public brand$!: Observable<any>;

  constructor(private userTypeService: BrandService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.brand$ = this.userTypeService.getBrand(id);
  }

}
