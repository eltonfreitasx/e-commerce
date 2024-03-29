import styled from 'styled-components'

export const ProductContainer = styled.div`
         & {
                max-width: 100%;
                
                .container_product .box:hover .img_box .icon {
                    margin-left: -4.5vw;
                }

                .container_product {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;

                    .box {
                        width: 12.1rem;
                        height: 18.4rem;
                        padding: .6rem .6rem;
                        border: 4px solid ${props => props.theme['gray-100']};
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

                                  .icon_box_add {
                                    padding: 0.6rem 0.6rem;
                                    margin-top: 0.5rem;
                                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px ;
                                    z-index: 1;
                                    transition: 0.4s;
                                    border: none;
                                    color: ${props => props.theme['white']};
                                    background: ${props => props.theme['pink']};

                                    border-radius: 12px;
                                    cursor: pointer;
                                } 

                                .icon_box {
                                    padding: 0.6rem 0.6rem;
                                    margin-top: 0.5rem;
                                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px ;
                                    z-index: 1;
                                    background: ${props => props.theme['white']};
                                    color: ${props => props.theme['pink']};
                                    transition: 0.4s;
                                    border: none;

                                    border-radius: 12px;
                                    cursor: pointer;


                                     &:hover {
                                        color: ${props => props.theme['white']};
                                        background: ${props => props.theme['pink']};
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
                                color: ${props => props.theme['gray-800']};
                                font-weight: 300;
                                letter-spacing: 1px;
                            }

                            p {
                                color: ${props => props.theme['pink']};
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
                                background: ${props => props.theme['gray-800']};
                                color: ${props => props.theme['white']};
                                text-transform: capitalize;
                                border-radius: 5px;
                                cursor: pointer;
                                transition: 0.3s;

                                &:hover {
                                    background-color: ${props => props.theme['pink']};
                                    color: ${props => props.theme['white']};
                                }
                            }
                        }
                    }

                }
            }
`

export const ModalProduct = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.9);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
	

   div {
    position: relative;
    top: 4.375rem;
    left: 15.625rem;

    button {
        position: relative;
        bottom: 14rem;
        left: 46.5%;
        background: none;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            color: ${props => props.theme['pink']};
        }
    }
    

img {
    width: 30vw;
    height: 50vh;
    border-radius: 16px;
}
   }
    `

