import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  min-height: 90vh;
  margin: 0 auto;
  background: #ecf1f8;
  position: absolute;
  top: 5%;
  left: 5%;
  border: solid 1px #ccc;
  box-sizing: border-box;

  .header {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 10px;
    background: #7159C1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: #fff;
      letter-spacing: 1px;
    }
    
    button {
      width: 40px;
      height: 40px;
      background: #00FF66;
      border: 0;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      cursor: pointer;
      box-shadow: 1px 1px 2px #555;
      transition: .5s;
      img {
        width: 30px;
        height: 30px;
      }
    }
    button:hover {
      box-shadow: 1px 1px 5px #555;
    }
  }
  .section {
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    padding: 10px;

    .list-links {
      display: flex;
      flex-direction: column;

      .link {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
      }
    }
  }
`;