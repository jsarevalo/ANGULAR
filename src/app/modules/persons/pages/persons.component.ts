import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonService } from '@modules/persons/Services/person.service';
import { TipDocsService } from '@modules/tip-docs/services/tip-docs.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: [ './persons.component.css' ],
})
export class PersonsComponent implements OnInit {
  public persons$!: Observable<any>;
  public documentTypes!: Array<any>;
  public personForm: FormGroup = new FormGroup({});
  public isEditorOpen = false;
  public isCreateMode = false;

  constructor(private personService: PersonService, private tipDocsService: TipDocsService) { }

  ngOnInit(): void {
    this.persons$ = this.personService.getPersons();
    this.personForm = new FormGroup(
      {
        Id_Persona: new FormControl(0),
        Id_TipoDocumento: new FormControl(0),
        Iniciales_tip_doc: new FormControl(''),
        Num_doc_Persona: new FormControl(''),
        Nombre1: new FormControl(''),
        Nombre2: new FormControl(''),
        Apellido1: new FormControl(''),
        Apellido2: new FormControl(''),
      },
    );
  }

  public loadData(mockData: any) {
    this.isCreateMode = false;
    this.tipDocsService.getTipDocs()
      .subscribe(
        data => {
          const currentDocType = data.find((value: { Iniciales_tip_doc: any; }) => value.Iniciales_tip_doc === mockData.Iniciales_tip_doc);
          mockData.Id_TipoDocumento = currentDocType.Id_Tipo_Documento;
          this.documentTypes = data;
          this.personForm.setValue(mockData);
        },
      );
  }

  public openEditor(): void {
    this.isEditorOpen = true;
  }

  public updatePerson() {
    const data = this.personForm.value;
    data.Id_TipoDocumento = Number(data.Id_TipoDocumento);

    this.personService.updatePerson(this.personForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  public cleanFields(): void {
    const data = {
      Id_Persona: 0,
      Id_TipoDocumento: null,
      Iniciales_tip_doc: '',
      Num_doc_Persona: '',
      Nombre1: '',
      Nombre2: '',
      Apellido1: '',
      Apellido2: '',
    };
    this.isCreateMode = true;
    this.tipDocsService.getTipDocs().subscribe(
      value => {
        console.log(value);
        this.documentTypes = value;
        this.personForm.setValue(data);
      },
    );
  }

  public createPerson() {
    this.personService.createPerson(this.personForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  closeAndUpdate(value: any) {
    if (!value?.error) {
      this.isEditorOpen = false;
      this.persons$ = this.personService.getPersons();
    }
  }
}
