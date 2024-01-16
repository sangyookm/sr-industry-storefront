
export default defineEventHandler(async ()=> {
  const config = useRuntimeConfig()

  try {
    const res = await $fetch(`https://e1d696-4.myshopify.com/api/2021-07/graphql.json`, {
      headers: {
        'X-Shopify-Storefront-Access-Token': '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'
      },
      query: JSON.stringify(`{
        products(first: 3) {}
      }`)
    })
    console.log(res)
  } catch (err) {
    console.log(err)
  } finally {
    console.log("GraphQL Test")
  }
})

// https://shopify.dev/docs/api/storefront#endpoints
// https://shopify.dev/docs/api/storefront#endpoints