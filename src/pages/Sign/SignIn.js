import React from 'react'
//import Layout from '@theme/Layout';
//import Layout from '@mui-treasury/layout';
import { SignIn } from '@site/src/components/account/signcom'
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';

//请求登录成功后跳转 history.push(nextPathname, null);
export default function index() {

  return (<>
    <BrowserOnly>
      {() => {

        return <Link to="https://docusaurus.io" className="my-website-class">
          website
        </Link>

      }}
    </BrowserOnly>
    <SignIn />

  </>
  )
}
