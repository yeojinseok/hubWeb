import styled from 'styled-components'
import { motion,AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// const Wrapper = styled(motion.div)`
//   width:100%;
//   height:300px;
//   /* overflow:hidden; */
// `
const SwiperContainer=styled.div`
   /* -ms-overflow-style: none; IE and Edge */
  /* scrollbar-width: none; Firefox */
  /* overflow-y: scroll; */
  /* &::-webkit-scrollbar {
    display: none;
  } */

  transition: transform 0.5s ;
`
const SwiperInner=styled.div`
  width:100vw;
  display:flex;
  div{
    width:100%;
  }
`
const Item = styled.div`
height:100px;
  background-color: red ;
`
export default function SlideScreenContainer({}) {
  const swiperRef = useRef(null)
  const [swiperCurrentPosition, setSwiperCurrentPosition]=useState(0);
  const [loop,setLoop] = useState();

  const data = [1,2,3,4,5,6,7]

  useEffect(()=>{
    swiperRef.current.style.width = data?`${data.length}00vw`:'0';
  },[data])

  // useEffect(()=>{
  //   if(!data) return;
  //   const swiperLoop = setTimeout(()=>{
  //     setSwiperCurrentPosition(prev=>{
  //       if(prev<data.length-1){
  //         return prev +1;
  //       }else return 0;
  //     });
  //   },3000);
  //   setLoop(swiperLoop);
  //   return clearTimeout(loop)
  // },[
  //   data,
  //   setSwiperCurrentPosition,
  //   swiperCurrentPosition
  // ]);
  useEffect(()=>{
    swiperRef.current.style.transform = swiperCurrentPosition ===0 ? `translate(000vw)`:`translate(-${swiperCurrentPosition}00vw)`
  },[swiperCurrentPosition])

  return (
    <>

      <SwiperContainer ref={swiperRef}>
        <SwiperInner>
          {data.map(num=>
            <Item key={num}>{num}</Item>
          )}
        </SwiperInner>
      </SwiperContainer>

    </>
  )
}
