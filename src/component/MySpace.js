import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import SceneList from './SceneList'
import { useRouteMatch, Link } from 'react-router-dom'
import { fetchMyScene } from '../Api'
// import AddSpace from './Popup/AddSpace'

const Text = styled.span`
  font: normal normal normal 16px/24px Noto Sans CJK KR;
  color: #000000;
  opacity: 50%;
  a {
    color: ${props => props.theme.accentTextColor};
    opacity: 100%;
  }
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  width: 100%;
`
const Img = styled.img``

export default function Myspace() {
  const { isLoading: loading, data: scenes } = useQuery('MyScene', fetchMyScene)
  const [imgLoading, setImgLoading] = useState(true)
  const [newSpace, setNewSpace] = useState(false)
  const openSpace = () => {
    setNewSpace(prev => !prev)
  }

  useEffect(() => {}, [])

  return (
    <>
      {loading ? (
        <h2>loading..</h2>
      ) : (
        <>
          <Wrap>
            <Nav>
              <Text>
                내가 소유하고 있는 공간입니다.<br></br> 나와 초대받은 사용자만
                이용할 수 있습니다.
              </Text>
              <span> 새로운 스페이스 </span>
            </Nav>
            <SceneList myspace={true} scenes={scenes} />
            {/* {newSpace && <AddSpace openSpace={openSpace} />} */}
          </Wrap>
        </>
      )}
    </>
  )
}
