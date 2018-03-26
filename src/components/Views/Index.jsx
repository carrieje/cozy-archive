import React from 'react'
import Category from './Category'

export const Index = () => (
  <ul class='nav nav-tabs'>
    <Category name='Assurance' active='true' />
    <Category name='Véhicule' />
    <Category name='Banque' />
    <Category name='Famille – Scolarité' />
    <Category name='Logement' />
    <Category name='Impôts et Taxes' />
    <Category name='Travail, Chômage, Retraite' />
    <Category name='Santé' />
  </ul>
)

export default Index
