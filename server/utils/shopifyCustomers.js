export const customerAccessTokenCreate = async (email, password)=> {
  try {
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
  
    const data = res.data.customerAccessTokenCreate
    const accessToken = data.customerAccessToken?.accessToken
    const customerErrors = data.customerUserErrors
    const serverErrors = res.data.errors
  
    if (customerErrors?.[0]) {
      throw customerErrors?.[0]
    }
  
    if (serverErrors?.[0]) {
      throw serverErrors?.[0]
    }
  
    return { accessToken }
  } catch (err) {
    throw err
  }
} 

export const getCustomer = async (customerAccessToken)=> {
  try {
    const res = await fetchShopify(`query {
      customer(customerAccessToken: "${customerAccessToken}") {
        id
        firstName
        lastName
        acceptsMarketing
        email
        phone
      }
    }`)
    console.log('getCustomer', res)
    return res.data.customer
  } catch (err) {
    throw err
  }
}
