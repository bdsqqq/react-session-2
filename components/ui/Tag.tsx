const Tag: React.FC<{ label: string; onRemove: () => void }> = ({
  label,
  onRemove,
}) => {
  return (
    <TagWrapper>
      <Label>{label}</Label>
      <Button onClick={onRemove}>
        <Box
          css={{
            border: "red 1px solid",
            width: "100%",
            height: "100%",
          }}
        >
          <Cross1Icon width={"100%"} />
        </Box>
      </Button>
    </TagWrapper>
  );
};

export default Tag;

const TagWrapper = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$spacing-02",

  color: "$mauve11",
  border: "1px solid $mauve7",
  borderRadius: "$pill",
});

const Label = styled("span", {
  padding: "$spacing-01 $spacing-02",
});

const Button = styled("button", {
  cursor: "pointer",
  borderRadius: "$pill",
  color: "$mauve11",
  backgroundColor: "$mauve3",

  border: "green 1px solid",
  height: "spacing-06",
  padding: "$spacing-03",

  ":hover": {
    backgroundColor: "$mauve9",
  },
});

import { styled } from "stitches.config";

import { Cross1Icon } from "@radix-ui/react-icons";
import { Box } from "./primitives";
