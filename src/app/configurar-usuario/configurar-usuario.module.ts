import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfigurarUsuarioPage } from './configurar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurarUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfigurarUsuarioPage]
})
export class ConfigurarUsuarioPageModule {}
