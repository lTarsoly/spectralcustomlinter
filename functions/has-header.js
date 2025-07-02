import { createRulesetFunction } from "@stoplight/spectral-core";

export default createRulesetFunction(
  {
    input: null,
    options: {
      type: "object",
      additionalProperties: false,
      properties: {
        value: true,
      },
      required: ["value"],
    },
  },
  (targetVal, options) => {
    const { value } = options;
    const headers = targetVal.headers || {};

    if (!headers[value]) {
      return [
        {
          message: `Must contain header ${value}.`,
        },
      ];
    }
  },
);