import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/signin/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, public authService: AuthService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response.json());
      }
    );
  }
  onFetchData(){
    this.dataStorageService.getRecipes();
  }
  onLogOut() {
    this.authService.logOut();
  }
}
