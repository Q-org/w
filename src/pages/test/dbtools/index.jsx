import React from 'react';
import Layout from '@theme/Layout';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import BrowserOnly from '@docusaurus/BrowserOnly';




export default (dbtools) => {

    /* 
        fetch('http://127.0.0.1/q/fs/%E4%BF%AE%E6%94%B9%E6%97%B6%E9%97%B4')
            .then((res) => res.text())
            .then((sqls) => resulte = sqls) */


    return (
        <Layout title="Hello" description="Hello React Page">
            <ErrorBoundary
                fallback={({ error, tryAgain }) => (
                    <div>
                        <p>这个组件崩溃了，因为错误：{error.message}.</p>
                        <button onClick={tryAgain}>再试一次！</button>
                    </div>
                )}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '50vh',
                        fontSize: '20px',
                    }}>
                    <div>
                        用户名:<input name='user'></input>
                    </div>
                    <p>
                        <code> </code>
                        <code></code>
                        <BrowserOnly>
                            {() => {
/*                                 console.log(dbtools.dbtools)
                                console.log(dbtools) */

                                return (
                                    <span>
                                        {dbtools.dbtools}

                                    </span>)
                            }}
                        </BrowserOnly>
                    </p>

                </div>

            </ErrorBoundary>
        </Layout>
    )

}