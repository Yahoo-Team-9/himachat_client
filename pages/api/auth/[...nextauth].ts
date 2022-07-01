import arrayBufferToHex from 'array-buffer-to-hex'
import { Session } from 'inspector'
import NextAuth, { NextAuthOptions, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import pbkdf2Hmac from 'pbkdf2-hmac'


export const authOptions: NextAuthOptions = {
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token,account,user }) {
      token.userRole = 'admin'
      console.log("account")
      //1度のみ処理させる
      if (account && user) {
        //1.サーバー側からなりすまし防止のハッシュを取得する
        await fetch("https://himathing.azurewebsites.net/api/user/get_server_hash").then((res) => {
        return res.json()
      }).then( async (json) => {
        console.log(json.res)
        const solt: string = process.env.HASH as string

        const sha256_hash = await pbkdf2Hmac(json.res, solt, 5290, 32, 'SHA-256')
        const hexhash = arrayBufferToHex(new Uint8Array(sha256_hash))
        console.log(hexhash)

        const data = {
          'email': user?.email,
          'name':user?.name,
          'server_token': hexhash,
          'provider': account.provider
        }
        //2.取得したハッシュ+保存していた文字列をsha256化してログイン処理をする
        await fetch('https://himathing.azurewebsites.net/api/user/login_auth', {// 送信先URL
          method: 'post', // 通信メソッド
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then((res) => res.json()).then((json) => {

          console.log('login_info')
          console.log(json)
          if ('res' in json) {
            //3.帰ってきたsession_tokenとuser_idをもとにセッションを取得する
          } else if ('primary_user_id' in json && 'session_token' in json) {
            token.primary_user_id = json.primary_user_id
            token.session_token = json.session_token
          }
        })
      })
      .then(data => {
        console.log(data);
      });

      }
      token.provider = account?.provider
      return token
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async session({ session, token }) {
    // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      session.primary_user_id = token.primary_user_id
      session.session_token = token.session_token
      return session
  }

  },
  secret: '8c00f4b986eaa31be0d65fc3866c1e26',
}

export default NextAuth(authOptions)
