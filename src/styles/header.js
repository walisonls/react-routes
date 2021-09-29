import styled from "styled-components";

export const Header = styled.div`
    width: 100vw;
    height: 200px;
    box-sizing: border-box;
    background: #7159C1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;


    hgroup {
        text-align: center;
        line-height: 5px;
        color: #fff;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    img {
        width: 200px;
        height: 200px;
        margin-bottom: -100px;
        border: 10px solid #ECF1F8;
        border-radius: 50%;
    }
`;