export function matrixReshape(
  mat: number[][],
  r: number,
  c: number,
): number[][] {
  const elementCount = mat.length * mat[0].length

  if (elementCount !== r * c) return mat

  const result: number[][] = [[]]

  let n = 0
  let m = 0

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (m < c) {
        result[n].push(mat[i][j])
        m += 1
      } else {
        result.push([mat[i][j]])
        m = 1
        n += 1
      }
    }
  }

  return result
}

// const result = matrixReshape([[1, 2, 3, 4]], 2, 2)

// console.log(result)
