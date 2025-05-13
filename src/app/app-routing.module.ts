import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RrhhComponent } from './pages/rrhh/rrhh.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';
import { RegistroOsComponent } from './pages/registro-os/registro-os.component';
import { RegistroAsComponent } from './pages/registro-as/registro-as.component';
import { PreFacturasComponent } from './pages/pre-facturas/pre-facturas.component';
import { ArqueoBriqComponent } from './pages/arqueo-briq/arqueo-briq.component';
import { GpsComponent } from './pages/gps/gps.component';
import { OperativaComponent } from './pages/operativa/operativa.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AreaClientesComponent } from './pages/area-clientes/area-clientes.component'; // Opcional

// Placeholder para páginas que aún no existen pero están en el footer
const PlaceholderComponent = HomeComponent; // O crea un componente simple
const enterprise = 'PYAM';
const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Inicio - ' + enterprise },
  { path: 'rrhh', component: RrhhComponent, title: 'Recursos Humanos - ' + enterprise },
  { path: 'operaciones', component: OperacionesComponent, title: 'Operaciones - ' + enterprise},
  { path: 'registro-os', component: RegistroOsComponent, title: 'Registro OS - ' + enterprise},
  { path: 'registro-as', component: RegistroAsComponent, title: 'Registro AS - ' + enterprise },
  { path: 'pre-facturas', component: PreFacturasComponent, title: 'Pre-Facturas - ' + enterprise },
  { path: 'arqueo-briq', component: ArqueoBriqComponent, title: 'Arqueo de Briq - ' + enterprise },
  { path: 'gps', component: GpsComponent, title: 'GPS - ' + enterprise },
  { path: 'operativa', component: OperativaComponent, title: 'Operativa - ' + enterprise },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto - ' + enterprise },
  { path: 'area-clientes', component: AreaClientesComponent, title: 'Área de Clientes - ' + enterprise }, // Opcional
  { path: 'politica-privacidad', component: PlaceholderComponent, title: 'Política de Privacidad' }, // Ejemplo
  { path: 'terminos-servicio', component: PlaceholderComponent, title: 'Términos de Servicio' }, // Ejemplo
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route para 404 (redirige a inicio)
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Para que al navegar vuelva arriba
    anchorScrolling: 'enabled' // Para que funcione el fragmento en la URL (ej. #presupuesto)
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }