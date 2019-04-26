import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Componente1Component } from './lazymodules/componente1/componente1.component';
import { Componente2Component } from './lazymodules/componente2/componente2.component';
import { Componente3Component } from './lazymodules/componente3/componente3.component';
import { EagermodulesComponent } from './components/eagermodules/eagermodules.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'notlazy', component: EagermodulesComponent },
  { path: 'lazymodule', loadChildren: './lazymodules/lazymodules.module#LazymodulesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
