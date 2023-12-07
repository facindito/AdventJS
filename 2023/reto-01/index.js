function findFirstRepeated(gifts) {
  const giftsRepeated = new Set()
  for (const gift of gifts) {
    if (giftsRepeated.has(gift)) return gift
    giftsRepeated.add(gift)
  }
  return -1
}
