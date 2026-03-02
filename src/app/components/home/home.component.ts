import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private authService: AuthService, private router: Router) { }

  isLoggedIn(): boolean {
    return !!this.authService.getToken();
  }

  logout(): void {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }

}
