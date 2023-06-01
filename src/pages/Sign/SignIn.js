import * as React from 'react'
import Layout from '@theme/Layout';
//import Layout from '@mui-treasury/layout';
import { SignIn } from '@site/src/components/account/signcom'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import IframeResizer from 'iframe-resizer-react';



//import { signIn, useSession } from 'next-auth/react';
//请求登录成功后跳转 history.push(nextPathname, null);
export default function index() {
  if (ExecutionEnvironment.canUseDOM) {
    // const signIn = require.resolve('/n/next-auth/react');

  }
  const iframeRef = React.useRef(null)
  const [messageData, setMessageData] = React.useState()

  const onResized = data => setMessageData(data)

  const onMessage = data => {
    setMessageData(data)
    iframeRef.current.sendMessage('Hello back from the parent page')
  }


  return (
    <Layout>
      <IframeResizer
        forwardRef={iframeRef}
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        onMessage={onMessage}
        onResized={onResized}
        src="https://127.0.0.1/n/tt"
        autoResize={true}
        resizeFrom={'child'}
        sizeHeight={false}
      />
      <button
        onClick={() => {
          IframeResizer.resize()
        }}
      >ok
      </button>
      <SignIn />
    </Layout>
  )
}
