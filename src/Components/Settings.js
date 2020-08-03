import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {FaCog} from 'react-icons/fa'

const Settings = props => (
    <Dropdown className='d-flex justify-content-end'>
        <Dropdown.Toggle 
            style={{color: 'unset', backgroundColor: 'unset', border: 'unset'}}
            className='position-absolute mt-2'
        >
            <FaCog style={{fontSize: 18, cursor: 'pointer', color: 'black'}} />
        </Dropdown.Toggle>
        <Dropdown.Menu className='text-center'>
            <Dropdown.Item onClick={props.small} className='small'>Small</Dropdown.Item>
            <Dropdown.Item onClick={props.medium} className='small'>Medium</Dropdown.Item>
            <Dropdown.Item onClick={props.large} className='small'>Large</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
)

export default Settings