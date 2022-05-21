import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService } from '../Services/firebase.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private firebaseService: FirebaseService) { }

  newItemForm = this.formBuilder.group({
    name: '',
    age: ''
  });

  ngOnInit(): void {
  }

  onAddItem(){
    this.firebaseService.setItem(this.newItemForm.value);
    this.newItemForm.reset();
  };

}
