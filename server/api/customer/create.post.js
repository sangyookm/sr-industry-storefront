export default defineEventHandler(async ()=> {
  console.log("Start GraphQL Test")
  try {
    const res = await $fetch(`https://e1d696-4.myshopify.com/api/2021-07/graphql.json`, {
      method: 'post',
      headers: {
        'X-Shopify-Storefront-Access-Token': 'cacbb5355f7beaa76b27ba3e5b92ffda'
      },
      body: JSON.stringify({query: `{
        products(first: 3)  {
          edges {
            node {
              id
              title
            }
          }
        }
      }`})
      
    })
    console.log("GraphQL Test")
    console.log(res)
    return res
  } catch (err) {
    console.log(err, err.code, err.message)
  }
})

// https://shopify.dev/docs/api/storefront#endpoints
// https://shopify.dev/docs/api/storefront#endpoints