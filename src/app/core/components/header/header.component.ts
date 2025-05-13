import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isNavbarOpen = false;
  areaClientesEnabled = true; // Cambia a false si no aplica

  navItems: NavItem[] = [
    { label: 'Inicio', link: '/' },
    { label: 'RRHH', link: '/rrhh' },
    { label: 'Operaciones', link: '/operaciones' },
    { label: 'Registro OS', link: '/registro-os' },
    { label: 'Registro AS', link: '/registro-as' },
    { label: 'Pre-Facturas', link: '/pre-facturas' },
    { label: 'Arqueo de Briq', link: '/arqueo-briq' },
    { label: 'GPS', link: '/gps' },
    { label: 'Operativa', link: '/operativa' },
    { label: 'Contacto', link: '/contacto' }
  ];

  constructor(private router: Router) {}

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }

  solicitarPresupuesto() {
    // Podría navegar a una página de presupuesto o abrir un modal
    this.router.navigate(['/contacto'], { fragment: 'presupuesto' }); // Navega a contacto, sección presupuesto
    this.closeNavbar();
  }
}