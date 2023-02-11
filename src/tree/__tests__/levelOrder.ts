import { levelOrder } from "../levelOrder"
import TreeNode from "../TreeNode"

describe("levelOrder function", () => {
  test("should return return an empty array for empty tree", () => {
    expect(levelOrder(null)).toEqual([])
  })

  test("should return return a single array for root without leafs", () => {
    const tree = new TreeNode(1)

    expect(levelOrder(tree)).toEqual([[1]])
  })

  test("should return return a two arrays for root with leafs", () => {
    const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3))

    expect(levelOrder(tree)).toEqual([[1], [2, 3]])
  })

  test("should return return a correct result for bigger tree", () => {
    const tree = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15, new TreeNode(4)), new TreeNode(7)),
    )

    expect(levelOrder(tree)).toEqual([[3], [9, 20], [15, 7], [4]])
  })
})
