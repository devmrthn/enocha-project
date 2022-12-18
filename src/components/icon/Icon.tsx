import React from 'react'

interface PropsType {
  flip?: boolean
  source?: string
  color?: string
  w?: string
  h?: string
}


function Icon(props: PropsType) {
  return (
    <>
      <img src={props.source} className={`w-${props.w} h-${props.h} ${props.flip ? 'Icon__flip' : ''} flex-grow-0`} style={props.color ? {color: props.color} : undefined } alt="" />
        
    </>
  )
}

export default Icon