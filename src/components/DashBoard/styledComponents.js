import styled from 'styled-components'

// Sai Tej's Code

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DashBoardCon = styled(AppContainer)`
  width: 70vw;
  height: 80vh;
  background-color: #1b1c22;
  display: flexbox;
  justify-content: space-between;
`

export const ImgCon = styled(AppContainer)`
  width: 30vw;
  height: 80vh;
  background-color: #1b1c22;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: space-around;
  //   background-color: aqua;
`

export const TextCon = styled(AppContainer)`
  width: 34vw;
  height: 75vh;
  border-radius: 10px;
  background-color: #25262c;
  border: 1px solid #334155;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 10px;
  //   background-color: lightblue;
`
export const IconCon = styled.ul`
  width: 34vw;
  height: 3vh;
  margin-right: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: -2220px;
  //   background-color: red;
`
export const Button = styled.button`
  background-color: transparent;
  text-align: center;
  margin-left: 1px;
  border: 0px;
`

export const TextArea = styled.textarea`
  width: 34vw;
  height: 67vh;
  background-color: #25262c;
  border: 1px solid #334155;
  color: white;
  outline: none;
  padding-top: 10px;
  padding-left: 10px;
  font-size: ${props => (props.onTapIcon === true ? '17px' : '15px')};
  font-weight: ${props => (props.onTapIcon === true ? 'bold' : 'normal')};
  font-style: ${props => (props.onTapItalic === true ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.onTapUndeLine === true ? 'underline' : 'normal'};
`

export const ThemeImg = styled.img`
  width: 25vw;
  height: 40vh;
`

export const Header = styled.h1`
  font-size: 25px;
  color: white;
`
export const List = styled.li`
  list-style-type: none;
`
