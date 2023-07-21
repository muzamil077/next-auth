/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: true,
  providers: [
    {
      name: "google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      avatarUrl: async (user, _) => {
        if (user.avatar) {
          return user.avatar.url;
        } else {
          return null;
        }
      },
    },
    {
      name: "github",
      clientId: process.env.GITHUB_ID ,
      clientSecret: process.env.GITHUB_SECRET,
      avatarUrl: async (user, _) => {
        if (user.avatar_url) {
          return user.avatar_url;
        } else {
          return null;
        }
      },
    },
  ],
};

module.exports = NextConfig;
