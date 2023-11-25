/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages:['mongoose','@typegoose/typegoose']
	}, 
	reactStrictMode: true
}

module.exports = nextConfig
