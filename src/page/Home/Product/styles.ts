import styled from 'styled-components'

export const ProductContainer = styled.div`
         & {
                max-width: 100%;
                
                .container .box:hover .img_box .icon {
                    margin-left: -4.5vw;
                }

                .container {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;

                    .box {
                        width: 12.1rem;
                        height: 18.4rem;
                        padding: .6rem .6rem;
                        border: 4px solid #f6f6f6;
                        margin-top: 1.2rem;
                        margin-left: 1.2rem;
                        overflow: hidden;
                        border-radius: 5px;

                        .img_box {
                            display: flex;

                            img {
                                height: 11.8rem;
                                width: 11.8rem;
                                object-fit: cover;
                            }

                            .icon {
                                display: flex;
                                flex-direction: column;
                                margin-left: 0;
                                margin-top: 0.6rem;
                                transition: 0.3s;
                                
                                .icon_box {
                                    padding: 0.6rem 0.6rem;
                                    margin-top: 0.5rem;
                                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px ;
                                    z-index: 1;
                                    background: #fff;
                                    color: #cd1e76;
                                    transition: 0.4s;
                                    
                                    border-radius: 12px;
                                    cursor: pointer;

                                    &:hover {
                                        color: #fff;
                                        background: #cd1e76;
                                    }
                                }
                            }
                        }

                        .info {
                            padding: 0.1rem 0.6rem;
                            margin-left: 0.6rem;

                            h3 {
                                text-transform: uppercase;
                                font-size: 0.8rem;
                                color: #232323;
                                font-weight: 300;
                                letter-spacing: 1px;
                            }

                            p {
                                color: #cd1e76;
                                margin-top: 0.3rem;
                                font-size: 0.8rem;
                                letter-spacing: 1px;
                            }

                            .btn {
                                margin-top: 10px;
                                align-items: center;
                                padding: 0.6rem 1.2rem;
                                border: none;
                                background: none;
                                background: #232323;
                                color: #fff;
                                text-transform: capitalize;
                                border-radius: 5px;
                                cursor: pointer;
                                transition: 0.3s;

                                &:hover {
                                    background-color: #cd1e76;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
`