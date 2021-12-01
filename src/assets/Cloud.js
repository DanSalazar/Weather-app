import React from 'react'
import { palette } from '../GlobalStyle'

function CloudIcon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={16}
      height={16}
      fill='currentColor'
      className='prefix__bi prefix__bi-cloudy'
      viewBox='0 0 16 16'
      color={palette.blue}
      {...props}>
      <path d='M13.405 8.527a5.001 5.001 0 00-9.499-1.004A3.5 3.5 0 103.5 14.5H13a3 3 0 00.405-5.973zM8.5 5.5a4 4 0 013.976 3.555.5.5 0 00.5.445H13a2 2 0 01-.001 4H3.5a2.5 2.5 0 11.605-4.926.5.5 0 00.596-.329A4.002 4.002 0 018.5 5.5z' />
    </svg>
  )
}

export default CloudIcon
