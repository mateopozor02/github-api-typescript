export const preset = "ts-jest";
export const testEnvironment = "node";
export const transform = {
  "^.+\\.tsx?$": "ts-jest", // Use ts-jest to handle .ts and .tsx files
};
export const moduleFileExtensions = ["ts", "tsx", "js", "jsx", "json", "node"];
export const transformIgnorePatterns = ["/node_modules/"];
