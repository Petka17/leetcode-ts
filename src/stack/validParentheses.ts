export function isValid(str: string): boolean {
  if (str.length === 1) return false

  const stack = []

  for (let i = 0; i < str.length; i++) {
    const curr = str.charAt(i)

    switch (curr) {
      case "(":
      case "[":
      case "{":
        stack.push(curr)
        break

      case "}":
        if (stack.pop() !== "{") return false
        break
      case "]":
        if (stack.pop() !== "[") return false
        break
      case ")":
        if (stack.pop() !== "(") return false
        break
    }
  }

  return stack.length === 0
}
