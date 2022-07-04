import { useQuery } from 'react-query'
import { Link, Route, Routes, useMatch } from 'react-router-dom'
import { fetchScene } from './Api'
import MainSecction from './component/MainSeccstion'
import SlideScreenContainer from './component/SlideScreenContainer'
import {
  Col,
  Header,
  Nav,
  Tap,
  Title,
  TitleText,
} from './styles/Layout.js/HeaderLayout'

export default function Home() {
  const myspaceMatch = useMatch('/myspace')
  const exploreMatch = useMatch('/explore')

  const { isLoading: loading, data: scenes } = useQuery('Scene', fetchScene)
  return (
    <>
      {loading ? (
        <h1> loading... </h1>
      ) : (
        <>
          <SlideScreenContainer scenes={scenes.entries}></SlideScreenContainer>
          <MainSecction>
            <Header>
              <Col>
                <Title>
                  <TitleText>스페이스</TitleText>
                </Title>
              </Col>
              <Nav>
                <Col>
                  <Tap isActive={exploreMatch}>
                    <Link to="/explore">체험</Link>
                  </Tap>
                  <Tap isActive={myspaceMatch}>
                    <Link to="/myspace">마이 스페이스 </Link>{' '}
                  </Tap>
                </Col>
              </Nav>
            </Header>
          </MainSecction>
        </>
      )}
    </>
  )
}
