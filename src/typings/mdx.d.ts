declare module "*.md" {
  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  import React from "react";
  const ReactComponent: React.VFC;

  // Modify below per your usage
  export default ReactComponent;
}

declare module "*.mdx" {
  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  import React from "react";
  const ReactComponent: React.VFC;

  // Modify below per your usage
  export default ReactComponent;
}
