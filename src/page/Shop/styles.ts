import styled from 'styled-components'

export const ContainerShop = styled.main`
    width: 100%;
    padding: 20px 30px;

    > h2 {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #232323;
        font-size: 2rem;
        font-weight: 300;
    }

    > p {
        margin-top: 0.3rem;
        color: #8a8a8a;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .container {
        
        max-width: 100%;
        display: flex;
        margin-top: 1.2rem;

            .left_box {
                width: 25%;

                .category {
                    border: 3px solid #f6f6f6;
                    width: 15.6rem;

                    .header {
                        max-width: 100%;
                        padding: 0.6rem 1.2rem;
                        background: #f6f6f6;

                        h3 {
                            font-size: 1rem;
                            color: #232323;
                            letter-spacing: 1px;
                            text-transform: uppercase;
                            /* text-align: center; */
                        }
                    }

                    .box {
                        margin-top: 0.6rem;
                        width: 100%;
                        padding: 0.6rem 1.2rem;

                        ul {
                            max-width: 100%;

                            li {
                                list-style: none;
                                margin-left: 0.6rem;
                                text-transform: uppercase;
                                margin-top: 0.3rem;
                                font-size: 0.9rem;
                                font-weight: 600;
                                color: #8a8a8a;
                                letter-spacing: 1px;
                                cursor: pointer;
                                transition: 0.5s;

                                &:hover {
                                    background: #232323;
                                }
                            }
                        }
                    }
                }

                .banner {
                    margin-top: 1.2rem;
                    width: 12.5rem;

                    .img_box img {
                        width: 100%;
                        object-fit: cover;
                    }
                }
        }

        .right_box {
            width: 74%;

            .banner {
                max-width: 100%;

                .img_box img {
                    width: 100%;
                    object-fit: cover;
                }
            }

                .product_box_shop {
                    max-width: 100%;
                    padding: 0.6rem 0.6rem;

                    h2 {
                        color: #232323;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        font-size: 1.3rem;
                        margin-top: 0.6rem;
                    }

                    .product_container {
                        max-width: 100%;
                        display: flex;
                        flex-wrap: wrap;

                        .box {
                            padding: 0.6rem;
                            width: 16.8rem;
                            height: 23.1rem;
                            overflow: hidden;
                            border: 3px solid #f6f6f6;
                            margin-left: 0.9rem;
                            margin: 1.2rem;

                            .img_box {  
                                display: flex;
                                
                                img {
                                    width: 10.6rem;
                                    height: 10.6rem;
                                    margin-left: 2.5rem;
                                }

                                .icon {
                                    display: flex;
                                    flex-direction: column;
                                    padding: 0.6rem;
                                    margin-top: 0.6rem;
                                    margin-left: 2.4rem;
                                    transition: 0.5s;
                                    
                                    &:hover {
                                        margin-left: -1.2rem;
                                    }

                                    li {
                                        box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
                                        border: 2px solid #f6f6f6;
                                        margin-top: 0.6rem;
                                        list-style: none;
                                        padding: 0.6rem;
                                        color: #8a8a8a;
                                        cursor: pointer;
                                        transition: 0.5s;
                                        background: #fff;
                                        transition: 0.5s;

                                        &:hover {
                                            box-shadow: rgba(0,0,0,0.8) 0px 3px 8px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
        }
    }
`