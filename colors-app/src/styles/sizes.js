const down = (size) => {
  const sizes = {
    xs: "576",
    sm: "768",
    md: "992",
    lg: "1200",
  };

  return `@media (max-width: ${sizes[size]}px)`;
};

export default { down };
