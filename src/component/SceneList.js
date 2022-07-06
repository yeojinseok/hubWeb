import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
export const Circle = styled(motion.span)`
  z-index: 12;
  background-color: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.bgColor};
  padding-bottom: 14px;
  padding-left: 2px;
  font-size: 30px;
  position: relative;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`

const Grid = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  margin-top: 30px;
  padding: 10px 0px;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 17px;
  margin-bottom: 40px;
`
const Box = styled(motion.div)`
  max-width: 368px;
  max-height: 200px;

  border-radius: 20px;
  height: 200px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  margin: 0px;
`
const hoverVariants = {
  hover: {
    scale: 1.01,
  },
}
const Img = styled.img``

const Title = styled.div`
  font: normal normal bold 20px/29px Noto Sans CJK KR;
  color: ${props => props.theme.bgColor};
  padding-top: 5px;
`

const PlusButton = styled(Circle)`
  width: 30px;
  height: 30px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-top: 3px;
  font-size: 25px;
  visibility: ${props => (props.isActive ? 'hidden' : 'visible')};
`
const PersonButton = styled(Circle)`
  padding-bottom: 0px;
  padding-left: 0px;
  font: 12px/18px Noto Sans CJK KR;
  width: 60px;
  height: 30px;
  img {
    margin-right: 5px;
  }
`
const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`
const Gradiant = styled.div`
  border-radius: 20px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(255, 255, 255, 0.1) 100%
  );

  &:hover {
    cursor: pointer;
  }
`
const BoxHeader = styled(Nav)`
  position: absolute;
  top: 0;
`

const BoxFooter = styled(Nav)`
  position: absolute;
  bottom: 0;
`

export default function SceneList(props) {
  const [cancleAddSpacePopup, setCancleAddSpacePopup] = useState(false)

  const [inviteURL, setInviteURL] = useState(false)
  const toScene = url => {
    // console.log('??')
    window.open(url, '_self')
    // openNotallowPopup();
  }
  const openCancleAddSpacePopup = () => {
    setCancleAddSpacePopup(prev => !prev)
  }

  return (
    <>
      <Grid>
        {props.scenes.entries.map(scene => (
          <Box variants={hoverVariants} whileHover="hover" key={scene.id}>
            <Img src={scene.images.preview.url} />
            <BoxHeader>
              <Title>{scene.name}</Title>
            </BoxHeader>
            <BoxFooter>
              <PlusButton
                isActive={props.myspace}
                onClick={openCancleAddSpacePopup}
              >
                {' '}
                +
              </PlusButton>
              <PersonButton>
                {/* <img src={UserIcon} /> */}
                {scene.member_count ? scene.member_count : 0}/15
                {/* //myspaces는 해당 데이터가 없는 api여서 0으로만 나옴 */}
              </PersonButton>
              <BoxFooter />
            </BoxFooter>
            <Gradiant onClick={() => toScene(scene.url)} />
          </Box>
          // <div> 123</div>
        ))}
      </Grid>
    </>
  )
}
