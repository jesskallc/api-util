let arc = require('@architect/functions')
const { request, gql } = require('graphql-request')

exports.handler = async function(req) {
  const {endpoint} = arc.http.helpers.bodyParser(req)
  // const endpoint = `${base_url}/${graphql_endpoint}`

  const query = gql`
    {
      setting{
          siteTitle
          brandLogo{
              url
              formats
          }
      }
    }
    `
  const data = await request(endpoint, query)

  return {
      statusCode: 200,
      headers: {
        "content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
          data: data
      })
  }
}