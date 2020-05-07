import {Injectable} from '@angular/core';
import {Customer} from './customer';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Item} from '../../items/itemservice/item';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private customerUrl = 'https://eurder-back.herokuapp.com/customers/';

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    console.log('second')
    return this.http.post<Customer>(this.customerUrl, customer, this.httpOptions)
      .pipe(catchError(this.handleError<Customer>('addCustomer')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
