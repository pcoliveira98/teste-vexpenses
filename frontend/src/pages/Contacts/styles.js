import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    height: 100%;

    h1 {
        color: #3b9eff
    }

    div{
        width: 100%;

        ul{
            list-style-type: none;
            margin: 0;
            padding: 0;

            li {
                font: 200 20px/1.5;
                border-radius: 4px;
                border-bottom: 1px solid #ccc;
            }

            /* li:last-child {
                border: none
            } */

            li a {
                text-decoration: none;
                color: #000;
                display: block;
                width: 100%;
            }

            li a:hover {
                font-size : 30px;
                background: #f6f6f6;
            }

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%
            }
            
            label {
                /* display: flex; */
                margin-left: 10px;
            }
        }
    }

`