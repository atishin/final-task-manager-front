import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { OdataMetadata } from 'odata-context';
import * as $ from 'jquery';
import { IOdataSets } from './/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TMOdataService {
    private metadata: OdataMetadata<IOdataSets>;
    private url = 'http://final-tm.azurewebsites.net/odata';

    constructor(private $http: Http) {
        this.metadata = new OdataMetadata<IOdataSets>(this.url, this.$http);
    }

    public getContext() {
        const subject = new Subject<IOdataSets>();
        this.metadata.getContext().then(context => subject.next(context));
        return subject.asObservable();
    }
}
