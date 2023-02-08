export function firstUniqChar(s: string): number {
  const mapper: Record<string, number> = {}
  let key: string

  for (let i = 0; i < s.length; i++) {
    key = s.charAt(i)

    if (typeof mapper[key] === "undefined") {
      mapper[key] = i
    } else if (mapper[key] !== -1) {
      mapper[key] = -1
    }
  }

  console.log(mapper)

  return Object.keys(mapper).reduce((result, key) => {
    console.log(key, mapper[key], result)
    return result === -1 || (mapper[key] !== -1 && result > mapper[key])
      ? mapper[key]
      : result
  }, -1)
}
