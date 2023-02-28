import {useState} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  DashBoardCon,
  Header,
  ImgCon,
  TextCon,
  ThemeImg,
  IconCon,
  List,
  Button,
  TextArea,
} from './styledComponents'

// Sai Tej's Code

const DashBoard = () => {
  const [boldIconActive, setBoldIcon] = useState(false)
  const [ItalicIconActive, setItalicIcon] = useState(false)
  const [underLineIconActive, setUnderLineIcon] = useState(false)
  const [displayText, setDisplayText] = useState(' ')

  const onChangeText = event => {
    setDisplayText(event.target.value)
  }

  // console.log(displayText)

  const Boldstyle = {
    color: boldIconActive ? '#faff00' : '#f1f5f9',
    fontWeight: boldIconActive ? 'bold' : 'normal',
    fontSize: '20px',
  }

  const ItalicStyle = {
    color: ItalicIconActive ? '#faff00' : '#f1f5f9',
    fontSize: '20px',
  }

  const UnderlineStyle = {
    color: underLineIconActive ? '#faff00' : '#f1f5f9',
    fontSize: '20px',
  }

  const onClickBold = () => {
    setBoldIcon(prevState => !prevState)
  }

  const onClickItalic = () => {
    setItalicIcon(prevState => !prevState)
  }

  const onClickUnderLine = () => {
    setUnderLineIcon(prevState => !prevState)
  }

  // console.log(boldIconActive)
  // console.log(Boldstyle)

  return (
    <AppContainer>
      <DashBoardCon>
        <ImgCon>
          <Header>Text Editor</Header>
          <ThemeImg
            alt="text editor"
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          />
        </ImgCon>
        <TextCon>
          <IconCon>
            <List>
              <Button
                type="button"
                data-testid="bold"
                style={Boldstyle}
                onClick={onClickBold}
              >
                <VscBold />
              </Button>
            </List>
            <List>
              <Button
                type="button"
                data-testid="italic"
                style={ItalicStyle}
                onClick={onClickItalic}
              >
                <GoItalic />
              </Button>
            </List>
            <List>
              <Button
                type="button"
                data-testid="underline"
                style={UnderlineStyle}
                onClick={onClickUnderLine}
              >
                <AiOutlineUnderline />
              </Button>
            </List>
          </IconCon>

          <TextArea
            onTapIcon={boldIconActive}
            onTapItalic={ItalicIconActive}
            onTapUndeLine={underLineIconActive}
            onChange={onChangeText}
          />
        </TextCon>
      </DashBoardCon>
    </AppContainer>
  )
}

export default DashBoard
