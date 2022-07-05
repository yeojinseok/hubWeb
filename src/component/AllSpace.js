import styled from 'styled-components'
import React from 'react'
import { useQuery } from 'react-query'

import SceneList from './SceneList'
import { fetchScene } from '../Api'

const Text = styled.span`
  font: normal normal normal 16px/24px Noto Sans CJK KR;
  color: #000000;
  opacity: 50%;
  height: 50px;
`

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`
export default function AllSpace() {
  const { isLoading: loading, data: scenes } = useQuery('allSpace', fetchScene)

  return (
    <>
      {loading ? (
        <h2>loading..</h2>
      ) : (
        <>
          <Wrap>
            <Nav>
              <Text>
                모든 사용자가 이용 가능한 공간입니다. <br />
                공개된 공간이므로 이용에 주의하시기 바랍니다.
              </Text>
            </Nav>
            <SceneList myspace={false} scenes={scenes} />
          </Wrap>
        </>
      )}
    </>
  )
}
