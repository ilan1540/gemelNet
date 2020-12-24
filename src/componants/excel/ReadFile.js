import React from 'react'
import{PageHeader} from '../shared/PageHeader'
import { InputFile } from './InputFile'
import { SaveToFirestore } from './SaveToFirestore'



export const ReadFile = () => {
 
  return (
    <div className="container mt-2">
      <PageHeader word1="Read" word2="Excel File" />
         <InputFile />
      <SaveToFirestore />
    </div>
  )
}
