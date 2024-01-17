export const fetchShopify = (query, variables)=> {
  return $fetch('https://e1d696-4.myshopify.com/api/2021-07/graphql.json', {
    method: 'post',
    headers: {
      'X-Shopify-Storefront-Access-Token': 'cacbb5355f7beaa76b27ba3e5b92ffda'
    },
    body: JSON.stringify({query, variables}),
  })
}