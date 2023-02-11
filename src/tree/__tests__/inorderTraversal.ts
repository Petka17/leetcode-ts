import { inorderTraversal } from "../inorderTraversal"
import TreeNode from "../TreeNode"

describe("preorderTraversal function", () => {
  test("should return empty array for empty tree", () => {
    expect(inorderTraversal(null)).toEqual([])
  })

  test("should return singelton array for tree with one node", () => {
    const tree = new TreeNode(1)

    expect(inorderTraversal(tree)).toEqual([1])
  })

  test("should return correct array for tree with two leafs", () => {
    //
    const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3))

    expect(inorderTraversal(tree)).toEqual([2, 1, 3])
  })

  test("should return correct array for tree with more than two levels", () => {
    //
    const tree = new TreeNode(
      1,
      new TreeNode(2, undefined, new TreeNode()),
      new TreeNode(3, new TreeNode(5), new TreeNode(7)),
    )

    expect(inorderTraversal(tree)).toEqual([2, 0, 1, 5, 3, 7])
  })
})
