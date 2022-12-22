export interface IShape {
  rows: number
  columns: number
}

export abstract class StructureAbstract {
  shape: IShape

  getMatrix(rotated: boolean = false): number[][] {
    let x = rotated ? this.shape.columns : this.shape.rows
    let y = rotated ? this.shape.rows : this.shape.columns
    return new Array(x).fill(new Array(y).fill(0))
  }
}

/*

x x x
y y

x
x y
x y

  y y
x x x

y x
y x
  x

*/