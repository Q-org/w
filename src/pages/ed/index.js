import React from 'react';
import Head from '@docusaurus/Head';

var simplemde = new SimpleMDE();
simplemde.value("This text will appear in the editor");

export default () => (
    <>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css" />
            <script src="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js"></script>
        </Head>
        <script>
            var simplemde = new SimpleMDE();
            simplemde.value("This text will appear in the editor");

        </script>
        中文
    </>

)