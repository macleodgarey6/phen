// netlify/functions/redirect.js
exports.handler = async (event, context) => {
    const currentDomain = event.queryStringParameters.sub1;
    const affiliateUrl = `https://www.eb9futrk.com/SRDRLT8/GF7LN2R/?sub1=${currentDomain}`;

    return {
        statusCode: 200,
        body: affiliateUrl
    };
};
