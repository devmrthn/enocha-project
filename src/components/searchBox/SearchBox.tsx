import React from 'react'
import Icon from '../icon/Icon'
import SearchLogo from '../../assets/Search.svg'
import './SearchBox.scss'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

interface PropsType {
  home?: boolean
  changeText?: (text: string) => void
}

function SearchBox(props : PropsType) {

  [text, setText] = useState('')

  return (
    <div className='searchBox__div'>
      <input type="text" className='searchBox__input bg-transparent flex-grow' placeholder='Search' onChange={ !props.home && props.changeText}/>
      <Icon flip={false} color={'#67686D'} source={SearchLogo} w={'4'} h={'4'} />
      
    </div>
  )
}

export default SearchBox