import { Tab1PageModule } from './tab1/tab1.module';
import { Tab1Page } from './tab1/tab1.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: 'tabs/tab1', loadChildren: './tab1/tab1.module#Tab1PageModule'},
  { path: 'home', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'modal-image-progress', loadChildren: './modal-image-progress/modal-image-progress.module#ModalImageProgressPageModule' },
  { path: 'avaliacao-fisica', loadChildren: './avaliacao-fisica/avaliacao-fisica.module#AvaliacaoFisicaPageModule' },
  { path: '', loadChildren: './configurar-usuario/configurar-usuario.module#ConfigurarUsuarioPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
