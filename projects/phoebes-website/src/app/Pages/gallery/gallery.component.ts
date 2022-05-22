import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../Services/firebase.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  illustrations: Observable<any[]> = new Observable<any[]>();
  testImage: string = '';
  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.illustrations = this.firebaseService.getGallery();
  }

  onMouseEnter(item:any){
    item.IsActive = true;
  }

  onMouseLeave(item:any){
    item.IsActive = false;
  }

}
