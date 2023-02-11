import TreeNode from "./TreeNode"

export function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []

  return [root.val]
    .concat(preorderTraversal(root.left))
    .concat(preorderTraversal(root.right))
}
