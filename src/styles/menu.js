import styled from "styled-components";

export const MenuBar = styled.div`
  width: 100vw;
  box-sizing: border-box;

  textgroup {//costom tag
    text-align: center;
    width: 100%;
    line-height: 5px;
  }
  .ul {
    margin: 0 auto;
    width: 330px;
    height: 330px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 3
    0px;

    justify-content: space-between;
    align-content: space-between;
    .li {
      width: 150px;
      height: 150px;
      border: 1px solid #ddd;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #fff;

      a {
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-top: 10px;
        
      }
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
`;
