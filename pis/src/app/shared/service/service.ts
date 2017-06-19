import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Observable'
@Injectable()
export class ProductService {
    opts: RequestOptions;
    constructor(private _http: Http) {

    }
    private _api = "http://164.115.22.73/p/ponapiyii/index.php?r=apipis/";
    private _apifile = "http://203.157.182.17/yiiapi/index.php?r=file/";
    //private _api = "http://localhost/someniti/ponapiyii/index.php?r=apipis/";
    // private _apifile = "http://localhost/job2560/yiiapi/index.php?r=file/";

    getSql(): Observable<any> {
        let url = "http://203.157.102.136/hdc/includes/jsonAction.php?nextList=mastercup&provinceID=36&_=1490246977372";
        // console.log(url);
        
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    addData(tbl: any, fd: any, param: any, pd: any): Observable<any> {
        let url = this._api + "addData&tbl=" + tbl + '&fd=' + fd + '&param=' + param;
        //   console.log(url);
        let body = JSON.stringify(pd);
        //    console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
            // .map(res => { console.log(res.json()) })
            .map((response: Response) => response.json())
    }

    delData(tbl: any, fd: any, param: any): Observable<any> {
        let url = this._api + "delData&tbl=" + tbl + '&fd=' + fd + '&param=' + param;
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    dbData(key: any): Observable<any> {
        let url = this._api + "dbData&key=" + key;
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    dbData1(key: any, param1: any): Observable<any> {
        let url = this._api + "dbData1&key=" + key + '&param1=' + param1;
        //  console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    dbData2(key: any, param1: any, param2: any): Observable<any> {
        let url = this._api + "dbData2&key=" + key + '&param1=' + param1 + '&param2=' + param2;
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }
    dbData3(key: any, param1: any, param2: any, param3: any): Observable<any> {
        let url = this._api + "dbData3&key=" + key + '&param1=' + param1 + '&param2=' + param2 + '&param3=' + param3;
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }




    loginstart(param: any): Observable<any> {
        let url = this._api + "loginstart&key=" + param;
        //console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    login(pd: any): Observable<any> {
        let url = this._api + "login";
        //   console.log(url);
        let body = JSON.stringify(pd);
        //    console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
            // .map(res => { console.log(res.json()) })
            .map((response: Response) => response.json())
    }

    uploadFile(pd: any): Observable<any> {
        let url = this._apifile + "uploadFile";
        //   console.log(url);
        let body = JSON.stringify(pd);
        //    console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
            // .map(res => { console.log(res.json()) })
            .map((response: Response) => response.json())
    }



}

