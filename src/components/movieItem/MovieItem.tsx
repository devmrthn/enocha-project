import React from 'react'
import './MovieItem.scss'

interface PropsType {
    width?: number
    height?: number
    source?: string
    id?: string
    number?: number
    display?: string
    tabItem?: boolean
}

function MovieItem(props: PropsType) {
  return (
    <div className={`movieItem__div ${props.tabItem ? 'movieItem__div__below' : ''}` }style={{width:props.width,height:props.height,backgroundImage: `url(${props.source})`,display: `${props.display == 'ib' ? 'inline-block' : 'block'}`}}>
        
        {props.number && <span id='bigNumber'>{props.number}</span>}
        
    </div>
  )
}

export default MovieItem