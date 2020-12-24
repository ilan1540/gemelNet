import React from 'react'
import { GetDirList } from '../fsFile/GetDirList'
import { InputXmlFlle } from './InputXmlFile'

export const ReadXmlFile = () => {
  return (
    <div>
      <InputXmlFlle />
      <GetDirList />
    </div>
  )
}
