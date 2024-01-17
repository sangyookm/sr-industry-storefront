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

    const res = await $fetch(`https://e1d696-4.myshopify.com/api/2021-07/graphql.json`, {
      method: 'post',
      headers: {
        'X-Shopify-Storefront-Access-Token': 'cacbb5355f7beaa76b27ba3e5b92ffda'
      },
      body: JSON.stringify({query: `mutation customerCreate($input: CustomerCreateInput!) {
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
      variables: {
        input: {
          email,
          password,
          firstName,
          lastName,
          acceptsMarketing: true
        }
      }
      })
    })
    console.log(`[GraphQL] customerCreate result`, res)

    if (!res?.data?.customer || res?.data?.customerUserErrors?.length > 0) {
      if (res.errors?.length > 0) {
        throw {
          statusCode: 500,
          statusMessage: res.errors[0]?.message,
          data: data.errors[0]
        }
      }
      throw {
        statusCode: 400,
        statusMessage: `${res?.data?.customerUserErrors[0].code}/${res?.data?.customerUserErrors[0].message}`,
        data: res?.data?.customerUserErrors[0]
      }
    }
    return res
  } catch (err) {
    throw err
  }
})

// https://shopify.dev/docs/api/storefront#endpoints
// https://shopify.dev/docs/api/storefront#endpoints