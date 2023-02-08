function isValidSudoku(board: string[][]): boolean {
  // check rows/columns
  for (let i = 0; i < 9; i++) {
    if (
      !checkScope(board, { top: { c: 0, r: i }, bottom: { c: 8, r: i } }) ||
      !checkScope(board, { top: { c: i, r: 0 }, bottom: { c: i, r: 8 } })
    ) {
      return false
    }
  }

  // check squares
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        !checkScope(board, {
          top: { c: j * 3, r: i * 3 },
          bottom: { c: j * 3 + 2, r: i * 3 + 2 },
        })
      ) {
        return false
      }
    }
  }

  return true
}

function checkScope(
  board: string[][],
  {
    top,
    bottom,
  }: { top: { c: number; r: number }; bottom: { c: number; r: number } },
): boolean {
  console.log(top, bottom)

  const mapper: Record<string, true> = {}
  let element: string

  for (let i = top.r; i <= bottom.r; i++) {
    for (let j = top.c; j <= bottom.c; j++) {
      element = board[i][j]
      console.log(
        `cell(${i}, ${j}: ${element}; mapper: ${JSON.stringify(mapper)}`,
      )

      if (element !== ".") {
        if (mapper[element]) {
          return false
        } else {
          mapper[element] = true
        }
      }
    }
  }

  return true
}

const case1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]

// assert(isValidSudoku(case1), true)
console.log(isValidSudoku(case1))
