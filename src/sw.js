/**
 * Copyright (c) Qorg, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

export default function swCustom(params) {
  if (params.debug) {
    console.log('[微微-PWA][SW]: running swCustom code', params);
  }

  // Cache responses from external resources
  registerRoute(
    (context) =>
      [
        /www\.qio\.wiki\/.*\/(?:assets\/images|img)/,
        /graph\.facebook\.com\/.*\/picture/,
        /netlify\.com\/img/,
        /avatars1\.githubusercontent/,
      ].some((regex) => context.url.href.match(regex)),
    new StaleWhileRevalidate(),
    console.log('注册成功')
  );
}


