import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="py-1 bg-dark">
        <p className="text-center text-white mt-1">
          JVLcart - {new Date().getFullYear()}, All Rights Reserved
        </p>
      </footer>
    </div>
  )
}

export default Footer