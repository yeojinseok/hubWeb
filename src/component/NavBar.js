import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useMatch, Link } from 'react-router-dom'

const Nav = styled(motion.div)`
  /* padding: 0 50px; */
  width: 100%;
  min-height: 45px;
  font-size: 16px;
  color: ${props => props.theme.grey.lightGrey};
  background-color: ${props => props.theme.grey.darkGrey};
  z-index: 10;
`

const Column = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

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
const ColumnWrapper = styled.div`
  padding: 0 30px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
`
const ColumnContainer = styled.div`
  display: flex;
  div {
    margin-right: 30px;
  }
`

const hoverVariants = {
  hover: {
    scale: 1.1,
  },
}

function NavBar() {
  const mypageMatch = useMatch('/mypage/:info')
  const spaceMatch = useMatch('/space/:info')
  const homeMatch = useMatch('/')

  return (
    <>
      <Nav>
        <ColumnWrapper>
          <ColumnContainer>
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
              isactive={spaceMatch}
            >
              <Link to="/space/myspace">Space</Link>
            </Column>
            <Column
              variants={hoverVariants}
              whileHover="hover"
              isactive={mypageMatch}
            >
              <Link to="/mypage">Mypage</Link>
            </Column>
          </ColumnContainer>

          <ColumnContainer>
            <Column>login</Column>
          </ColumnContainer>
        </ColumnWrapper>
      </Nav>
    </>
  )
}

export default NavBar
