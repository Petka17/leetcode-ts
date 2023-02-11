/*
 * Remove Duplicates from Sorted List
 *
 * Given the head of a sorted linked list,
 * delete all duplicates such that each element appears only once.
 * Return the linked list sorted as well.
 *
 * Example 1:
 * Input: head = [1,1,2]
 * Output: [1,2]
 *
 * Example 2:
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 */

import ListNode from "./ListNode"

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null

  let curr: ListNode = head
  let next: ListNode | null = head.next

  while (next !== null) {
    if (curr.val === next.val) {
      next = next.next
      curr.next = next
    } else {
      curr = next
      next = next.next
    }
  }

  return head
}
