import styled, {createGlobalStyle} from 'styled-components'

export const COLORS = {
  text: 'black',
  background: 'lightblue',
  border: 'black'
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  
  body {
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 400;

    margin: 0;
    padding: 0;
  }
`

export const Button = styled.button`
  background: none;
  font-size: 18px;

  padding: 12px 20px;

  cursor: pointer;
`

export const PillButton = styled(Button)`
  border: 2px solid ${COLORS.border};
  border-radius: 30px;
  margin: 6px;

  transition: 0.13s ease;
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  text-align: center;

  padding: 12px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavButton = styled(Button)`
  border: none;
  font-size: 16px;
`

export const H1 = styled.h1`
  font-size: 18px;
`

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  padding: 12px;
`

export const QuizBox = styled.section`
  background-color: ${COLORS.background};

  width: 100%;
  height: 100%;

  padding: 0px 12px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const ContinueButton = styled(PillButton)`
  background-color: ${COLORS.text};
  color: ${COLORS.background};
  border: none;

  :hover {
    background-color: white;
    color: ${COLORS.text};
  }
`
