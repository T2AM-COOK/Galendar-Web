import styled from "styled-components";

export const Main = styled.div`
    background-image: url("/images/main.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width:100vw;
    height:100vh;
`

export const NavWrap = styled.div`
    display:flex;
    justify-content:space-between;
    width:1300px;
    align-items:center;
    letter-spacing:-0.5px;
    padding-top:50px;
    animation-duration:1s;
    animation-name:Nav;
    top: 0vh;
    @keyframes Nav {
  from {
    margin-top:-10vh;
  }

  to {
    margin-top: 0vh;
  }
}
`

export const Logo = styled.img`
    width:107px;
    height:29px;
`

export const UnderBar = styled.div`
    width:60px;
    height:8px;
    background-color:#2B32B2;
    display:flex;
    justify-content:end;
    margin-bottom:1vw;
`

export const FirstDiv = styled.div`
    display:flex;
    align-items:flex-end;
    width:1300px;
`

export const NavItems = styled.div`
    width:474px;
    height:29px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
export const HandImg = styled.img`
    position: absolute;
    right: 0;
    width:600px;
    height:600px;
    animation-duration:1s;
    animation-name:HandImg;
    top: 19vh;
    @keyframes HandImg {
  from {
    top: 50vh;
  }

  to {
    top: 19vh;
    display:block;
  }
}
`;

export const Button = styled.button`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-5Medium.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    text-decoration: none;
    text-decoration-line: none;
    background-color: #FFDAFB;
    border: 0;
    cursor: pointer;
    width: 126px;
    letter-spacing: -0.5px;
    height: 50px;
    font-size: 12px;
    color: #2B32B2;
    border-radius: 12px;
    z-index: 1; 
    a {
        color: inherit; 
        text-decoration: none; 
        text-decoration-line: none;
    }
`;


export const Body = styled.div`
    letter-spacing:-0.5px;
`


export const BodyText = styled.div`
    padding-left:9vw;
    padding-top:11vh;
    height:372px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    animation-duration:1s;
    animation-name:BodyText;
    @keyframes BodyText {
  from {
    margin-top: 38vh;
  }

  to {
    margin-top: 0vh;
  }
}

`

export const BodyBText = styled.div`
@font-face {
  font-family: 'Paperlogy';
  src: url('./fonts/Paperlogy-8Bold.ttf') format('truetype');
  font-weight: bolder;
}

    font-size:72px;
    font-family: 'Paperlogy';
    font-weight:bolder;

`


export const BodySText = styled.div`
    @font-face {
  font-family: 'Paperlogy';
  src: url('./fonts/Paperlogy-4Regular.ttf') format('truetype');
  font-weight: bolder;
}
    font-size:16px;
    font-family: 'Paperlogy';
    width:25vw;
`

export const BodyLButton = styled.button`
@font-face {
    font-family: 'Paperlogy';
    src: url('./fonts/Paperlogy-5Medium.ttf') format('truetype');
}
font-family: "Paperlogy";
cursor: pointer;
text-decoration: none;
width: 126px;
height: 50px;
background-color: #2B32B2;
border-radius: 12px;
font-size: 12px;
color: white;
border: 0;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
transition: transform 1s, background-color 1s, border 1s;

&:hover {
    transform: scale(1.1);
    background-color: white;
    border: 2px solid #2B32B2;
    color: #2B32B2;
}

a {
    color: inherit; 
    text-decoration: none; 
    text-decoration-line: none;
}
`;



export const BodyInfoButton = styled.button`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-5Medium.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    text-decoration:none;
    text-decoration-line: none;
    cursor: pointer;
    width:126px;
    height:50px;
    border:2px solid #2B32B2;
    border-radius:12px;
    font-size:12px;
    color:#2B32B2;
    background-color:white;
    transition: transform 1s, background-color 1s, border 1s;

&:hover {
    transform: scale(1.1);
    background-color: #2B32B2;
    border:0px;
    color: white;
}
    a {
        color: inherit; 
        text-decoration: none; 
        text-decoration-line: none;
    }
`

export const ButtonDiv = styled.div`
    @font-face {
  font-family: 'Paperlogy';
  src: url('./fonts/Paperlogy-5Medium.ttf') format('truetype');
    }
    font-family:"parperlogy";
    width:276px;
    display:flex;
    justify-content:space-between;
`