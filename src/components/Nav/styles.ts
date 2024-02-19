import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Header = styled.header`
    .header {
        width: 100%;
    }

    .header .top_header {
        max-width: 100%;
        display: flex;
        padding: 0.6rem;
        background-color: #f6f7f8;
    }

    .header .top_header .icon {
        margin-left: 1.25rem;
        margin-right: 0.5rem;
        color: #ababab;
        font-size: 1.18rem;
    }

    .header .top_header .info p {
        margin-left: 0%.6rem;
        color: #8a8a8a;
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
        background: #f6f7f8;
    }

    .header .mid_header .search_box button {
        padding: 10px 10px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        border: none;
        outline: none;
        width: 3.12rem;
        background: #cd1e76;
        color: #fff;
        cursor: pointer;
        margin-right: 1.8rem;
        transition: 0.5s;
        font-weight: 600;
    }

    .header .mid_header .search_box button:hover {
        background: #fed700;
        color: #cd1e76;
    }

    .header .mid_header .user {
        display: flex;
        margin-right: 1.8rem;
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
        width: 100%;
        padding: 0.6rem 0.6rem;
        display: flex;
        background: #232323;
        justify-content: space-between;
    }

    /* .header .last_header .user_profile {
        display: flex;
        margin-top: 0.6rem;
        // esse aqui esta no profile

    } */

    .header .last_header .nav {
        margin-top: 0.9rem;
    }

    .header .last_header .nav  ul {
        display: flex;
    }

    .header .last_header .nav  ul li {
        list-style: none;

    }

    .header .last_header .offer {
        background: #fed700;
        border-radius: 0.6rem;
        margin-right: 1.25rem;
        padding: 0.6rem 1.2rem;

        p {
            margin-top: 0.5rem;
            text-transform: uppercase;
            color: #232323;
            font-weight: 600;
            font-size: 0.8rem;
        }
    }
`

export const NavLink = styled(Link)`
    margin-right: 1.2rem;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
        color: #fed700;
    }
`
