export class Message {

    public static success(message: string) {
      alert(message);
    }

    public static error(message: string) {
      alert(message);
    }

    public static confirm(message: string, action: any) {
      const res = confirm(message);
      if (res == true)
        action(); 
    }
}
