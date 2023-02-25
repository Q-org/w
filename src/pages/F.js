
import Bill from './b/odiv_zztzyfp_ewmxz01';
import React, { useState } from 'react'
import html2canvas from 'html2canvas';

// @ts-ignore
import useIsBrowser from '@docusaurus/useIsBrowser';

import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

const Okdiv = () => {
  const isBrowser = useIsBrowser();
  if (!isBrowser) {
    //console.log("正在获取路径信息……")

    return null;
  }
  const location = window.location.href;
  // @ts-ignore
  html2canvas(document.body, { quality: 0.95 })
    .then(function (canvas) {
      document.body.appendChild(canvas);
    });
  return <span>{location}</span>;
}
export default () => (<>

  <Bill />
  <Okdiv />

</>


);