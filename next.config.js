/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = 
{
  images:{
    domains:["links.papareact.com","fakestoreapi.com"],
  },
  env :{
    stripe_publish_key:process.env.STRIPE_PUBLIC_KEY,
  }
}
