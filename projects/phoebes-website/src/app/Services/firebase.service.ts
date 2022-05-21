import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  setItem(newItem: any){
    this.firestore.collection('items').add(newItem);
  }

  getGallery(){
    return this.firestore.collection('items').valueChanges();
  }
}
