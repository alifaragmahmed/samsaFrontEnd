export class Request {

  public static queue = [];

  /**
   * add to queue
   * @param object {observer: any, action: function()}
   */
  public static addToQueue(object: any) {
    if (!object.key)
      object.key = new Date().getMilliseconds();

    if (!object.times)
      object.times = 1;
    else
      object.times += 1;

    Request.queue.push(object);
  }

  /**
   * start the queue
   *
   */
  public static fire() {
    let object = Request.queue.pop();

    if (object) {
      object.observer.subscribe((res)=>{
        object.action(res);
      }, (error)=>{
        console.log("errors : " + error.statusText);
        Request.queue.push(object);
        if (object.times <= 10 || error.status == 429)
          Request.fire();
      }, ()=>{
        console.log("queue size : " + (Request.queue.length) + ", key : " + object.key + ", times : " + object.times);
        Request.fire();
      });
    }
  }


}