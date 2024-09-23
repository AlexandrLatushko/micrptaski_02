import styled from "styled-components";

const NavWrapper=styled.div`
    margin-left: 10px;
    font-size: 40px;
    & > a{
        text-decoration: none;
        color: #1e3786;
    }
    & > a.active{
        text-decoration: none;
        color: #03eaff;
    }
    & > a:hover{
        color: steelblue;
    }
`

const StyleHeader= styled.header`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

const StyleBody= styled.body`
    display: flex;
`

const StyleNav = styled.nav`
    background-color: white;
    min-height: 400px;
    width: 30%;
    color:#282c34;
    font-size: 30px;
`
const StyleContent = styled.div`
    background-color:#282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
`
const StyledFooter = styled.footer`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`

export const S = {
    NavWrapper,
    StyleHeader,
    StyleBody,
    StyleNav,
    StyleContent,
    StyledFooter
}