import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import BrowserOnly from "@docusaurus/BrowserOnly"
import Image from '@theme/IdealImage';
//import Images from '@site/src/pages/images';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<Highlight>" tag to our Highlight component
    // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
    Highlight,
    BrowserOnly,
    Image,
  //  Images
};