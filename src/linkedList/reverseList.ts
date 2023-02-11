/*
 * Reverse Linked List
 *
 * Given the head of a singly linked list,
 * reverse the list, and return the reversed list.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Example 2:
 * Input: head = [1,2]
 * Output: [2,1]
 *
 * Example 3:
 * Input: head = []
 * Output: []
 */

import ListNode from "./ListNode"

export function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null

  const { newHead } = reverse(head)

  return newHead
}

function reverse(head: ListNode): { newHead: ListNode; tail: ListNode | null } {
  if (head.next === null) return { newHead: head, tail: head }

  const { newHead, tail } = reverse(head.next)

  tail.next = head
  head.next = null

  return { newHead, tail: head }
}
