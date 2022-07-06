const axios = require('axios');
const env = require('dotenv').config({ path: '../.env' })

async function makeRequest() {

    const config = {
        method: env.parsed.LINK_METHOD,
        url: env.parsed.LINK_REQUEST
    }

    let res = await axios(config)

    console.log(res.data);
}

setInterval(() => {
    makeRequest();
}, 10000);