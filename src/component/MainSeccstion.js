import styled from 'styled-components'

const Wrapper = styled.div`
  /* width:100%; */
  width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 100px 30px;
`

export default function MainSecction({ children }) {
  return <Wrapper> {children}</Wrapper>
}
