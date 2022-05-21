import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from '../Services/firebase.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private firestore: AngularFirestore, private formBuilder: FormBuilder, private firebaseService: FirebaseService) {
    this.items = firestore.collection('items').valueChanges();
   }
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
