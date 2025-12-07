import js from "@eslint/js"
import next from "eslint-config-next"
import prettierRecommended from "eslint-plugin-prettier/recommended"

const config = [
  ...next,
  js.configs.recommended,
  prettierRecommended,
  {
    rules: {
      semi: ["error", "never"],
      "no-extra-semi": "error",
    },
  },
]

export default config
