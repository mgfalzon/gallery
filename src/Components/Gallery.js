import React from 'react' 
import {Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Img from './Img'
import {numImgs, rows, FullPages} from './Utils'
import FadeIn from 'react-fade-in';

/*
  Splits imgs array(all images) into grids of equal size for every page
  DO NOT TOUCH THIS METHOD... it is more complicated than it looks
*/
const PageSplit = imgsPerPage => {
  let imgs =  Array(numImgs).fill().map((item, i) => <Img i={i} />)
  let pages = []
  let curr = 0

  // define pages
  for(let i = 0; i < FullPages(imgsPerPage); i++) 
    pages.push(imgs.slice(curr, curr += imgsPerPage))
  pages.push(imgs.slice(curr, curr + (numImgs % imgsPerPage)))

  // define columns for each page
  let colNum = imgsPerPage / rows
  pages = pages.map(row => {
    let cols = []
    let idx = 0
    for(let i = 0; i < colNum; i++)
      cols.push(<Col>{row.slice(idx, idx += rows)}</Col>)
    return cols
  })

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
      <NavLink  exact to={'/' + (i === 1 ? '' : i)}>
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
    <Router forceRefresh>
      <Switch>
        {
          PageSplit(cols * rows).map((item, i) => (
            i === 0 ? 
              <Route path='/' exact>
                <FadeIn delay={250}>
                  <Row>{item}</Row>
                </FadeIn>
              </Route> :
              <Route path={'/' + i} exact>
                <FadeIn delay={250}>
                  <Row>{item}</Row>
                </FadeIn>
              </Route>
          ))
        }
      </Switch>
      <Pagination p={FullPages(cols * rows)}/>
    </Router>
  </div>
)

export default Gallery