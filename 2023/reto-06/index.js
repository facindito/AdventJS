function maxDistance(movements) {
  let maxDis = 0
  let leftOrRight = 0
  for (let m of movements) {
    if (m === '>') maxDis += 1
    if (m === '<') maxDis -= 1
    if (m === '*') leftOrRight += 1
  }
  if (maxDis < 0) return (Math.abs(maxDis - leftOrRight))
  return maxDis + leftOrRight
}