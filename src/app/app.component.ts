import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AzureDemo';
  allUsers:User[] = [];
  formUser: User = {} as User;
  constructor(private userService:UserService){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((response:User[]) => {
      this.allUsers = response;
    });
  }

  addUser(){
    this.userService.addUser(this.formUser).subscribe(() =>{this.getUsers();})
  }
}
