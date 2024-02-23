import styled from 'styled-components'

export const ContainerFooter = styled.footer`
    width: 100%;
    padding: 1.2rem 1.8rem;
    background: #f6f6f6;

    .container {
        display: flex;
        max-width: 100%;

        .left_box {
            width: 30%;
            padding: 1.2rem;
            border-right: 2px solid #b8b7b7;

            .box {
                display: flex;
                padding: 0.6rem 1.2rem;
                margin-top: 0.9rem;

                .icon_box {
                    font-size: 1.6rem;
                    color: #cd1e76;
                }

                .detail {
                    margin-left: 0.6rem;

                    h3 {
                        text-transform: uppercase;
                        font-size: 1rem;
                        color: #cd1e76;
                        font-weight: 600;
                        letter-spacing: 1px;
                    }

                    p {
                        font-size: 0.8rem;
                        color: #232323;
                    }
                }
            }
        }

        .right_box {
            padding: 0.6rem 1.2rem;
            width: 69%;

            .header {
                max-width: 100%;
                align-items: center;

                img {
                    margin-left: 40%;
                }

                p {
                    margin-top: 0.9rem;
                    font-size: 0.8rem;
                    text-align: center;
                    font-weight: 600;
                    color: #8a8a8a;
                }
            }

            .bottom {
                padding: 0.6rem;
                margin-top: 1.8rem;
                width: 100%;
                display: flex;
                justify-content: space-between;

                .box {
                    padding: 0.6rem 1.2rem;

                    h3 {
                        text-transform: uppercase;
                        color: #232323;
                        font-size: 0.8rem;
                        letter-spacing: 1px;
                    }

                    ul {
                        margin-top: 0.6rem;

                        li {
                            list-style: none;
                            margin-top: 0.3rem;
                            color: #8a8a8a;
                            text-transform: capitalize;
                            letter-spacing: 1px;
                            font-size: 0.75rem;
                            font-weight: bold;
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
    }
`