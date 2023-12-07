function manufacture(gifts, materials) {
  return gifts.filter((currentGift) => {
    return [...currentGift].every((g) => materials.includes(g));
  });
}