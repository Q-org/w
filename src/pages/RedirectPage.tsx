import * as React from 'react';
import Link from '@docusaurus/Link';
import useIsBrowser from '@docusaurus/useIsBrowser';

// 定义一个跳转页面的函数组件，并指定它的类型为FC（函数组件）
export default function RedirectPage(href: string) {
  // console.log(window.location.href);
  const isBrowser = useIsBrowser();
  if (!isBrowser) {
    return null;
  }
  // 使用useEffect钩子来在组件挂载后执行跳转操作
  React.useEffect(() => {
    const newLocation: string = window.location.href;
    // 使用window.location.href属性来跳转到新的网址
    window.location.href = newLocation; // 这里改为 history.replaceState(null, '', newLocation);
    history.replaceState(null, '', newLocation);
  }, []);

  // 返回一个简单的界面
  return (
    <div>
      <h1>
        跳转中...
        {<Link to={window.location.href}>这里</Link>}
      </h1>
    </div>
  );
}
