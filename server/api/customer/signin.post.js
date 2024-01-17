export default defineEventHandler(async (event)=> {
  const {
    email,
    password
  } = await readBody(event)

  try {

    console.log("Signin test", {email})

    const res = await fetchShopify(`mutation customerAccessTokenCreate {
      customerAccessTokenCreate(input: {email: "${email}", password: "${password}"}) {
        customerAccessToken {
          accessToken
        }
        customerUserErrors {
          message
        }
      }
    }`)
    console.log(`[GraphQL] customerCreate result`, res, res.data.customerAccessTokenCreate)

    const accessToken = res.data.customerAccessTokenCreate?.customerAccessToken?.accessToken
    const customerErrors = res.data.customerAccessTokenCreate?.customerUserErrors
    const serverErrors = res.data.errors

    if (accessToken) {
      setCookie(event, 'accessToken', accessToken)
    } 

    if (customerErrors?.[0]) {
      throw customerErrors?.[0]
    }

    if (serverErrors?.[0]) {
      throw serverErrors?.[0]
    }
    
    return { accessToken }
  } catch (err) {
    console.log(err)
    throw err
  }
})

// https://shopify.dev/docs/api/storefront#endpoints
// https://shopify.dev/docs/api/storefront#endpoints