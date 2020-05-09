// const ExtractCssChunks = require("@zeit/next-css/node_modules/extract-css-chunks-webpack-plugin")
// const withSass = require("@zeit/next-sass")
const withFonts = require("next-fonts")
const withImages = require("next-images")
const withSourceMaps = require("@zeit/next-source-maps")()
const md5 = require("md5")
const path = require("path")
const fs = require("fs")
const sm = require("sitemap")
const webpack = require("webpack")

const isDev = process.env.ENV === "local"

const exportRobots = ({ dir, outDir }) => {
  const robotsTxtFile =
    process.env.ENV === "production"
      ? "env/production/robots.txt"
      : process.env.ENV === "staging"
      ? "env/staging/robots.txt"
      : "env/develop/robots.txt"

  fs.copyFile(
    path.join(dir, robotsTxtFile),
    path.join(outDir, "robots.txt"),
    (err) => {
      if (err) {
        return console.log(err)
      }
      console.log("robots.txt has been exported")
    }
  )
}

const nextConfig = {
  publicRuntimeConfig: {
    environment: process.env.ENV,
    frontendDomain: process.env.FRONTEND_DOMAIN,
    recaptchaPublicKey: process.env.RECAPTCHA_PUBLIC_KEY,
    apiDomain: process.env.API_DOMAIN
  },
  exportPathMap: (defaultPathMap, { dir, outDir }) => {
    const sitemap = sm.createSitemap({
      hostname: `https://${process.env.FRONTEND_DOMAIN}`,
      cacheTime: 600000 // 600 sec - cache purge period
    })

    let map = {
      "/": {
        page: "/index",
        query: {
          modelNumber: ":id",
          source: ":id"
        }
      }
    }

    if (isDev) {
      const devMap = {}
      for (const key in map) {
        devMap[key.replace("/index", "")] = map[key]
      }
      map = devMap
    }

    // if (outDir) {
    //   exportRobots({ dir, outDir })
    // }

    return map
  }
}

const prependPolyfill = (entries, scripts) => {
  for (const script of scripts.reverse()) {
    if (entries["main.js"] && !entries["main.js"].includes(script)) {
      entries["main.js"].unshift(script)
    }
  }
}

module.exports = withSourceMaps(
  withImages(
      withFonts({
        ...nextConfig,
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[local]--[hash:base64:5]"
        },
        webpack(config, options) {
          config.optimization.namedModules = true
          config.optimization.namedChunks = true

          // Core-js polyfill
          const originalEntry = config.entry
          config.entry = async () => {
            const entries = await originalEntry()

            prependPolyfill(entries, [
              "./node_modules/core-js/stable"
              // "./node_modules/web-streams-polyfill/dist/polyfill.min"
            ])

            return entries
          }

          const fileLoaderRule = config.module.rules.find((i) =>
            i.test.toString().includes("svg")
          )

          fileLoaderRule.exclude = /static/

          config.module.rules.push({
            test: /\.svg$/,
            exclude: /node_modules/,
            use: ({ resource }) => {
              return [
                "babel-loader",
                {
                  loader: "react-svg-loader",
                  options: {
                    svgo: {
                      plugins: [
                        {
                          prefixIds: {
                            prefix(file) {
                              return md5(resource)
                            }
                          }
                        }
                      ],
                      floatPrecision: 2
                    }
                  }
                }
              ]
            }
          })

          // config.module.rules.push({
          //   test: /.css$/,
          //   include: /node_modules/,
          //   use: [
          //     !options.isServer && "extracted-loader",
          //     !options.isServer && ExtractCssChunks.loader,
          //     "css-loader"
          //   ].filter((i) => !!i)
          // })

          config.module.rules.push({
            test: /\.js$/,
            exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
                plugins: ["@babel/plugin-syntax-dynamic-import"]
              }
            }
          })

          config.plugins.push(
            new webpack.DefinePlugin({
              "process.env.ENV": JSON.stringify(process.env.ENV),
              "process.env.BUILD_ID": JSON.stringify(process.env.BUILD_ID)
            })
          )
          return config
        }
      })
    
  )
)
