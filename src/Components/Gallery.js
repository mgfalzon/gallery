import React from 'react' 
import {Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Img from './Img'
import {numImgs, rows, FullPages} from './Utils'

/* 
View determines Row View or Col View
  View = true => Images are viewed in columns
  View = false => Images are viewed in Rows
*/
const view = true

/*
  Splits imgs array(all images) into grids of equal size for every page
  DO NOT TOUCH THIS METHOD... it is more complicated than it looks
*/
const PageSplit = (imgsPerPage, view) => {
  let imgs =  Array(numImgs).fill().map((item, i) => <Img i={i} />)
  let pages = []
  let curr = 0

  for(let i = 0; i < FullPages(imgsPerPage); i++) 
    pages.push(imgs.slice(curr, curr += imgsPerPage))
  pages.push(imgs.slice(curr, curr + (numImgs % imgsPerPage)))

  // alt view
  if (view) {
    let colNum = imgsPerPage / rows
    pages = pages.map(row => {
      let cols = []
      let idx = 0
      for(let i = 0; i < colNum; i++)
        cols.push(<Col>{row.slice(idx, idx += rows)}</Col>)
      return cols
    })
  }

  return pages
}

const Pagination = ({p}) => {
  let a = new Array(p)
  for(let i = 0; i < p; i++) 
    a[i] = i + 1
  return (
  <div className='d-flex justify-content-center py-4'>
    <div className='px-3 py-2 bg-white shadow-sm rounded-pill'>
      {a.map(i =>
      <NavLink  exact to={'/' + (i === 1 ? '' : i)} onClick={() => window.scrollTo(0, 0)}>
        <small className='px-3'>{i}</small>
      </NavLink>
      )}
    </div>
  </div>
  )
}

// Gallery puts the pages together and links their routes
const Gallery = ({cols}) => (
  <div className='pt-4 pb-2' style={{padding: '4rem'}}>
    <Router>
      <Switch>
        {
          PageSplit(cols * rows, view).map((item, i) => (
            i === 0 ? 
              <Route path='/' exact>
                <Row md={view ? 'auto' : cols}>{item}</Row>
              </Route> :
              <Route path={'/' + i} exact>
                <Row md={view ? 'auto' : cols}>{item}</Row>
              </Route>
          ))
        }
      </Switch>
      <Pagination p={FullPages(cols * rows)}/>
    </Router>
  </div>
)

export default Gallery