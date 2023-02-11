import TreeNode from "./TreeNode"

export function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []

  return postorderTraversal(root.left)
    .concat(postorderTraversal(root.right))
    .concat([root.val])
}
