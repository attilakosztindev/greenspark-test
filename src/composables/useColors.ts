import type { ColorMap } from "@/types/index";

export const useColors = () => {
  const colors: ColorMap = {
    purple: "#2E3A8C",
    green: "#3B755F",
    beige: "#F2EBDB",
    white: "#FFFFFF",
    black: "#000000",
  };

  const parseColor = (color: string, colorNames: Record<string, string>) => {
    color = color.replace(/\s/g, "").toLowerCase();

    if (colorNames[color]) color = colorNames[color];

    if (color.startsWith("#")) {
      if (color.length !== 7) return null;
      return {
        r: parseInt(color.slice(1, 3), 16),
        g: parseInt(color.slice(3, 5), 16),
        b: parseInt(color.slice(5, 7), 16),
      };
    }

    const rgbMatch = color.match(/^rgb\((\d+),(\d+),(\d+)\)$/);

    if (rgbMatch) {
      const [r, g, b] = rgbMatch;
      return {
        r: Number(r),
        g: Number(g),
        b: Number(b),
      };
    }

    return null;
  };

  const getContrastColor = (inputColor: string, className: string) => {
    const rgb = parseColor(inputColor, colors);
    if (!rgb)
      throw new Error(
        "Invalid color format. Please use hex (#RRGGBB), rgb(r,g,b), or a valid color name"
      );

    const luminance = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
    const computedColor = luminance < 128 ? "white" : "green";

    return className + "-" + computedColor;
  };

  const getHexColor = (selectedColor: string): string => {
    const normalizedColor = selectedColor.toLowerCase().trim();
    const hexColor = colors[normalizedColor];

    if (!hexColor) {
      if (selectedColor.startsWith("#") && selectedColor.length === 7)
        return selectedColor;
      throw new Error(`Color "${selectedColor}" not found in color map`);
    }

    return hexColor;
  };

  return {
    colors,
    parseColor,
    getContrastColor,
    getHexColor,
  };
};
