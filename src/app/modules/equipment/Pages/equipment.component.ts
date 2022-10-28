import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EquipmentService } from '@modules/equipment/Services/equipment.service';

@Component({
  selector: 'app-loan',
  templateUrl: './equipment.component.html',
  styleUrls: [ './equipment.component.css' ],
})
export class EquipmentComponent implements OnInit {
  public equipment$!: Observable<any>;

  constructor(private equipmentService: EquipmentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.equipment$ = this.equipmentService.getEquipment(id);
  }
}
