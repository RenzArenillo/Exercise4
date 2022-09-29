import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  userForm: FormGroup

  constructor(fb:FormBuilder) { 
    this.userForm = fb.group({
      email: [''],
      name: [''],
      bio: [''],
      active: ['']
    })
  }

  ngAfterViewInit(): void {
    const user = this.userForm.value as User
  }

  ngOnInit(): void {
    this.userForm.valueChanges.subscribe((data) => {
      console.log(data)
    })
  }

  submit() {
    console.log(this.userForm.get('name')?.errors)
  }
}
