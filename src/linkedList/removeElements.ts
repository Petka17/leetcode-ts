/*
 * Remove Linked List Elements
 * Given the head of a linked list and an integer val,
 * remove all the nodes of the linked list that has Node.val == val,
 * and return the new head.
 *
 * Example 1:
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 *
 * Example 2:
 * Input: head = [], val = 1
 * Output: []
 *
 * Example 3:
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 */

import ListNode from "./ListNode"

export function removeElements(
  head: ListNode | null,
  val: number,
): ListNode | null {
  const newHead = getFirstNoneTarget(head, val)

  if (newHead === null) return null

  remove(newHead, val)

  return newHead
}

function getFirstNoneTarget(
  head: ListNode | null,
  val: number,
): ListNode | null {
  if (head === null) {
    return null
  } else if (head.val === val) {
    return getFirstNoneTarget(head.next, val)
  } else {
    return head
  }
}

function remove(head: ListNode, val: number): void {
  if (head.next === null) return

  if (head.next.val === val) {
    head.next = getFirstNoneTarget(head.next, val)
  }

  if (head.next === null) return

  remove(head.next, val)
}
