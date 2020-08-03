import React, {useState} from 'react'
import {Card, Modal, Image} from 'react-bootstrap'

const Img = ({i}) => {
  const [shadow, setShadow] = useState('-sm')
  const [zoom, setZoom] = useState(false)
  return (
    <div>
      <Card className='border-0 m-3' style={{background: 'unset'}}>
        <Card.Img 
          src={require(`../imgs/img (${i + 1}).JPG`)} 
          style={{transition: 'all .4s', cursor: 'pointer', border: '8px solid white'}}
          className={'my-auto  shadow' + shadow}
          onMouseOver={() => setShadow('')}
          onMouseOut={() => setShadow('-sm')}
          onClick={() => setZoom(true)}
        />
      </Card>
      <Modal centered show={zoom} onHide={() => setZoom(false)}>
          <Image fluid src={require(`../imgs/img (${i + 1}).JPG`)} />
      </Modal>
    </div>
  )
}

export default Img