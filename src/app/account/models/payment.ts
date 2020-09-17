import { Message } from '../../shared/message';
import { StudentAccountService } from '../services/student-account.service';
import { Auth } from '../../shared/auth';


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
            } 
            else 
                Message.error(response.message); 

        });
    }


}
