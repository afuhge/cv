import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbiesComponent } from './hobbies.component';



@NgModule({
  declarations: [
    HobbiesComponent
  ],
  exports: [
    HobbiesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HobbiesModule { }
