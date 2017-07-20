import { Injectable } from '@angular/core';
// methods for ajax
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthServiceService {

  constructor(private myHttp:Http) { }

  // POST signup
  //  an argument for each req.body in API route
  signup(fullName, email, password) {
      this.myHttp
        .post(
          'http://localhost:3000/api/signup',
          // form body info to send to backend (req.body)
          {
            // keys = name in backend
            // values = variable name in this function
            fullName: fullName,
            email:email,
            password:password
          },
          // 🍪 SEND THE COOKIES 🍪
          {withCredentials:true}
        )
        .toPromise()
        .then(res => res.json());
  }

  login(email, password) {
    return this.myHttp.post(
      'http://localhost/api/login',
      {
        email:email,
        password:password
      },

      {withCredentials: true}
    )

    // convert observable to promise
    .toPromise()
    // parse JSON
    .then(res => res.json());
  }

  logout() {
    return this.myHttp
    .post(
      'http://localhost/api/logout',
      // nothing to send back to req.body
      {},
      {withCredentials: true}
    )
  }

  checklogin() {
    return this.myHttp.get(
      'http://localhost:3000/api/checklogin',
      // send cookies across domains
      {withCredentials: true}
    )
  }


  // POST login
  // POST logout
  // GET checklogin

}


// a primise is anobject that will be
    //delivered in the future

// use then (success callback)
// and catch (failure callback)
