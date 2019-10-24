export class Matrix {
  constructor(str) {
    this.str = str;
  }

  createRows(str) {
    this._rowsArr = this.str
      .split("\n")
      .map(row => row.split(" ").map(item => Number(item)));
  }

  createCols(str) {
    this._colsArr = new Array(this._rowsArr[0].length).fill(
      new Array(this._rowsArr.length)
    );
    for (let i = 0; i < this._rowsArr[0].length; i++) {
      for (let j = 0; j < this._rowsArr.length; j++) {
        this._colsArr[i][j] = this._rowsArr[j][i];
      }
      this._colsArr[i] = [...this._colsArr[i]];
    }
  }

  get rows() {
    if (!this._rowsArr) {
      this.createRows(this.str);
    }
    return this._rowsArr;
  }

  get columns() {
    if (!this._colsArr) {
      if (!this._rowsArr) {
        this.createRows(this.str);
      }
      this.createCols();
    }
    return this._colsArr;
  }
}
