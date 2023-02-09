import { MyQueue } from "../queueWithStack"

describe("MyQueue", () => {
  test("should retrun an instance", () => {
    const queue = new MyQueue()

    expect(queue).toBeInstanceOf(MyQueue)
    expect(queue.toString()).toBe("[]")
  })

  test("should implement push method", () => {
    const queue = new MyQueue()

    queue.push(1)
    queue.push(3)

    expect(queue.toString()).toBe("[1,3]")
  })

  test("should implement pop method", () => {
    const queue = new MyQueue()

    queue.push(1)
    queue.push(3)

    expect(queue.pop()).toBe(1)
    expect(queue.toString()).toBe("[3]")
    expect(queue.pop()).toBe(3)
    expect(queue.toString()).toBe("[]")
  })

  test("should correctly handle case of push-pop-push-pop", () => {
    const queue = new MyQueue()

    queue.push(1)
    queue.push(3)
    queue.push(4)
    queue.pop()
    queue.push(6)
    queue.pop()

    expect(queue.toString()).toBe("[4,6]")
  })

  test("should implement peek method", () => {
    const queue = new MyQueue()

    queue.push(1)
    queue.push(3)
    queue.push(4)
    expect(queue.peek()).toBe(1)
    queue.push(6)
    queue.pop()
    expect(queue.peek()).toBe(3)
    expect(queue.toString()).toBe("[3,4,6]")
  })

  test("should implement empty method", () => {
    const queue = new MyQueue()

    expect(queue.empty()).toBe(true)

    queue.push(1)
    queue.push(1)

    expect(queue.empty()).toBe(false)

    queue.pop()
    queue.pop()

    expect(queue.empty()).toBe(true)
  })

  test("should throw an error if invoke pop method on the empty queue", () => {
    const queue = new MyQueue()

    expect(queue.pop.bind(queue)).toThrow("Stack is empty")
  })
})
