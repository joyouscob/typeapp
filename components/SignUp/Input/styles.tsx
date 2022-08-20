import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:5px 0;
    letter-spacing:1.5px;
    flex-wrap:wrap;
    @media(max-width:650px){
        flex-direction:column;
        border-radius:0px;
        justify-content:space-between;
    }
`

export const EmailInput = styled.input`
    background-color: ${(props) => props.theme.darkGrey};
    border:1px solid ${(props) => props.theme.darkGrey};
    border-radius:0px;
    color:${(props) => props.theme.white};
    width:100%; //width of the flex 
    flex:0.7; //take 70% of its 100% width of Container
    padding:18px;

    :focus{
        outline:none;
    }
    @media(max-width:650px){
        border-radius:4px;
        margin-bottom:5px;
    }

`
export const SignupLink = styled.a`
    width:100%;
    background-color: ${(props) => props.theme.brightBlue};
    font-weight:bold;
    padding:17px 0;
    text-align: center;
    color:${(props) => props.theme.white};
    cursor:pointer;
    transition:all 250ms;
    border-radius:0px;
    flex:0.3; //take 30% of its 100% width of Container

    &:hover{
        background-color:#0483ee;
    }
    @media(max0width:650px){
        border-radius:4px;
    }

`