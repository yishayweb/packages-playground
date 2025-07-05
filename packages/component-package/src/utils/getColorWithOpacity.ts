const getColorWithOpacity = (color: string, opacity: number) => {
  try {
    const opacityNumber = Math.round(
      Math.min(Math.max(opacity || 1, 0), 1) * 255,
    );
    return color + opacityNumber.toString(16).toUpperCase();
  } catch {
    return color;
  }
};

export default getColorWithOpacity;
