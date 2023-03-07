import { parseCookies, setCookie, destroyCookie } from 'nookies'

function handleClick() {
    // Simply omit context parameter.
    // Parse
    const cookies = parseCookies()
    console.log({ cookies })

    // Set
    setCookie(null, 'fromClient', 'value', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    })

    // Destroy
    // destroyCookie(null, 'cookieName')
}

export default function Me() {
    return <button onClick={handleClick}>Set Cookie</button>
}