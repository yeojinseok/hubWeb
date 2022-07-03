import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchScene } from '../Api'
const Wrapper = styled(motion.div)`
  overflow: hidden;
  background-color: black;
  position: relative;
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
    height: 300px;
    display: flex;
  }
`
const Item = styled.img`
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
  position: fixed;
  top: 170px;
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
    }, 3000)

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
    setSwiperCurrentPosition(prev => {
      if (action == 'minus') {
        if (prev <= 0) return -1
        else return (prev -= 1)
      } else if (action == 'plus') {
        console.log('l;ength', scenes.length - 1)
        if (prev >= scenes.length - 1) return 0
        else return (prev += 1)
      }
    })
    clearTimeout(loop)
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
        <Right onClick={() => click('minus')}> {`>`}</Right>
      </Wrapper>
    </>
  )
}
