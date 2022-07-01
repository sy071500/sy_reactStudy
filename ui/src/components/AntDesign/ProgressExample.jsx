import React from 'react'
import { Progress } from 'antd';

export default function ProgressExample() {
  return (
    <>
    <Progress strokeLinecap="butt" percent={75} />
    <Progress strokeLinecap="butt" type="circle" percent={75} />
    <Progress strokeLinecap="butt" type="dashboard" percent={75} trailColor="red" status="success"/>
  </>
  )
}
