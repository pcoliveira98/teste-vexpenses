import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;
    
    img {
        width: 100%;
    }
    
    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            /* border-color: #3b9eff; */
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: black;
            margin: 0 0 10px;

            &::placeholder {
                color: #3b9eff;
            }
        }

        span {
            color: #FF0000;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.08, '#3b9eff')};
            }
        }
        a {
            color: #3b9eff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
                opacity: 2;
            }
        }
    }
`;