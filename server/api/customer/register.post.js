export default defineEventHandler(async (event)=> {
  console.log("Start GraphQL Test")
  const {
    email,
    firstName,
    lastName,
    password
  } = await readBody(event)

  try {

    console.log("Signup test", {email, firstName, lastName})

    const res = await fetchShopify(`mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          customer {
            firstName
            lastName
            email
            acceptsMarketing
          }
          customerUserErrors {
            field
            message
            code
          }
        }
      }`,
      {
        input: {
          email,
          password,
          firstName,
          lastName,
          acceptsMarketing: true
        }
      })
    console.log(`[GraphQL] customerCreate result`, res)

    if (!res?.data?.customerCreate?.customer || res?.data?.customerCreate?.customerUserErrors?.length > 0) {
      if (res.errors?.length > 0) {
        throw {
          statusCode: 500,
          statusMessage: res.errors[0]?.message,
          data: res.errors[0]
        }
      }
      throw {
        statusCode: 400,
        statusMessage: `${res?.data?.customerCreate.customerUserErrors[0].code}/${res?.data?.customerCreate.customerUserErrors[0].message}`,
        data: res?.data?.customerCreate?.customerUserErrors[0]
      }
    }
    return res.data.customerCreate.customer
  } catch (err) {
    throw err
  }
})

// https://shopify.dev/docs/api/storefront#endpoints
// https://shopify.dev/docs/api/storefront#endpoints