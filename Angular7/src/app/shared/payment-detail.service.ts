import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  //[x: string]: any;
  formData:PaymentDetail;
  readonly rootURL = 'http://localhost:61834/api';
  list : PaymentDetail[];

  constructor(private http: HttpClient) { }

    postPaymentDetail(){
      return this.http.post(this.rootURL +'/paymentDetail',this.formData);
    }
    putPaymentDetail(){
      return this.http.put(this.rootURL +'/paymentDetail/'+ this.formData.PMId, this.formData);
    }
    deletePaymentDetail(id){
      return this.http.delete(this.rootURL +'/paymentDetail/'+ id);
    }

  

  refreshlist(){
    this.http.get(this.rootURL +'/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
