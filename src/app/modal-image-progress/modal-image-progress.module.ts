import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalImageProgressPage } from './modal-image-progress.page';

const routes: Routes = [
  {
    path: '',
    component: ModalImageProgressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalImageProgressPage]
})
export class ModalImageProgressPageModule {}
