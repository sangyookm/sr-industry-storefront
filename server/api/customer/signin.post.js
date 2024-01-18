export default defineEventHandler(async (event)=> {
  const {
    email,
    password
  } = await readBody(event)

  try {

    console.log("Signin test", {email})

    const { accessToken } = await customerAccessTokenCreate(email, password)

    if (accessToken) {
      setCookie(event, 'accessToken', accessToken)
      const customer = await getCustomer(accessToken)

      console.log(customer)

      return { accessToken, customer }
    } 
    
    throw { message: 'auth/mismatch' }

  } catch (err) {
    console.log(err)
    throw err
  }
})

// https://shopify.dev/docs/api/storefront#endpoints
// https://shopify.dev/docs/api/storefront#endpoints