import styled from 'styled-components'

const Wrapper = styled.div`
  /* width:100%; */
  min-width: 1200px;
  margin: 0 auto;
  background-color: red;
  display: flex;
`

export default function MainSecction({ children }) {
  return <Wrapper> {children}</Wrapper>
}
