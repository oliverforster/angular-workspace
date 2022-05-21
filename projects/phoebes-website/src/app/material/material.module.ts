import { NgModule } from '@angular/core';
import { MatSliderModule} from '@angular/material/slider'
import { MatButtonModule} from '@angular/material/button'
import { MatMenuModule} from '@angular/material/menu'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { MatCardModule} from '@angular/material/card'
import { MatInputModule} from '@angular/material/input'
import { DomSanitizer } from '@angular/platform-browser';
import { MatGridListModule} from '@angular/material/grid-list'


@NgModule({
  imports: [
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule
  ]
})
export class MaterialModule {
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon('instagram',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/instagram.svg'));
  }
}
