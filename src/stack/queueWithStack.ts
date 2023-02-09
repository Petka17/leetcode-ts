export class MyQueue {
  reverse: number[]
  queue: number[]

  constructor() {
    this.reverse = []
    this.queue = []
  }

  public push(x: number): void {
    while (this.queue.length > 0) {
      const val = this.queue.pop()
      /* istanbul ignore next */
      if (typeof val === "undefined") break
      this.reverse.push(val)
    }

    this.reverse.push(x)
  }

  public pop(): number {
    while (this.reverse.length > 0) {
      const val = this.reverse.pop()
      /* istanbul ignore next */
      if (typeof val === "undefined") break
      this.queue.push(val)
    }

    const result = this.queue.pop()

    if (typeof result === "undefined") {
      throw new Error("Stack is empty")
    }

    return result
  }

  public peek(): number {
    const result = this.pop()

    this.queue.push(result)

    return result
  }

  empty(): boolean {
    return this.queue.length === 0 && this.reverse.length === 0
  }

  public toString(): string {
    return `${JSON.stringify(this.queue.reverse().concat(this.reverse))}`
  }
}
