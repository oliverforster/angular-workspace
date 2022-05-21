import { NgModule } from '@angular/core';
import { MatSliderModule} from '@angular/material/slider'
import { MatButtonModule} from '@angular/material/button'
import { MatMenuModule} from '@angular/material/menu'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon'
import { MatCardModule} from '@angular/material/card'

// import {
//   MatButtonModule,
//   MatMenuModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatCardModule
// } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule {}
