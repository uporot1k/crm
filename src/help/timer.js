export class Timer {
  constructor(obj) {
    this.time = obj || {
      sec: 0,
      min: 0,
      hours: 0,
    };
    this.timer = null;
  }

  tick() {
    this.timer = setInterval(this.calcTime.bind(this.time), 1000);
    return this.time;
  }

  stop() {
    clearInterval(this.timer);
  }

  calcTime() {
    this.sec += 1;
    if (this.sec > 60) {
      this.sec = 0;
      this.min += 1;
    }
    if (this.min > 60) {
      this.min = 0;
      this.hours += 1;
    }
    console.log(`sec: ${this.sec}, min: ${this.min}, hours: ${this.hours}`);
    return this;
  }
}
export default Timer;
