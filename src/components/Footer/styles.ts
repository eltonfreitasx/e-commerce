import styled from 'styled-components'

export const ContainerFooter = styled.footer`
    width: 100%;
    padding: 1.2rem 1.8rem;
    background: ${props => props.theme['gray-100']};

    .container {
        display: flex;
        max-width: 100%;

        .left_box {
            width: 30%;
            padding: 1.2rem;
            border-right: 2px solid ${props => props.theme['gray-400']};

            .box {
                display: flex;
                padding: 0.6rem 1.2rem;
                margin-top: 0.9rem;

                .icon_box {
                    font-size: 1.6rem;
                    color: ${props => props.theme['pink']};
                }

                .detail {
                    margin-left: 0.6rem;

                    h3 {
                        text-transform: uppercase;
                        font-size: 1rem;
                        color: ${props => props.theme['pink']};
                        font-weight: 600;
                        letter-spacing: 1px;
                    }

                    p {
                        font-size: 0.8rem;
                        color: ${props => props.theme['gray-800']};
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
                    color: ${props => props.theme['gray-500']};
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
                        color: ${props => props.theme['gray-800']};
                        font-size: 0.8rem;
                        letter-spacing: 1px;
                    }

                    ul {
                        margin-top: 0.6rem;

                        li {
                            list-style: none;
                            margin-top: 0.3rem;
                            color: ${props => props.theme['gray-500']};
                            text-transform: capitalize;
                            letter-spacing: 1px;
                            font-size: 0.75rem;
                            font-weight: bold;
                            cursor: pointer;
                            transition: 0.3s;

                            &:hover {
                                color: ${props => props.theme['pink']}; 
                            }
                        }
                    }
                }
            }
        }
    }
`