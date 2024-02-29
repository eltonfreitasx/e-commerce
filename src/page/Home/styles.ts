import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';
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

export const Trending = styled.section`
    & {
        padding: 1.2rem 0.5rem;
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

        .right_box {
           padding: 0.6rem 1.2rem;
           width: 24%;
           display: flex;
           flex-direction: column;

           .right_container {
            max-width: 100%;
                
                .testimonial{
                    width: 100%;
                    border: 1px solid #f6f7f8;

                    .head {
                        padding: 0.6rem 0.6rem;
                        width: 100%;
                        background: #f6f7f8;

                        h3 {
                            text-align: center;
                            color: #232323;
                            font-size: 1rem;
                            text-transform: uppercase;
                            margin-top: 0.6rem;
                            letter-spacing: 1px;
                        }
                    }

                    .detail {
                        padding: 0.6rem 1.2rem;

                        .img_box  {
                            display: flex;
                            justify-content: center;

                            img {
                                /* margin-top: 40px; */
                            }
                        }

                        .info {
                            margin-top: 0.6rem;

                            h3 {
                                text-align: center;
                                text-transform: uppercase;
                                font-size: 0.9rem;
                                color: #232323;
                            }

                            h4 {
                                text-align: center;
                                font-size: 0.8rem;
                                margin-top: 0.7rem;
                                color: #cd1e76;
                                font-weight: 300;
                                text-transform: uppercase;
                            }

                            p {
                                margin-top: 0.6rem;
                                text-align: center;
                                font-weight: 600;
                                color: #232323;
                                font-size: 0.9rem;
                                margin-bottom: 1.2rem;
                            }
                        }
                    }
                }
           }
        }
    }
`
export const NewsLetter = styled.section`
        width: 100%;
        background: #f6f7f8;
        margin-top: 1.2rem;
        padding: 0.6rem;

        div.head {
            margin-top: 0.6rem;
            width: 100%;

            h3 {
                text-align: center;
                color: #232323;
                font-size: 1rem;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        }

        .form {
            margin-top: 0.6rem;
            width: 100%;

            p {
                text-align: center;
                text-transform: capitalize;
                color: #8a8a8a;
            }

            input {
                margin-top: 0.6rem;
                width: 100%;
                padding: 0.6rem;
                background: none;
                outline: none;
                border: 1px solid #8a8a8a;
                color: #232323;
                border-radius: 4px;
            }

            button {
                margin-top: 0.6rem;
                margin-left: 3.75rem;
                padding: 0.6rem 1.8rem;
                border: none;
                background: none;
                outline: none;
                background: #fed700;
                color: #232323;
                font-weight: 600;
                border-radius: 8px;
                cursor: pointer;
            }

            .icon_box {
                margin-top: 1.2rem;
                width: 100%;
                display: flex;
                justify-content: space-between;

                .icon {
                    font-size: 1.4rem;
                    margin: 1.2rem;
                    cursor: pointer;
                    
                }
            }
        }
`

export const LogoFacebook = styled(BiLogoFacebook)`
 color: #fff;
 background-color: #3b5998;
 border-radius: 4px;
 transition: 0.6s;

        &:hover {
            color: #3b5998;
            background-color: #fff;
            border: 1px solid #3b5998;
        }
`

export const LogoTwitter = styled(BiLogoTwitter)`
    color: #00acee;
    background: none;
    border-radius: 4px;
    transition: 0.6s;

        &:hover {
            color: #fff;
            background: #00acee;
        }
`

export const LogoInstagram = styled(BiLogoInstagram)`
    background: linear-gradient(to bottom right, #515BD4, #2134AF, #DD2A7B, #FEDA77, #F58529);
    color: #fff;
    border-radius: 4px;
    transition: background 1s ease-in-out; 

    &:hover {
        background: linear-gradient(to top left, #515BD4, #2134AF, #DD2A7B, #FEDA77, #F58529);
    }
`

export const LogoYoutube = styled(BiLogoYoutube)`
    color: #c4302b;
    background-color: #fff;
    border-radius: 4px;
`

export const ShowMore = styled.button`
    margin-left: 40%;
    padding: 0.6rem 1.8rem;
    margin-top: 1.2rem;
    background: none;
    outline: none;
    border: none;
    color: #ffff;
    font-weight: 600;
    background: #232323;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background: #fed700;
    }

    /* video 1:31:29 https://www.youtube.com/watch?v=054qYbsxyXw */
`

export const Banners = styled.section`
 padding: 1.2rem 1.8rem ;
 width: 100%;

    .banners_container {
        max-width: 100%;
        display: flex;

        .left_box {
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .box {
                margin-top: 0.6rem;
            }
        }

        .right_box {
            width: 79.5%;

            .top {
                max-width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 0.6rem;
                height: 25vh;

             img:first-child {
                width: 78%;
            }
            }

            .bottom {
                max-width: 100%;
                margin-top: 0.6rem;

                img {
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
    }
`

export const ProductType = styled.section`
    padding: 1.2rem 2rem;
    width: 100%;

    .productype {
        display: flex;
        width: 100%;
        justify-content: space-between;

        .box {
            width: 22.5rem;
            height: max-content;
            border: 3px solid #f6f7f8;
            overflow: hidden;
            
            .header {
                width: 100%;
                height: 3.1rem;
                background: #f6f6f6;
                padding: 0.6rem;

                h2 {
                    color: #232323;
                    font-size: 1rem;
                    text-transform: uppercase;
                    font-weight: 600;
                }
            }

            .product_box {
                width: 100%;
                height: 6.8rem;
                padding: 0.6rem 0.6rem;
                border: 1px solid #f6f7f8;
                display: flex;

                .img_box img {
                    width: 6.25rem;
                    height: 6.25rem;
                    object-fit: cover;
                }

                .detail {
                    margin-left: 1.8rem;

                    h3 {
                        font-size: 0.9rem;
                        color: #8a8a8a;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }

                    p {
                        margin-top: 0.3rem;
                        color: #cd1e76;
                        letter-spacing: 1px;
                        font-weight: 600;
                        font-size: 0.8rem;
                    }

                    .icon {
                        margin-top: 0.6rem;
                        display: flex;

                        button {
                            background: none;
                            outline: none;
                            border: none;
                            padding: 0.4rem 1rem;
                            border: 2px solid #f6f7f8;
                            margin-left: 0.6rem;
                            border-radius: 16px;
                            color: #8a8a8a;
                            cursor: pointer;
                            transition: 0.3s;

                            &:hover {
                                border: 2px solid #000;
                                color: #000;
                            }
                        }
                    }
                }
            }
        }
    }
`