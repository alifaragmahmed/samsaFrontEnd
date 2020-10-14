
import { AppModule } from '../app.module';
//mport { NavBarComponent } from '../core/components/navbar/navbar.component';


export class Message {

    public static success(message: string) {
      AppModule.doc.playSound('not2');
      AppModule.doc.swal.success(message);
      //
      //AppModule.doc.observeNotification();
    }

    public static error(message: string) {
      AppModule.doc.playSound('not2');
      AppModule.doc.swal.error(message);
      //
      //AppModule.doc.observeNotification();
    }

    public static confirm(message: string, action: any) {
      AppModule.doc.swal.confirm(message, action);
    }
}
