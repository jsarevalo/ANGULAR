import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EquipmentTypeService } from '@modules/equipment-type/Services/equipment-type.service';

@Component({
  selector: 'app-loan-type',
  templateUrl: './equipment-type.component.html',
  styleUrls: [ './equipment-type.component.css' ],
})
export class EquipmentTypeComponent implements OnInit {
  public equipmentType$!: Observable<any>;

  constructor(private equipmentTypeService: EquipmentTypeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.equipmentType$ = this.equipmentTypeService.getEquipmentType(id);
  }
}
