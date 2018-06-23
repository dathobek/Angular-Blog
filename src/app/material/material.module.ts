import { NgModule } from '@angular/core';
import {MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule} from '@angular/material';
import {MatTableModule,MatButtonModule,MatCardModule} from '@angular/material';


@NgModule({
  imports: [MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,
  MatTableModule,MatButtonModule,MatCardModule],
  exports: [MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,
  MatTableModule,MatButtonModule,MatCardModule],
  declarations: []
})
export class MaterialModule { }
