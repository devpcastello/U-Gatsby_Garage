import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";

import { BlockRendererComponents } from "../config/blockRendererComponents";

const Page = (props) => {
  return (
    <BlockRendererProvider
      allBlocks={props.pageContext.blocks}
      renderComponent={BlockRendererComponents()}
    />
  );
};

export default Page;
