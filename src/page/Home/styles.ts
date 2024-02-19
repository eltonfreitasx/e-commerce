import styled from 'styled-components'
import slide from './../../assets/slide-1.webp'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.main`
    width: 100%;

    .top_banner {
        background: url(${slide});
        max-width: 100%;
        height: 60vh;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 3.1rem 3.75rem;

        & > div {
            width: 100%;
            position: relative;
            top: 20%;
            padding: 0.6rem 3.1rem;

            h3 {
                text-transform: capitalize;
                letter-spacing: 1px;
                font-weight: 300;
                color: #cd1e76;
            }

            h2 {
                text-transform: uppercase;
                color: #232323;
                letter-spacing: 1px;
                font-size: 2.6rem;
                margin-top: 0.5rem;
            }

            p {
                color: #232323;
                letter-spacing: 1px;
                margin-top: 0.5rem;
                margin-bottom: 1.8rem;
            }
        }
    }
`

export const NavLink = styled(Link)`
    padding: 0.7rem 1.8rem;
    background: #fed700;
    color: #232323;
    text-decoration: none;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
        color: #fff;
        background: #cd1e76;
    }
`

export const Trending = styled.div`
    & {
        padding: 1.2rem 1.8rem;
    width: 100%;
    }

    .container {
        max-width: 100%;
        display: flex;

        .left_box {
            padding: 0.6rem 1.2rem;
            width: 75%;

            .header {
                display: flex;
                max-width: 100%;
                padding: 0.6rem 0.6rem;
                background: #f6f7f8;
                justify-content: space-between;

                .heading {
                    h2 {
                        text-transform: uppercase;
                        font-size: 1rem;
                        color: #232323;
                        margin-top: 0.3rem;
                    }
                }

                .cate {
                    display: flex;
                    margin-top: 0.3rem;

                    h3 {
                        text-transform: capitalize;
                        margin-right: 0.6rem;
                        color: #232323;
                        font-size: 0.9rem;
                        cursor: pointer;
                        transition: 0.3s;

                        &:hover {
                            color: #cd1e76;
                        }
                    }
                }

            }

            
        }
    }
`