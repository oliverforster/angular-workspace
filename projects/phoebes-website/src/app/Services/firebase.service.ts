import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage} from '@angular/fire/compat/storage'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore, private fireStorage: AngularFireStorage) { }

  setItem(newItem: any){
    this.firestore.collection('items').add(newItem);
  }

  getGallery(){
    return this.firestore.collection('Gallery').valueChanges();
  }
}
