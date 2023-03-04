import React from 'react'

/// Rajouter à la fin react vanilla (sans plugin)

const Footer = () => {
  return (
    <footer className='text-center'>
      <a href='#about'>
        <span className='fas fa-chevron-up'></span>
      </a>
      <h5>
        Based on the design of Udemy course website (
        <a
          href='https://apprendre-a-coder.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          apprendre-a-coder.com
        </a>
        )
      </h5>
    </footer>
  )
}

export default React.memo(Footer)
