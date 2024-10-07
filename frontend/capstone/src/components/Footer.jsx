import React from 'react'

// adding a footer with the contact, copyrite, and privacy links
function Footer() {
  return (
    
    <>
    
    <footer className="footerContainer">
    <div className="footerItem"> <small>© Copyright 2024, Pennsylvania Senior Discounts, L Peckyno</small> </div>
    <div className="footerItem"><a href="mailto:laura.peckyno@gmail.com">Contact</a></div>
    <div className="footerItem"><a href="">Privacy</a></div>
    <div className="footerItem"><img src="/logocans.png" width="100px"  alt=" a drawing of an elderly man holding a billfold and standing in front of a keystone" /></div>
    
    
    
    </footer>

    
    </>
    
  )
}

export default Footer