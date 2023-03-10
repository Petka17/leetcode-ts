class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  toList(): number[] {
    if (this.next === null) return [this.val]

    return [this.val, ...this.next.toList()]
  }
}

export default ListNode
