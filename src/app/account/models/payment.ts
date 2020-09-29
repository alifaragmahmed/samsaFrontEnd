import { Message } from '../../shared/message';
import { StudentAccountService } from '../services/student-account.service';
import { Auth } from '../../shared/auth';
import { environment } from '../../../environments/environment';
import { AppModule } from '../../app.module';


export class Payment {

    public studentId: number;
    public value: number;
    public studentAcountService: StudentAccountService;
    public action: any;

    constructor(studentId: number, value: number, studentAcountService: StudentAccountService, action: any) {
        this.studentId = studentId;
        this.value = value;
        this.studentAcountService = studentAcountService;
        this.action = action;
    }

    /**
     * validate on the data
     */
    validate() {
        let valid = true;
        if (this.studentId <= 0 || this.value <= 0) {
            valid = false;
        }
        return valid;
    }

    /**
     * permform payment of the student
     */
    pay() {
        if (!this.validate()) 
            return Message.error('select a student or not value to pay');
        
        const data = {
            api_token: Auth.getApiToken(),
            student_id: this.studentId,
            value: this.value
        };
        this.studentAcountService.studentPay(data).subscribe((r)=> {
            const response: any = r;
            if (response.status == 1) {
                Message.success(response.message);
                this.action();
                Payment.loadReceipts(response.data);
            } 
            else 
                Message.error(response.message); 

        });
    }

    public static loadReceipts(data: any) {
        data.forEach(element => {
            Payment.viewReceipt(element.id);
        });
    }

    public static viewReceipt(paymentId) {
        const options = "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=905,height=484";
        const data = {
            api_token: Auth.getApiToken(),
            payment_id: paymentId
        };
        const url = environment.apiUrl + "/account/payment_receipt?" + AppModule.doc.jquery.param(data);
        window.open(url, "_blank", options);
    }

}
