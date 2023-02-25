import React from 'react'
import $ from 'jquery'
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Head from '@docusaurus/Head';


export default class Chosen extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);
        /*        this.$el.chosen();

                this.handleChange = this.handleChange.bind(this);
                this.$el.on('change', this.handleChange); */
    }

    componentWillUnmount() {
        this.$el.off('change', this.handleChange);
        /*        this.$el.chosen('destroy'); */
    }

    handleChange(e) {
        /*         this.props.onChange(e.target.value); */
    }

    render() {
        return (
            <div>
                <script type="text/javascript" src="/file/js/v_3_0/vendor/jquery/v_1_4_2/jquery-1.4.2.min.js">
                    console.log(1,$.fn)
                </script>
                <BrowserOnly fallback={<div>Loading...</div>}>
                    {() => {
                        console.log($.fn)

                        return <div> ok
                        </div>
                    }

                    }
                </BrowserOnly>

                <Head>
                    <title>wrapper</title>
                    <link rel="stylesheet" type="text/css" href="/file/css/themes/redmond/jquery.ui.autocomplete.css" />

                </Head>
                <input />
                <ul onChange={value => console.log(value)}>
                    <li>vanilla</li>
                    <li>chocolate</li>
                    <li>strawberry</li>
                </ul>

            </div>


        );
    }
}

