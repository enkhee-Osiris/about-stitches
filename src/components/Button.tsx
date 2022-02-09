import { styled } from "../stitches.config";

const Button = styled("button", {
  all: "unset",

  $$shadow: "rgb(138, 43, 226)",
  boxShadow: "$$shadow 0px 0px 0px 3px",

  backgroundColor: "rgb(43, 47, 49)",
  borderRadius: "9999px",
  color: "#fff",
  fontSize: "15px",
  padding: "10px 15px",

  "&:hover": {
    $$shadow: "rgb(65, 105, 225)",
  },

  "&.custom-class": {
    $$shadow: "rgb(30, 45, 225)",
  },

  "& + button": {
    marginLeft: "20px",
  },
});

export default Button;
