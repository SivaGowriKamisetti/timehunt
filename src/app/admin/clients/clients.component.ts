import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/models/client.model';

import { User } from 'src/app/models/users.model';

import { clientService } from 'src/app/services/client.service';

import { usersService } from 'src/app/services/users.services';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  isSubmitted: boolean = false;
  clientForm: FormGroup;
  savedData:any[] | undefined;
  editMode = false;
 /* clients: Client[] = [];

  private clientChangeSub: Subscription = new Subscription();
  subscription: Subscription = new Subscription();
  
  
  editedClientIndex: any;
  editedClient: Client | undefined;*/
  constructor(
    private clientsService: clientService,
    private userService: usersService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.clientForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')]),
      code: new FormControl('', [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern('^[A-Z ]*$')]),
      location: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z ]*$')]),
       email: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(80),
            Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
          ]),
        projectList:this.formBuilder.array([])
      });
  }
  get project(){
    return this.clientForm.get("projectList") as FormArray;
  }
  addProject(){
    this.project.push(this.createProject());
  }
  removeProject(i:any){
    this.project.removeAt(i);
  }
 
  createProject(){
    return this.formBuilder.group({
      projectName:[],
      description:[],
      users:[],
      deadline:[]

    });
  }
  userslist: User[] = this.userService.employees;

  ngOnInit(): void {
   /* this.clients = this.clientsService.getClients();
    this.clientChangeSub = this.clientsService.clientChanged.subscribe(
      (clients: Client[]) => {
        this.clients = clients;
      }
    );
    this.subscription = this.clientsService.startEditingClient.subscribe(
      (i: number) => {
        this.editedClientIndex = i;
        this.editMode = true;
        this.editedClient = this.clientsService.getClient(i);
        this.clientForm.setValue({
          name: this.editedClient.name,
          code: this.editedClient.code,
          email: this.editedClient.email,
          location: this.editedClient.location,
          projectname: this.editedClient.projectname,
          description: this.editedClient.description,
          users: this.editedClient.users,
          deadline: this.editedClient.deadline,
        });
      }
    );*/
   
  }
  
  onSave(clientData: {
    name: string;
    email: string;
    location: string;
    code: string;
  }) {
    this.isSubmitted = true;
    this.savedData=this.clientForm.value;
    if (this.clientForm.valid) {
      console.log("client add", this.clientForm.value);
      this.http
        .post<any>('https://sailstimehunt-default-rtdb.asia-southeast1.firebasedatabase.app/dept.json', clientData)
        .subscribe(
          (responseData) => {
            
            console.log('Added client', responseData);
          },)}
    /*if (this.editMode) {
      this.clientsService.updateClient(
        this.editedClientIndex,
        this.clientForm.value
      );
    } else {
     
      this.clientsService.addClient(this.clientForm.value);
    }*/
    
   // this.editMode = false;

   // this.clientForm.reset();
  }

  editItem(i: any) {
    this.clientsService.startEditingClient.next(i);
  }

  onReset() {
    this.clientForm.reset();
    this.editMode = false;
  }
  /*onRemove() {
    this.clientsService.deleteClient(this.editedClientIndex);
    this.onReset();
  }

  ngOnDestroy(): void {
    this.clientChangeSub.unsubscribe();
    this.subscription.unsubscribe();
  }*/
}
