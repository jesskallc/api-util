let arc = require('@architect/functions')
const sanitizeHtml = require('sanitize-html')

exports.handler = async function(req) {
  const {text} = arc.http.helpers.bodyParser(req)

  return {
      statusCode: 200,
      headers: {
        "content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        text: text,
        clean: sanitizeHtml(text, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])         
        }),
      })
  }
}