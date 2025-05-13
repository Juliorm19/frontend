// src/app/home/home.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

interface QuickAccessItem {
  title: string;
  description: string;
  icon: string; // Font Awesome icon class
  routerLink: string;
  colorClass: string; // Para variar un poco si quieres
}

@Component({
  selector: 'app-home',
  imports:[CommonModule, RouterModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string = 'PYAM'; // Esto vendría de un servicio de autenticación
  currentDate: Date = new Date();

  quickAccessItems: QuickAccessItem[] = [
    {
      title: 'Proyectos Activos',
      description: 'Gestiona y visualiza el estado de los proyectos en curso.',
      icon: 'fas fa-hard-hat',
      routerLink: '/projects',
      colorClass: 'text-primary' // Bootstrap primary, o tu naranja
    },
    {
      title: 'Gestión de Recursos',
      description: 'Administra personal, maquinaria y materiales.',
      icon: 'fas fa-users-cog',
      routerLink: '/resources',
      colorClass: 'text-success' // Bootstrap success
    },
    {
      title: 'Informes y Analíticas',
      description: 'Genera reportes de avance, costos y rendimiento.',
      icon: 'fas fa-chart-line',
      routerLink: '/reports',
      colorClass: 'text-info' // Bootstrap info
    },
    {
      title: 'Documentación',
      description: 'Accede a planos, permisos y contratos.',
      icon: 'fas fa-file-alt',
      routerLink: '/documents',
      colorClass: 'text-warning' // Bootstrap warning
    }
  ];

  // Ejemplo de datos para un pequeño dashboard
  dashboardStats = {
    activeProjects: 12,
    pendingTasks: 34,
    budgetUtilization: 75 // en porcentaje
  };

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías cargar el nombre del usuario desde un AuthService
    // this.authService.getCurrentUser().subscribe(user => this.userName = user.name);
  }
}