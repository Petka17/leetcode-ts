import { isValidBST } from "../isValidBST"
import TreeNode from "../TreeNode"

describe("isValidBST function", () => {
  it("should return true for empty tree", () => {
    expect(isValidBST(null)).toBe(true)
  })

  it("should return true for single node tree", () => {
    const tree = new TreeNode(5)
    expect(isValidBST(tree)).toBe(true)
  })

  it("should return true for valid BST with only left leaf", () => {
    const tree = new TreeNode(5, new TreeNode(3))
    expect(isValidBST(tree)).toBe(true)
  })

  it("should return false for invalid BST with only left leaf", () => {
    const tree = new TreeNode(5, new TreeNode(8))
    expect(isValidBST(tree)).toBe(false)
  })

  it("should return true for valid BST with only right leaf", () => {
    const tree = new TreeNode(5, null, new TreeNode(8))
    expect(isValidBST(tree)).toBe(true)
  })

  it("should return false for invalid BST with only right leaf", () => {
    const tree = new TreeNode(5, null, new TreeNode(3))
    expect(isValidBST(tree)).toBe(false)
  })

  it("should return true for valid BST with two leaf", () => {
    const tree = new TreeNode(5, new TreeNode(3), new TreeNode(8))
    expect(isValidBST(tree)).toBe(true)
  })

  it("should return false for invalid BST with two leaf", () => {
    const tree = new TreeNode(5, new TreeNode(9), new TreeNode(8))
    expect(isValidBST(tree)).toBe(false)
  })

  it("should return false for invalid BST", () => {
    const tree = new TreeNode(
      5,
      new TreeNode(4),
      new TreeNode(6, new TreeNode(3), new TreeNode(7)),
    )
    expect(isValidBST(tree)).toBe(false)
  })
})
