import { preorderTraversal } from "../preorderTraversal"
import TreeNode from "../TreeNode"

describe("preorderTraversal function", () => {
  test("should return empty array for empty tree", () => {
    expect(preorderTraversal(null)).toEqual([])
  })

  test("should return singelton array for tree with one node", () => {
    const tree = new TreeNode(1)

    expect(preorderTraversal(tree)).toEqual([1])
  })

  test("should return correct array for tree with two leafs", () => {
    //
    const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3))

    expect(preorderTraversal(tree)).toEqual([1, 2, 3])
  })

  test("should return correct array for tree with more than two levels", () => {
    //
    const tree = new TreeNode(
      1,
      new TreeNode(2, undefined, new TreeNode()),
      new TreeNode(3, new TreeNode(5), new TreeNode(7)),
    )

    expect(preorderTraversal(tree)).toEqual([1, 2, 0, 3, 5, 7])
  })
})
