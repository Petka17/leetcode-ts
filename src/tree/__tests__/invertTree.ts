import { invertTree } from "../invertTree"
// import TreeNode from "../TreeNode"

describe("invertTree function", () => {
  it("should return null for empty tree", () => {
    expect(invertTree(null)).toBe(null)
  })
})
