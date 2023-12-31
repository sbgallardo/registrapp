import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ReadService } from "../../crud/read.service";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  profileCompleted:boolean = true;

  constructor(
    private authService: AuthService,
    private readService: ReadService,
  ) { }

  // Returns true if the user id is not the default value
  isLoggedIn(): boolean {
    const user_id: string = this.authService.getCurrentUserId();

    return user_id !== '?';
  }

  // Cierra la sesion del usuario
  async signOut() {
    await this.authService.signOut()
  }

  ngOnInit() {
    // @ts-ignore
    this.readService.isProfileCompleted(localStorage.getItem('user_id')).then((data) => {
      this.profileCompleted = data;
    });
  }




}
