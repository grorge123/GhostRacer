import axios from 'axios'
import { listFriendsAction } from '../states/user-actions'

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
        return res.data
    })
}

export function listFriends(searchText = ''){

}
