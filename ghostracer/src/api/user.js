import axios from 'axios'

const userBaseUrl = 'http://ghostracer-dev.us-east-1.elasticbeanstalk.com';

export function getUserProfile(username){
    let url = `${userBaseUrl}/getProfile`;
    const reqHeader = { 'token': username }

    console.log(`Making GET request to ${url}, headers: ${reqHeader}`);

    return axios.get(url, {
        headers: reqHeader
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response: ${res.status}, ${res.statusText}`)
        // console.log(res.data)
        return JSON.parse(res.data)
    })
}

