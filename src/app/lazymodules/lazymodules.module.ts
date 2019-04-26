import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';

const routes: Routes = [
  { path: '', component: Componente1Component },
  { path: 'component2', component: Componente2Component },
  { path: 'component3', component: Componente3Component }
];

@NgModule({
  declarations: [Componente1Component, Componente2Component, Componente3Component],
  imports: [RouterModule.forChild(routes)]
})
export class LazymodulesModule {}
