import { Injectable } from '@angular/core';
import { Session } from './session.model';
import { Router } from '@angular/router';
import { User } from './user.model';

@Injectable()
export class StorageService {
  private currentSession : Session | null = null;
  private localStorageService: any;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }

  loadSessionData(): Session | null{
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session | null {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): User | null{
    var session: Session | null = this.getCurrentSession();
    return (session && session.user) ? session.user : null;
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string | null {
    var session = this.getCurrentSession();
    return (session && session.user.token) ? session.user.token : null;
  };

  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/inicio_sesion']);
  }

}
