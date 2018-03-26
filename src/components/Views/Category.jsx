import React from 'react'

export const CategoryList = (props) => (
  props.categories.map((categoryProps) =>
    <Category name={categoryProps.name} active={categoryProps.active} />
  )
)

export const Category = (props) => {
  let classes = ['nav-link']
  if (props.active) {
    classes.push('active')
  }
  classes = classes.join(' ')

  return (<li class='nav-item'>
    <a class={classes} href='#'>
      {props.name}
    </a>
  </li>)
}

export default Category
