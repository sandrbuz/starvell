export function getStarIcon(rating) {
  const numRating = parseFloat(rating);
  if (numRating >= 5.0) return "/star-green.svg";
  if (numRating >= 4.0) return "/star-yellow.svg";
  if (numRating >= 3.0) return "/star-orange.svg";
  return "/star-red.svg";
}

export function getRatingStyles(rating) {
  const numRating = parseFloat(rating);
  if (numRating >= 5.0)
    return {
      backgroundColor: "rgba(29, 180, 98, 0.08)",
      color: "#1DB462",
    };
  if (numRating >= 4.0)
    return {
      backgroundColor: "rgba(255, 229, 0, 0.08)",
      color: "#E1B000",
    };
  if (numRating >= 3.0)
    return {
      backgroundColor: "rgba(255, 142, 38, 0.08)",
      color: "#FF8E26",
    };
  return {
    backgroundColor: "rgba(255, 92, 92, 0.08)",
    color: "#FF5C5C",
  };
}
