import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnamnesePage } from './anamnese';

@NgModule({
  declarations: [
    AnamnesePage,
  ],
  imports: [
    IonicPageModule.forChild(AnamnesePage),
  ],
})
export class AnamnesePageModule {}
