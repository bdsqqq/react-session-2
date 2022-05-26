const SearchBar = () => {
  return (
    <Box
      css={{
        display: "flex",
      }}
    >
      <Input type="text" placeholder="Search" />
      <Button>
        <MagnifyingGlassIcon />
      </Button>
    </Box>
  );
};

const Input = styled("input", {
  width: "100%",
  height: "100%",

  background: "$mauve3",
  padding: "$spacing-04",
  border: "1px solid $mauve7",
  borderRadius: "$md 0 0 $md",
  borderRight: "none",

  color: "$mauve12",

  "&:focus": {
    outline: "none",
    border: "1px solid $mauve6",
    boxShadow: "0 0 0 4px $mauve6",
  },

  "&::placeholder": {
    color: "$mauve11",
  },
});

const Button = styled("button", {
  cursor: "pointer",

  background: "$mauve3",
  padding: "$spacing-04 $spacing-05",
  border: "1px solid $mauve7",
  borderRadius: "0 $md $md 0 ",

  color: "$mauve12",

  transitionProperty: "background, color, border",
  transitionDuration: duration.fast01,
  transitionTimingFunction: timingFunction.productive.standard,

  "&:hover": {
    background: "$mauve4",
    borderColor: "$mauve8",
  },

  "&:focus": {
    outline: "none",
    background: "$mauve4",
    borderColor: "$mauve8",
  },

  "&:active": {
    background: "$mauve5",
    borderColor: "$mauve9",
  },
});

export default SearchBar;

import { styled } from "stitches.config";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { duration, timingFunction } from "@/animations";

import { Box } from "@/components/ui/primitives";
