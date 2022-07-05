import React from 'react'
import AlertDismissible from './AlertDismissible'
import ButtonExample from './ButtonExample'
import CarouselExample from './CarouselExample'
import GridExample from './GridExample'
import MyModalWithGrid from './MyModalWithGrid'

export default function ReactBootstrapExample() {
  return (
    <div>
        <MyModalWithGrid/>
        <CarouselExample/>
        <GridExample/>
        <ButtonExample/>
        <br/>
        <br/>
        <AlertDismissible/>
    </div>
  )
}
