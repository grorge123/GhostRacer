import axios from 'axios'
import { listFriendsAction } from '../states/user-actions'

const userBaseUrl = 'http://ghostracer-dev.us-east-1.elasticbeanstalk.com/api';

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
        return JSON.parse(res.data)
    })
}

export function rankLadder(username, param) {
    let url = `${userBaseUrl}/rankLadder`;
    const reqHeader = {
        'token': username
    }

    console.log(`Making GET request to ${url}, headers: ${reqHeader}`);

    return axios.get(url, {
        headers: reqHeader,
        params: param
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response: ${res.status}, ${res.statusText}`)
        return res.data
    })
}

export function randomArticle(username) {
    let url = `${userBaseUrl}/randomArticle`;
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

export function updateLadder(username, param){
    let url = `${userBaseUrl}/updateLadder`;
    const reqHeader = {'token': username }

    console.log(`Making POST request to ${url}, headers: ${reqHeader}, param: ${JSON.stringify(param)}`);

    return axios.post(url, param, {
        headers: reqHeader,
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response: ${res.status}, ${res.statusText}`)
        return res.data
    })
}

export function changeMoney(username, param){
    let url = `${userBaseUrl}/changeMoney`;
    const reqHeader = {'token': username }

    console.log(`Making POST request to ${url}, headers: ${reqHeader}`);

    return axios.post(url, param, {
        headers: reqHeader,
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response: ${res.status}, ${res.statusText}`)
        return JSON.parse(res.data)
    })
}

export function randomOpponent(username, param){
    let url = `${userBaseUrl}/randomOpponent`;
    const reqHeader = {'token': username }

    console.log(`Making POST request to ${url}, headers: ${reqHeader}`);

    return axios.post(url, param, {
        headers: reqHeader,
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response: ${res.status}, ${res.statusText}`)
        return res.data
    })
}