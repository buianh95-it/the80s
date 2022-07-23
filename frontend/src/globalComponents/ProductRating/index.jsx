import React from 'react'

const ProductRating = ({ rating }) => {
  return (
    <>
      <i
        style={{ color: 'orange' }}
        className={
          rating <= 0.4
            ? 'far fa-star'
            : rating <= 0.9
            ? 'fa-solid fa-star-half-stroke'
            : 'fa-solid fa-star'
        }
      ></i>
      <i
        style={{ color: 'orange' }}
        className={
          rating <= 1.4
            ? 'far fa-star'
            : rating <= 1.9
            ? 'fa-solid fa-star-half-stroke'
            : 'fa-solid fa-star'
        }
      ></i>
      <i
        style={{ color: 'orange' }}
        className={
          rating <= 2.4
            ? 'far fa-star'
            : rating <= 2.9
            ? 'fa-solid fa-star-half-stroke'
            : 'fa-solid fa-star'
        }
      ></i>
      <i
        style={{ color: 'orange' }}
        className={
          rating <= 3.4
            ? 'far fa-star'
            : rating <= 3.9
            ? 'fa-solid fa-star-half-stroke'
            : 'fa-solid fa-star'
        }
      ></i>
      <i
        style={{ color: 'orange' }}
        className={
          rating <= 4.4
            ? 'far fa-star'
            : rating <= 4.9
            ? 'fa-solid fa-star-half-stroke'
            : 'fa-solid fa-star'
        }
      ></i>
    </>
  )
}

export default ProductRating
