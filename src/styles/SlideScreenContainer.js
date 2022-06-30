import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchScene } from '../Api'
const Wrapper = styled(motion.div)`
  /* width: 100%;
  height: 300px; */
  overflow: hidden;
  background-color: black;
  position: relative;
`
const SwiperContainer = styled.div`
  /* -ms-overflow-style: none; IE and Edge */
  /* scrollbar-width: none; Firefox */
  /* overflow-y: scroll; */
  /* &::-webkit-scrollbar {
    display: none;
  } */
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

export default function SlideScreenContainer({ scenes }) {
  const swiperRef = useRef(null)
  const innerRef = useRef(null)
  const [swiperCurrentPosition, setSwiperCurrentPosition] = useState(0)
  const [loop, setLoop] = useState()
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    swiperRef.current.style.width = scenes ? `${scenes.length}00vw` : '0'
    setLoading(false)
  }, [scenes])

  useEffect(() => { // infinite move
    if(!loading){
      console.log('loop 이전',swiperCurrentPosition)
      // clearTimeout(loop)
      const swiperLoop = setTimeout(() => {
        click('plus')
      }, 3000)
      setLoop(swiperLoop)

      return clearTimeout(loop)
    }

  }, [scenes, loading,setSwiperCurrentPosition, swiperCurrentPosition])

  useEffect(() => { // translate banner
      swiperRef.current.style.transform = `translate(-${swiperCurrentPosition}00vw)`
  }, [swiperCurrentPosition])

  function click(action) { // click to move banner
    clearTimeout(loop)
    setSwiperCurrentPosition(prev => {
      if (action == 'minus') {
        if (prev-1 < 0) return scenes.length-1
        else return (prev -1)
      } else if (action == 'plus') {
        if (prev+1 > scenes.length - 1) return 0
        else return (prev + 1)
      }
    })
    console.log('loop 이후',swiperCurrentPosition)

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
        <button onClick={() => click('minus')}> - </button>
        <button onClick={() => click('plus')}> + </button>
      </Wrapper>
    </>
  )
}
