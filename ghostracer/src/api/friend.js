import axios from 'axios'

const userBaseUrl = 'http://ghostracer-dev.us-east-1.elasticbeanstalk.com';

export function getFriendList(username){
    let url = `${userBaseUrl}/getFriendList`;
    const reqHeader = { 'token': username }

    console.log(`Making GET request to ${url}, headers: ${reqHeader}`);

    return axios.get(url, {
        headers: reqHeader
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response: ${res.status}, ${res.statusText}`)
        return res.data
    })
}

export function addFriend(username, friend){
    let url = `${userBaseUrl}/addFriend`;
    const reqHeader = {'token': username }

    console.log(`Making POST request to ${url}, headers: ${reqHeader}`);

    return axios.post(url, {
        ID: friend
    }, {
        headers: reqHeader,
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response: ${res.status}, ${res.statusText}`)
        return res.data
    })
}