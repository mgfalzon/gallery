import React, {useState} from 'react' 
import {Container} from 'react-bootstrap'
import Settings from './Components/Settings'
import Gallery from './Components/Gallery'
import {bg} from './Components/Utils'

const Header = () => (
  <div style={{paddingLeft: '5rem', paddingTop: '4rem'}}>
    <p className='display-3 font-weight-bolder text-uppercase'>Gallery</p>
    <p className='ml-4 text-muted'>Joshua Malekan</p>
  </div>
)

const App = () => {
  const [cols, setCols] = useState(4)
  return (
    <Container fluid style={{backgroundColor: bg}}>
      <Settings 
        small={() => setCols(5)}
        medium={() => setCols(4)}
        large={() => setCols(3)}
      />
      <Header />
      <Gallery cols={cols}/>
    </Container>
    )
}

export default App