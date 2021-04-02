class Random {
  constructor(seed) {
    this.m = 0x80000000;
    this.a = 1103515245;
    this.c = 12345;

    this.state = seed ?? Math.floor(Math.random() * (this.m - 1));
  }

  nextInt() {
    this.state = (this.a * this.state + this.c) % this.m;
    return this.state;
  }

  nextFloat() {
    return this.nextInt() / (this.m - 1);
  }
}

export default Random;
