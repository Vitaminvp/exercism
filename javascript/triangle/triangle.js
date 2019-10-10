export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    if (
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0 ||
      this.a + this.b <= this.c ||
      this.c + this.b <= this.a ||
      this.a + this.c <= this.b
    ) {
      throw new Error("Error");
    } else if (this.a === this.b && this.b === this.c) {
      return "equilateral";
    } else if (this.a === this.b || this.a === this.c || this.b === this.c) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}
