function decode(message) {
  const regex = /\(([^()]+)\)/g
  const reverseChar = (_, group) => {
    return group.split('').reverse().join('')
  }
  return message
    .replace(regex, reverseChar)
    .replace(regex, reverseChar);
}