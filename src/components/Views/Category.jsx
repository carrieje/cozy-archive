import React from 'react'

export const CategoryList = (props) => (
  props.categories.map((categoryProps) =>
    <Category name={categoryProps.name} />
  )
)

export const Category = (props) => (
  <div class='category-tile'>
    <span class='category-name'>
      {props.name}
    </span>
  </div>
)

export default Category
