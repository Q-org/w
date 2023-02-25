import React, { useCallback, useRef } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import * as htmlToImage from 'html-to-image';
import Bill from '../b/odiv_zztzyfp_ewmxz01';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Img = () => {
    const isBrowser = useIsBrowser();
    if (!isBrowser) return null;


    const location = window.location.href, dataUrl = null;
    let 截图区域 = document.getElementById('LayerOut')
    let img
    htmlToImage.toPng(截图区域)
        .then(function (dataUrl) {
            let img = new Image();

            img.src = dataUrl;

            if (document.querySelector('#ok').src !== null) {

                // 截图区域.style.display = 'none'
                document.querySelector('#ok').src = dataUrl
                return <div>  {img}</div>;
            }
        });

    return (
        <BrowserOnly>
            {
                () => (<img id="ok" />
                )
            }

        </BrowserOnly>

    );
}

export default () => {

    return (<>
        <div >
            <Bill />
            <Img />
        </div>
    </>)
}