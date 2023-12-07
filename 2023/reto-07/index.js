function drawGift(size, symbol) {
  if (size <= 1) return '#\n'
  let gift = [];
  gift.push('#'.repeat(size) + symbol.repeat(size - 2) + '#')
  for (let i = size - 1; i > 1; i--) {
    gift.unshift(
      ' '.repeat(size - i) + '#'
      + symbol.repeat(size - 2) + '#'
      + symbol.repeat(i - 2) + '#'
    )
    gift.push(
      '#' + symbol.repeat(size - 2) + '#'
      + symbol.repeat(i - 2) + '#'
    )
  }
  gift.unshift(' '.repeat(size - 1) + '#'.repeat(size))
  gift.push('#'.repeat(size))
  return gift.join('\n') + '\n';
}