import { styled } from "../stitches.config";

import BaseButton from "./ButtonWithVariants";

const Button = styled(BaseButton, {
  boxShadow: "none",

  backgroundColor: "#B33232",
  color: "#FFF",
  fontWeight: "bold",

  "&:hover": {
    boxShadow: "none",
    backgroundColor: "#C94B4B",
  },

  defaultVariants: {
    shape: "square",
    size: "small",
  },
});

export default Button;
