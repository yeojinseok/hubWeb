import { useQuery } from 'react-query'
import { fetchScene } from './Api'
import SlideScreenContainer from './styles/SlideScreenContainer'

export default function Home() {
  const { isLoading: loading, data: scenes } = useQuery('Scene', fetchScene)
  return (
    <>
      {loading ? (
        <h1> loading... </h1>
      ) : (
        <SlideScreenContainer scenes={scenes.entries}></SlideScreenContainer>
      )}
    </>
  )
}
