/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async()=>{
    return [
      {
      source : "/about",
      destination: "/",
      // permanent : false, //staus code 307 temporary redirect --status code imp for crawlers and search engines
       permanent : true, //staus code 308 permanent redirect

    },
  ]
  }
}

module.exports = nextConfig
