import { deleteDuplicates } from "../deleteDuplicates"
import ListNode from "../ListNode"

describe("deleteDuplicates function", () => {
  it("should return null for empty list", () => {
    expect(deleteDuplicates(null)).toBe(null)
  })

  it("should return the same list for list with one item", () => {
    const result = deleteDuplicates(new ListNode(3))

    expect(result?.toList()).toEqual([3])
  })

  it("should return a list with one value when original list consists from two equal values", () => {
    const result = deleteDuplicates(new ListNode(3, new ListNode(3)))

    expect(result?.toList()).toEqual([3])
  })

  it("should return a list without duplicates when original list has several pair of duplicates", () => {
    const result = deleteDuplicates(
      new ListNode(
        3,
        new ListNode(
          3,
          new ListNode(
            4,
            new ListNode(4, new ListNode(5, new ListNode(5, new ListNode(6)))),
          ),
        ),
      ),
    )

    expect(result?.toList()).toEqual([3, 4, 5, 6])
  })
})
