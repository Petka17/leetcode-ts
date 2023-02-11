import TreeNode from "./TreeNode"

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  const left = levelOrder(root.left)
  const right = levelOrder(root.right)
  const result: number[][] = [[root.val]]

  for (let i = 0; i < Math.max(left.length, right.length); i++) {
    result.push((left[i] ?? []).concat(right[i] ?? []))
  }

  return result
}
