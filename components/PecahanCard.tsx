import React from 'react'

const PecahanCard = ({digit}: {digit: number}) => {
    // Terima props berupa angka
  return (
    <div className='border-2 border-gray-400 p-4 rounded-md mt-2 mb-2'>{digit}</div>
  )
}

export default PecahanCard