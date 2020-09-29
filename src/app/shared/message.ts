 
import { AppModule } from '../app.module';
 

export class Message {

    public static success(message: string) {   
      AppModule.doc.playSound('not2');
      AppModule.doc.swal.success(message); 
    }

    public static error(message: string) {  
      AppModule.doc.playSound('not2');
      AppModule.doc.swal.error(message); 
    }

    public static confirm(message: string, action: any) { 
      AppModule.doc.swal.confirm(message, action); 
    }
}
