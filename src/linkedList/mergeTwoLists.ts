/*
 * Merge Two Sorted Lists
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 */

import ListNode from "./ListNode"

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null) return list2
  if (list2 === null) return list1

  let result: ListNode

  if (list1.val <= list2.val) {
    result = list1
    merge(result, list1.next, list2)
  } else {
    result = list2
    merge(result, list1, list2.next)
  }

  return result
}

function merge(
  result: ListNode,
  list1: ListNode | null,
  list2: ListNode | null,
): void {
  if (list1 === null) {
    result.next = list2
  } else if (list2 === null) {
    result.next = list1
  } else if (list1.val <= list2.val) {
    result.next = list1
    merge(result.next, list1.next, list2)
  } else {
    result.next = list2
    merge(result.next, list1, list2.next)
  }
}
