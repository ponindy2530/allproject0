import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { APP_CONFIG } from '../app.config';
import { IAppConfig } from '../app.config.interface';
import { Message } from 'primeng/primeng';

@Injectable()
export class LoginService {

    public loginStatus = new BehaviorSubject<String>('');

    msg: Message[] = [];

    //isLogin: LogStatus = { value: false }; // เราใช้ Object เพราะต้องการให้มัน by reference , เป็น trick ที่ทำให้ไม่ต้องใช้ observable

    constructor(private router: Router, @Inject(APP_CONFIG) private config: IAppConfig, private _http: Http) {

        this.loginStatus.next(localStorage.getItem('token'));
        //console.log('login service Called at :', new Date())
    }

    login(body: Object): any {
        //let options: any;
        return this._http.post(this.config.apiEndpoint + 'users/login', body).map(res => { return res.json() })
            .subscribe(res => {
                localStorage.setItem('token', res.id);
                localStorage.setItem('username', res.userId);
                this.loginStatus.next('true');
                this.router.navigate(['newvisit']);
            },
            error => { this.msg.push({ severity: 'error', summary: 'username หรือ password', detail: ' ไม่ถูกต้อง !!' }); }
            );
    }

    logout(): void {
        // clear token and remove user from local storage
        //console.log('logout service')
        localStorage.clear();
        this.loginStatus.next('');
    }

}
