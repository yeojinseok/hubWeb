import { useQuery } from 'react-query'
import { Link, Outlet, Route, Routes, useMatch } from 'react-router-dom'
import { fetchScene } from '../Api'
import MainSecction from '../component/MainSeccstion'
import SlideScreenContainer from '../component/SlideScreenContainer'
import {
  Col,
  Header,
  Nav,
  Tap,
  Title,
  TitleText,
} from '../styles/Layout.js/HeaderLayout'

export default function Space() {
  const myspaceMatch = useMatch('/space/myspace')
  const allspaceMatch = useMatch('/space/all')

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
              <Nav>
                <Col>
                  <Title>
                    <TitleText>Space</TitleText>
                  </Title>
                  <Tap isActive={allspaceMatch}>
                    <Link to="/space/all">All Space</Link>
                  </Tap>
                  <Tap isActive={myspaceMatch}>
                    <Link to="/space/myspace">My Space </Link>{' '}
                  </Tap>
                </Col>
              </Nav>
            </Header>
            <Outlet context={'/space'} />
          </MainSecction>
        </>
      )}
    </>
  )
}
