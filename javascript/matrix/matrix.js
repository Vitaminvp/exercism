export class Matrix {
  constructor(str) {
    this.rowsArr = str
      .split("\n")
      .map(row => row.split(" ").map(item => Number(item)));

    this.colsArr = new Array(this.rowsArr[0].length).fill(
      new Array(this.rowsArr.length)
    );
    for (let i = 0; i < this.rowsArr[0].length; i++) {
      for (let j = 0; j < this.rowsArr.length; j++) {
        this.colsArr[i][j] = this.rowsArr[j][i];
      }
      this.colsArr[i] = [...this.colsArr[i]];
    }
  }

  get rows() {
    return this.rowsArr;
  }

  get columns() {
    return this.colsArr;
  }
}
