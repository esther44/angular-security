import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

isLoggedIn$: Observable<boolean>;
isLoggedOut$: Observable<boolean>;

constructor(private fb: FormBuilder,
  private authservice: AuthService) {

}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.isLoggedIn$ = this.authservice.isLoggedIn$;
  this.isLoggedOut$ = this.authservice.isLoggedOut$;
}
}
