import styled from "styled-components"
function Footer(){
    return(
       <MainDiv className="container d-flext justify-content-center align-items-center">
         <h1 className="text-center font-bold text-xxl">Footer</h1>
       </MainDiv>
    )
}

const MainDiv = styled.div`
height:40vh;
`;
export default Footer;