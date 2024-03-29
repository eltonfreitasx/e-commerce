import styled from 'styled-components'

export const ProfileInfo = styled.div`
    display: flex;
    margin-top: 0.6rem;

    .icon {
        background: ${props => props.theme['white']};
        border-radius: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;

        height: 35px;
        width: 35px;

        img {
            height: 40px;
            width: 40px;
            border-radius: 40%;
        }
    }

    .info {
        margin-left: 10px;

        h2 {
            color: ${props => props.theme['white']};
            font-size: 1.1rem;
        }

        p {
            color: ${props => props.theme['gray-400']};
            font-size: 0.9rem;
        }
    }
`