import React, { Component } from 'react'
import Layout from '@theme/Layout';
import PrismCode from '@site/src/components/PrismCode';
import Translate, { translate } from '@docusaurus/Translate';

export default class b2 extends Component {
    render() {
        return (
            //opp
            <Layout>
                <h1>
                    <Translate>Welcome to my website</Translate>
                </h1>
                <img
                    src="/img/docusaurus.png"
                    alt={
                        translate({
                            message: 'Home icon',
                            description: 'The homepage icon alt message',
                        })
                    }
                />
                <PrismCode e='' />
            </Layout>
        )
    }
}

