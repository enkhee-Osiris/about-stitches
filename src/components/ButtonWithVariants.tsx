import { styled } from "../stitches.config";

const Button = styled("button", {
  $$shadow: "rgb(138, 43, 226)",

  all: "unset",
  backgroundColor: "rgb(43, 47, 49)",
  boxShadow: "$$shadow 0px 0px 0px 2px",
  color: "#fff",
  fontFamily: '"Rubik", sans-serif',

  "&:hover": {
    $$shadow: "rgb(65, 105, 225)",
    backgroundColor: "rgb(53, 55, 56)",
  },

  "&.custom-class": {
    $$shadow: "rgb(30, 45, 225)",
  },

  variants: {
    shape: {
      round: {
        borderRadius: "9999px",
      },
      square: {
        borderRadius: "12px",
      },
    },
    size: {
      small: {
        fontSize: "17px",
        padding: "20px 50px",
      },
      big: {
        fontSize: "20px",
        padding: "30px 60px",
      },
    },
  },

  defaultVariants: {
    shape: "square",
    size: "big",
  },

  compoundVariants: [
    {
      size: "big",
      shape: "square",
      css: {
        background: "linear-gradient(90deg, rgba(94,9,121,1) 0%, rgba(61,58,73,1) 100%)",
      },
    },
  ],
});

export default Button;
