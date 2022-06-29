import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useMatch, Link } from 'react-router-dom'

const Nav = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 45px;
  font-size: 16px;
  color: ${props => props.theme.grey.lightGrey};
  background-color: ${props => props.theme.grey.darkGrey};
  z-index: 10;
`

const Column = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  a {
    color: ${props => props.theme.grey.lightGrey};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.isactive && props.theme.bgColor};
  }
  a:hover {
    color: ${props => props.theme.bgColor};
  }
`

const hoverVariants = {
  hover: {
    scale: 1.1,
  },
}

function NavBar() {
  const mypageMatch = useMatch('/mypage')
  const homeMatch = useMatch('/')

  return (
    <>
      <Nav>
        <Column
          variants={hoverVariants}
          whileHover="hover"
          isactive={homeMatch}
        >
          <Link to="/">HOME</Link>
        </Column>

        <Column
          variants={hoverVariants}
          whileHover="hover"
          isactive={mypageMatch}
        >
          <Link to="/mypage">Mypage</Link>
        </Column>
      </Nav>
    </>
  )
}

export default NavBar
