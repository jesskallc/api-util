var cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SK 
  });

exports.handler = async function(req) {
    const { public_id, width, height, gravity=0, crop="", radius=0, effect="", angle=0} = req.queryStringParameters
    // https://res.cloudinary.com/jesska/image/upload/c_thumb,g_face,h_150,w_150/r_20/e_sepia/a_10/v1609699756/large_gbcbb_baefbbdbb3.jpg
    // "v1609699756/large_gbcbb_baefbbdbb3.jpg"
    // gravity: face, crop: thumb, effect: sepia, radius: 20, angle: 10

    // effect=oil_paint:70
    const img = cloudinary.image(public_id, {secure: true, transformation: [
        {width: width, height: height, gravity: gravity, crop: crop},
        {radius: radius},
        {effect: effect},
        // {overlay: "cloudinary_icon_blue", gravity: "south_east", x: 5, y: 5, width: 50, opacity: 60, effect: "brightness:200"},
        {angle: angle}
        ]
    })
    console.log(img)

    return {
        statusCode: 200,
        headers: {
          "content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            status: 'ok',
            img: img
        })
    }
}