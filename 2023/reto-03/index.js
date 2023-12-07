function findNaughtyStep(original, modified) {
  if (original === modified) return ''
  const originalLength = original.length
  const modifiedLength = modified.length
  const maxLength = Math.max(originalLength, modifiedLength)

  for (let i = 0; i < maxLength; i++) {
    if (original[i] !== modified[i]) {
      return originalLength > modifiedLength
        ? original[i]
        : modified[i]
    }
  }
}