import { postorderTraversal } from "../postorderTraversal"
import TreeNode from "../TreeNode"

describe("postorderTraversal function", () => {
  test("should return empty array for empty tree", () => {
    expect(postorderTraversal(null)).toEqual([])
  })

  test("should return singelton array for tree with one node", () => {
    const tree = new TreeNode(1)

    expect(postorderTraversal(tree)).toEqual([1])
  })

  test("should return correct array for tree with two leafs", () => {
    //
    const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3))

    expect(postorderTraversal(tree)).toEqual([2, 3, 1])
  })

  test("should return correct array for tree with more than two levels", () => {
    //
    const tree = new TreeNode(
      1,
      new TreeNode(2, undefined, new TreeNode()),
      new TreeNode(3, new TreeNode(5), new TreeNode(7)),
    )

    expect(postorderTraversal(tree)).toEqual([0, 2, 5, 7, 3, 1])
  })
})
