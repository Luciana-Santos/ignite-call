import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }

  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: User
    expires_at: DateTime?
  }
}
