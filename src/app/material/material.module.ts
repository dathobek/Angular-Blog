import { NgModule } from '@angular/core';
import {MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule} from '@angular/material';
import {MatTableModule,MatButtonModule,MatCardModule} from '@angular/material';
import {MatDialogModule,MatSelectModule,MatInputModule} from '@angular/material'


@NgModule({
  imports: [MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,
  MatTableModule,MatButtonModule,MatCardModule,MatDialogModule,MatSelectModule,MatInputModule],
  exports: [MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,
  MatTableModule,MatButtonModule,MatCardModule,MatDialogModule,MatSelectModule,MatInputModule],
  declarations: []
})
export class MaterialModule { }
