import { Deck } from './slides/Deck'
import { meta, slides } from './content/deck'

function App() {
  return <Deck meta={meta} slides={slides} />
}

export default App
