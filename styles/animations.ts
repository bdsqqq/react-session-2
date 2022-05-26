/**
 * See: https://carbondesignsystem.com/guidelines/motion/overview/
 */
export const timingFunction = {
  productive: {
    standard: "cubic-bezier(0.2, 0, 0.38, 0.9)",
    entrance: "cubic-bezier(0, 0, 0.38, 0.9)",
    exit: "cubic-bezier(0.2, 0, 1, 0.9)",
  },
  expressive: {
    standard: "cubic-bezier(0.4, 0.14, 0.3, 1)",
    entrance: "cubic-bezier(0, 0, 0.3, 1)",
    exit: "cubic-bezier(0.4, 0.14, 1, 1)",
  },
};

/**
 * fast-01 - 70ms - Micro-interactions such as button and toggle
 *
 * fast-02 - 110ms - Micro-interactions such as fade
 *
 * moderate-01 - 150ms - Micro-interactions, small expansion, short distance movements
 *
 * moderate-02 - 240ms - Expansion, system communication, toast
 *
 * slow-01 - 400ms - Large expansion, important system notifications
 *
 * slow-02 - 700ms - Background dimming
 *
 * See: https://carbondesignsystem.com/guidelines/motion/overview/
 */
export const duration = {
  fast01: "70ms",
  fast02: "110ms",
  moderate01: "150ms",
  moderate02: "240ms",
  slow01: "400ms",
  slow02: "700ms",
};
