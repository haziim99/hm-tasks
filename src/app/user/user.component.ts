import { Component, Input, Output, EventEmitter, output} from '@angular/core';
import { DUMMY_USERS} from '../dummy-users'
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required : true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }




/*  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar)
  /* get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar
  } */

 /*  onSelectUser(){
  const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  this.selectedUser.set(DUMMY_USERS[randomIndex]);
  } */
}
