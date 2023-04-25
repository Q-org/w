import React, { useState, useEffect } from "react";
// import { createRoot } from "react-dom/client";
import Highlight, { defaultProps } from "prism-react-renderer";
import Layout from '@theme/Layout';
import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';

const expcode = `
w\src\pages\test\prismreactrenderer.js
(function someDemo() {
  var test = "Hello World!";
  /*console.log(test);*/
})();
return () => <App />;
`;

export default function PrismCode(props) {
  // console.log(props)
  // console.log(props.code === '', 'props.code')

  const [code, setCode] = useState(props && props.code ? props.code : expcode);
  const [language, setLanguage] = useState('sql');
  useEffect(() => {

    setCode(code)

  }, [])

  return (
    <>
      <Highlight {...defaultProps} code={code} language={language} >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

    </>

  );
}
