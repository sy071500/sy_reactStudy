import React from 'react'
import TableExample from './TableExample'
import FormExample from './FormExample'
import ModalExample from './ModalExample'
import ProgressExample from './ProgressExample'
//import GetStart from './GetStart'
//import IconExample from './IconExample'
//import LayoutExample from './LayoutExample'
//import TyporgraphyExample from './TyporgraphyExample'

export default function AntDesignExample() {
  return (
    <div>
      <ProgressExample/>
      <ModalExample/>
      <TableExample/>
      <FormExample/>
      {/* <LayoutExample/> */}
        {/* <TyporgraphyExample/>
        <IconExample/>
        <GetStart/> */}
    </div>
  )
}
