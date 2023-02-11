/*
 * Symmetric Tree
 *
 * Given the root of a binary tree,
 * check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 *
 * Example 1:
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 * Example 2:
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 */

import TreeNode from "./TreeNode"

export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true

  return isTheSame(root.left, root.right)
}

function isTheSame(left: TreeNode | null, right: TreeNode | null): boolean {
  if (left === null) {
    if (right === null) {
      return true
    } else {
      return false
    }
  }

  if (right === null) {
    return false
  }

  if (right.val !== left.val) return false

  return isTheSame(left.left, right.right) && isTheSame(left.right, right.left)
}
