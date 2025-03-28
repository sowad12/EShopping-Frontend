import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
import { User, UserManager, UserManagerSettings, WebStorageStateStore } from 'oidc-client';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
// export class AccountService {
//   private currentUserSource = new ReplaySubject<any>(1);
//   currentUser$ = this.currentUserSource.asObservable();
//   private manager = new UserManager(this.getClientSettings());
//   private user: User | null;
//   token = "";
//   access_token = "";

//   constructor(private http: HttpClient, private router: Router) {
//     this.manager.getUser().then(user => {
//       this.user = user;
//       this.currentUserSource.next(this.isAuthenticated());
//     });
//   }

//   isAuthenticated(): boolean {
//     return this.user != null && !this.user.expired;
//   }

//   login() {
//     return this.manager.signinRedirect();
//   }

//   async signout() {
//     await this.manager.signoutRedirect();
//   }

//   get authorizationHeaderValue(): string {
//     console.log(this.token);
//     console.log(this.access_token);
//     return `${this.token} ${this.access_token}`;
//   }
//   logout() {
//     localStorage.removeItem('token');
//     this.currentUserSource.next(null);
//     this.router.navigateByUrl('/');
//   }
//   public finishLogin = (): Promise<User> => {
//     return this.manager.signinRedirectCallback()
//     .then(user => {
//       this.currentUserSource.next(this.checkUser(user));
//       this.token = user.token_type;
//       this.access_token = user.access_token;
//       return user;
//     })
//   }

//   public finishLogout = () => {
//     this.user = null;
//     return this.manager.signoutRedirectCallback();
//   }

//   private checkUser = (user : User): boolean => {
//     console.log('inside check user');
//     console.log(user);
//     return !!user && !user.expired;
//   }

//   getClientSettings(): UserManagerSettings {
//       return {
//         includeIdTokenInSilentRenew: true,
//         automaticSilentRenew: true,
//         silent_redirect_uri: `${environment.clientRoot}/assets/silent-callback.html`,
//         authority: environment.idpAuthority,
//         client_id: environment.clientId,
//         redirect_uri: `${environment.clientRoot}/signin-callback`,
//         scope: "openid profile eshoppinggateway",
//         response_type: "code",
//         post_logout_redirect_uri: `${environment.clientRoot}/signout-callback`
//       };
//   }
// }

export class AccountService {
  private userManager: UserManager;
  constructor() {
    const settings: UserManagerSettings = {
        userStore: new WebStorageStateStore({ store: window.localStorage }),
        authority: environment.authority,
        client_id: environment.clientId,
        client_secret: environment.clientSecret,
        redirect_uri: environment.redirectUri,
        automaticSilentRenew: true,
        response_type: 'code',
        scope: 'openid profile offline_access',
        post_logout_redirect_uri: environment.postLogoutRedirectUri,
        filterProtocolClaims: true,
        // extraQueryParams: {
        //     ...extraQueryParams          
        // }
    };
    this.userManager = new UserManager(settings);
}

public getUser(): Promise<User | null> {
    return this.userManager.getUser();
}

public getManager(): UserManager {
    return this.userManager;
}

public async login() {
    const response = await this.userManager.signinRedirect();
   
    return response;
}

public logout() {
    this.userManager.signoutRedirect();
}

public async getAccessToken() {
    const asyncToken = await this.userManager.getUser();
    return asyncToken?.access_token;
}
}
