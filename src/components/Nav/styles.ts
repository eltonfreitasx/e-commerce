import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export const Opacity = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const infoAnimation = keyframes`
    from {
        left: -0%;
    }

   to {
        left: 100%;
   }
`

export const Header = styled.header`
    .header {
        width: 100%;
        animation: ${Opacity} ease 2s;
        
    }

    .header .top_header {
        max-width: 100%;
        display: flex;
        padding: 0.6rem;
        background-color: ${props => props.theme['gray-100']};
    }

    .header .top_header .icon {
        margin-left: 1.25rem;
        margin-right: 0.5rem;
        color: ${props => props.theme['gray-400']};
        font-size: 1.18rem;
    }

    .header .top_header .info {
        width: 100%;
    }

    .header .top_header .info p {
        margin-left: 0%.6rem;
        color: ${props => props.theme['gray-500']};
    }

    .header .mid_header {
        display: flex;
        padding: 1.25rem 2.5rem;
        max-width: 100%;
        justify-content: space-between;
    }

    .header .mid_header .logo img {
        cursor: pointer;
        object-fit: cover;
    }

    .header .mid_header .search_box {
        display: flex;
        flex-wrap: nowrap;
    }


    .header .mid_header .search_box input {
        padding: 0.6rem 0.6rem;
        outline: none;
        background: none;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        width: 15.625rem;
        border: none;
        background: ${props => props.theme['gray-100']};
    }

    .header .mid_header .search_box button {
        padding: 10px 10px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        border: none;
        outline: none;
        width: 3.12rem;
        background: ${props => props.theme['pink']};
        color: ${props => props.theme['white']};
        cursor: pointer;
        margin-right: 1.8rem;
        transition: 0.5s;
        font-weight: 600;
    }

    .header .mid_header .search_box button:hover {
        background: ${props => props.theme['yellow']};
        color: ${props => props.theme['pink']};
    }

    .header .mid_header .user {
        display: flex;
        margin-right: 1.8rem;
        margin-top: 0.5rem;
    }

    .header .mid_header .user .icon {
        margin-right: 0.6rem;

    }

    .header .mid_header .user .btn button {
        border: none;
        outline: none;
        font-size: 1rem;
        background: none;
        cursor: pointer;
    }

    .header .last_header {
        padding: 0.6rem 2.5rem;
        display: flex;
        background: ${props => props.theme['gray-800']};
        justify-content: space-between;
    }

    /* .header .last_header .user_profile {
        display: flex;
        margin-top: 0.6rem;
        // esse aqui esta no profile

    } */

    .header .last_header .nav {
        display: flex;
        align-items: center;
        height: 7vh;
    }

    .header .last_header .nav  ul {
        display: flex;
    }

    .header .last_header .nav  ul li {
        list-style: none;
        display: flex;
        align-items: center;
    }

    .header .last_header .offer {
        background: ${props => props.theme['yellow']};
        border-radius: 0.6rem;
        padding: 0.6rem 1.2rem;
        display: flex;
        align-items: center;

        p {
            text-transform: uppercase;
            color: ${props => props.theme['gray-800']};
            font-weight: 600;
            font-size: 0.8rem;
        }
    }
`

export const NavLink = styled(Link)`
    margin-right: 1.2rem;
    text-decoration: none;
    color: ${props => props.theme['white']};
    font-weight: 600;
    transition: 0.3s;

    &:hover {
        color: ${props => props.theme['yellow']};
    }
`
