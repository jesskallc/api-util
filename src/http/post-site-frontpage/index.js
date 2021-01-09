let arc = require('@architect/functions')
const { request, gql } = require('graphql-request')

exports.handler = async function(req) {
  const {endpoint} = arc.http.helpers.bodyParser(req)

  const query = gql`
    {
      frontPage{
            header
            info{
                header
                body
                map{
                    place_id
                    place_name
                }
            }
            events{
                categories{
                    title
                    posts{
                        title
                    cover{
                        formats
                    }
                    excerpt
                    author{
                        username
                    }
                    posted_at
                    }
                }
            }
            Newsletter{
                newsletter{
                    provider
                    name
                }
            }
            hero{
                url
                formats
            }
            style_hero
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