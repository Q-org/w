import nookies from 'nookies'

export default function Me() {
  return <div>My profile</div>
}

export async function getServerSideProps(ctx) {
  // Parse
  const cookies = nookies.get(ctx)

  // Set
  nookies.set(ctx, 'fromGetInitialProps', 'value', {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })

  // Destroy
  // nookies.destroy(ctx, 'cookieName')

  return { cookies }
}