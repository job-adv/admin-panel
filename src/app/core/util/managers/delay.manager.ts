export class DelayManager {

  public timer = 0;

  delayThenOperate(callback: Function, delay: number = 500): void {
    clearTimeout(this.timer);

    this.timer = setTimeout(function () {
      callback();
    }, delay);
  }
}
