import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { FaChevronLeft ,FaChevronRight } from "react-icons/fa";
import "./Navbar.css"
function Navbar() {
  return (
    <div className='nav-link'>
        <div className="nav-leftside">
            <Button> Today</Button>
            <Button><FaChevronLeft /></Button>
            <Button><FaChevronRight /></Button>

        </div>
        <div className="nav-rightside">
        <ButtonGroup >
        <Button>day 1</Button>
        <Button>day 2</Button>
        <Button>1st week</Button>
        <Button>2nd week</Button>
        <Button>1 month</Button>
      </ButtonGroup>

        </div>
    </div>
  )
}

export default Navbar