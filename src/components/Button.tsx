import { styled } from "../stitches.config";

const Button = styled("button", {
  $$shadow: "rgb(138, 43, 226)",

  all: "unset",
  backgroundColor: "rgb(43, 47, 49)",
  borderRadius: "12px",
  boxShadow: "$$shadow 0px 0px 0px 2px",
  color: "#fff",
  fontFamily: '"Rubik", sans-serif',
  fontSize: "20px",
  padding: "30px 60px",

  "&:hover": {
    $$shadow: "rgb(65, 105, 225)",
    backgroundColor: "rgb(53, 55, 56)",
  },

  "&.custom-class": {
    $$shadow: "rgb(30, 45, 225)",
  },
});

export default Button;
