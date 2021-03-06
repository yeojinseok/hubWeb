import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchScene } from '../Api'
const Wrapper = styled(motion.div)`
  overflow: hidden;
  background-color: black;
  position: relative;
  height: 100%;
  min-height: 400px;
  max-height: 400px;
  @media screen and (max-width: 830px) {
    min-height: 300px;
  }
  @media screen and (max-width: 500px) {
    min-height: 200px;
  }
  span {
    display: none;
  }
  &:hover {
    cursor: pointer;
    span {
      display: flex;
    }
  }
`
const SwiperContainer = styled.div`
  transition: transform 0.5s;
`
const SwiperInner = styled.div`
  display: flex;
  div {
    transition-property: transform;
    overflow: hidden;
    width: 100%;
    display: flex;
  }
`
const Item = styled.img`
  @media screen and (max-width: 830px) {
    min-height: 300px;
    width: 200px;
  }
  @media screen and (max-width: 500px) {
    min-height: 200px;
  }
  height: 500px;
  width: 100%;
  z-index: -10;
`

const CircleButton = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${props => props.theme.grey.darkGrey};
  color: white;
  position: absolute;
  top: 180px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Left = styled(CircleButton)`
  left: 15px;
`

const Right = styled(CircleButton)`
  right: 15px;
`

export default function SlideScreenContainer({ scenes }) {
  const swiperRef = useRef(null)
  const innerRef = useRef(null)
  const [swiperCurrentPosition, setSwiperCurrentPosition] = useState(-1)
  const [loop, setLoop] = useState()

  useEffect(() => {
    click('plus')
    swiperRef.current.style.width = scenes ? `${scenes.length}00vw` : '0'
  }, [scenes])

  useEffect(() => {
    clearTimeout(loop)
    const swiperLoop = setTimeout(() => {
      click('plus')
    }, 6000)

    setLoop(swiperLoop)

    return clearTimeout(loop)
  }, [scenes, setSwiperCurrentPosition, swiperCurrentPosition])

  useEffect(() => {
    if (swiperCurrentPosition == 0)
      swiperRef.current.style.transform = `translate(000vw)`
    else if (swiperCurrentPosition <= -1) {
      swiperRef.current.style.transform = `translate(${scenes.length - 1}00vw)`
      setSwiperCurrentPosition(scenes.length - 1)
    } else
      swiperRef.current.style.transform = `translate(-${swiperCurrentPosition}00vw)`
  }, [swiperCurrentPosition])

  function click(action) {
    clearTimeout(loop)
    setSwiperCurrentPosition(prev => {
      if (action == 'minus') {
        if (prev <= 0) return -1
        else return (prev -= 1)
      } else if (action == 'plus') {
        if (prev >= scenes.length - 1) return 0
        else return (prev += 1)
      }
    })
  }

  return (
    <>
      <Wrapper>
        <SwiperContainer ref={swiperRef}>
          <SwiperInner ref={innerRef}>
            {scenes.map(scene => (
              <div key={scene.id}>
                <Item src={scene.images.preview.url} />
              </div>
            ))}
          </SwiperInner>
        </SwiperContainer>
        <Left onClick={() => click('minus')}> {`<`}</Left>
        <Right onClick={() => click('plus')}> {`>`}</Right>
      </Wrapper>
    </>
  )
}
