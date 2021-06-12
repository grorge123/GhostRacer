import axios from 'axios'
import { listFriendsAction } from '../states/user-actions'

const userBaseUrl = 'http://ghostracer-dev.us-east-1.elasticbeanstalk.com/';

export function getLadder(username) {
    let url = `${userBaseUrl}/getLadder`;
    const reqHeader = {
        'token': username
    }

    console.log(`Making GET request to ${url}, headers: ${reqHeader}`);

    return axios.get(url, {
        headers: reqHeader
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response: ${res.status}, ${res.statusText}`)
        return res.data
    })
}

export function rankLadder(username) {
    let url = `${userBaseUrl}/rankLadder`;
    const reqHeader = {
        'token': username
    }

    console.log(`Making GET request to ${url}, headers: ${reqHeader}`);

    return axios.get(url, {
        headers: reqHeader
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response: ${res.status}, ${res.statusText}`)
        return res.data
    })
}