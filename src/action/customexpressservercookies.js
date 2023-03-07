const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const { parseCookies, setCookie, destroyCookie } = require('nookies');

app.prepare()
    .then(() => {
        const server = express();

        server.get('/page', (req, res) => {

            // Notice how the request object is passed
            const parsedCookies = parseCookies({ req });

            // Notice how the response object is passed
            setCookie({ res }, 'fromServer', 'value', {
                maxAge: 30 * 24 * 60 * 60,
                path: '/page',
            });

            // destroyCookie({ res }, 'fromServer');

            return handle(req, res);
        });

    });