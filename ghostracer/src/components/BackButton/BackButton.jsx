import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { styled } from '@material-ui/core/styles'


const UButton = styled(IconButton)({
    position: 'absolute',
    left: '5%',
    top: '5%',
    margin: 'auto',
    height: '3em',
    width: '3em',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#ffffff',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    }
})

/*
props:
- link: string absolute location of linked page to 'go back' to, e.g. '/play'
*/
export default function BackButton(props) {
    return (
        <Link to={props.link}>
            <UButton>
                <ArrowBackIcon />
            </UButton>
        </Link>
    )
}