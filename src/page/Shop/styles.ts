import styled from 'styled-components'

export const ContainerShop = styled.main`
    width: 100%;
    padding: 20px 30px;

    > h2 {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${props => props.theme['gray-800']};
        font-size: 2rem;
        font-weight: 300;
    }

    > p {
        margin-top: 0.3rem;
        color: ${props => props.theme['gray-500']};
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
                    border: 3px solid ${props => props.theme['gray-100']};
                    width: 15.6rem;

                    .header {
                        max-width: 100%;
                        padding: 0.6rem 1.2rem;
                        background: ${props => props.theme['gray-100']};

                        h3 {
                            font-size: 1rem;
                            color: ${props => props.theme['gray-800']};
                            letter-spacing: 1px;
                            text-transform: uppercase;
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
                                color: ${props => props.theme['gray-500']};
                                letter-spacing: 1px;
                                cursor: pointer;
                                transition: 0.5s;

                                &:hover {
                                    color: ${props => props.theme['gray-800']};
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
                        color: ${props => props.theme['gray-800']};
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
                            height: 24.3rem;
                            overflow: hidden;
                            border: 3px solid ${props => props.theme['gray-100']};
                            margin-left: 0.9rem;
                            margin-top: 1.2rem;

                            &:hover .img_box .icon {
                                margin-left: -3rem;
                            }

                            .img_box {  
                                display: flex;
                                
                                img {
                                    width: 100%;
                                    height: 16.8rem;
                                }

                                .icon {
                                    display: flex;
                                    flex-direction: column;
                                    padding: 0.6rem;
                                    margin-top: 0.6rem;
                                    margin-left: 2.4rem;
                                    transition: 0.5s;
                                    
                                    li {
                                        box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
                                        border: 2px solid ${props => props.theme['gray-100']};
                                        margin-top: 0.6rem;
                                        list-style: none;
                                        padding: 0.6rem;
                                        color: ${props => props.theme['gray-500']};
                                        cursor: pointer;
                                        transition: 0.5s;
                                        background: ${props => props.theme['white']};
                                        transition: 0.5s;

                                        &:hover {
                                            box-shadow: rgba(0,0,0,0.8) 0px 3px 8px;
                                        }
                                    }
                                }
                            }

                            .detail {
                                margin-top: 0.6rem;
                                width: 100%;
                                display: flex;
                                align-items: center;
                                flex-direction: column;

                                h3 {
                                    text-align: center;
                                    color: ${props => props.theme['gray-800']};
                                    font: 1rem;
                                    font-weight: 600;
                                    text-transform: capitalize;
                                }

                                p {
                                    margin-top: 0.3rem;
                                    text-align: center;
                                    color: ${props => props.theme['pink']};
                                    font-size: 0.8rem;
                                }

                                button {
                                    margin-top: 0.4rem;
                                    padding: 0.6rem 1.2rem;
                                    border: none;
                                    outline: none;
                                    background: ${props => props.theme['gray-800']};
                                    color: ${props => props.theme['white']};
                                    font-weight: bold;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    transition: 0.3s;

                                    &:hover {
                                        background: ${props => props.theme['yellow']};
                                        color: ${props => props.theme['white']};
                                    }
                                }

                            }
                        }
                    }
                }
        }
    }
`