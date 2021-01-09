
exports.handler = async function(req) {

    return {
        statusCode: 200,
        headers: {
          "content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({status: 'ok'})
    }  
}