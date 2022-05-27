const Home: NextPage = () => {
  return (
    <Box
      css={{
        maxWidth: "1145px",
        margin: "0 auto",
      }}
    >
      <Box as="main">
        <Box
          css={{
            maxWidth: "715px",
            margin: "$spacing-07 auto 0",
            padding: "0 $spacing-05",

            "@md": {
              margin: "$spacing-10 auto 0",
              padding: "0",
            },
          }}
        >
          <SearchBar />
          <Tag
            label="Label"
            onRemove={() => {
              console.log("Remove");
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

import type { NextPage } from "next";

import SearchBar from "@/components/ui/SearchBar";
import Tag from "@/components/ui/Tag";
import { Box } from "@/components/ui/primitives";
