import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  email!: string;
  constructor(private us: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.us.logout().then(() => {
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('isLoggedIn');
      this.router.navigateByUrl('login');
    })
      .catch((err) => console.log(err));
  }
}
