import React from 'react'
import { Outlet, Link } from "react-router-dom";


interface PropsType {
  title: string
  bookmark?: boolean
}

function BackToHome(props: PropsType) {
  return (
    <div className='flex justify-between items-center'>

      <Link to='/home'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6809 17.5C12.515 17.5 12.3492 17.4394 12.2182 17.3097L6.52723 11.6687C5.60201 10.7516 5.60201 9.24621 6.52723 8.32913L12.2182 2.68818C12.4714 2.43727 12.8903 2.43727 13.1435 2.68818C13.3966 2.93908 13.3966 3.35436 13.1435 3.60526L7.45246 9.24622C7.03349 9.6615 7.03349 10.3363 7.45246 10.7516L13.1435 16.3926C13.3966 16.6435 13.3966 17.0588 13.1435 17.3097C13.0125 17.4308 12.8467 17.5 12.6809 17.5Z" fill="white" />
        </svg>
      </Link>

      <p className='text-white text-sm'>{props.title}</p>


      {props.bookmark && <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 18.9583C5.05835 18.9583 1.04169 14.9417 1.04169 9.99999C1.04169 5.05832 5.05835 1.04166 10 1.04166C14.9417 1.04166 18.9584 5.05832 18.9584 9.99999C18.9584 14.9417 14.9417 18.9583 10 18.9583ZM10 2.29166C5.75002 2.29166 2.29169 5.74999 2.29169 9.99999C2.29169 14.25 5.75002 17.7083 10 17.7083C14.25 17.7083 17.7084 14.25 17.7084 9.99999C17.7084 5.74999 14.25 2.29166 10 2.29166Z" fill="white" />
        <path d="M10 11.4583C9.65833 11.4583 9.375 11.175 9.375 10.8333V6.66666C9.375 6.32499 9.65833 6.04166 10 6.04166C10.3417 6.04166 10.625 6.32499 10.625 6.66666V10.8333C10.625 11.175 10.3417 11.4583 10 11.4583Z" fill="white" />
        <path d="M10 14.1667C9.89169 14.1667 9.78335 14.1417 9.68335 14.1C9.58335 14.0583 9.49169 14 9.40835 13.925C9.33335 13.8417 9.27502 13.7583 9.23335 13.65C9.19169 13.55 9.16669 13.4417 9.16669 13.3333C9.16669 13.225 9.19169 13.1167 9.23335 13.0167C9.27502 12.9167 9.33335 12.825 9.40835 12.7417C9.49169 12.6667 9.58335 12.6083 9.68335 12.5667C9.88335 12.4833 10.1167 12.4833 10.3167 12.5667C10.4167 12.6083 10.5084 12.6667 10.5917 12.7417C10.6667 12.825 10.725 12.9167 10.7667 13.0167C10.8084 13.1167 10.8334 13.225 10.8334 13.3333C10.8334 13.4417 10.8084 13.55 10.7667 13.65C10.725 13.7583 10.6667 13.8417 10.5917 13.925C10.5084 14 10.4167 14.0583 10.3167 14.1C10.2167 14.1417 10.1084 14.1667 10 14.1667Z" fill="white" />
      </svg>}

      {!(props.bookmark) && <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.00803e-07 2.99973V23.2497C-9.50907e-05 23.38 0.0337268 23.508 0.0981369 23.6212C0.162547 23.7344 0.255325 23.8289 0.367338 23.8953C0.47935 23.9618 0.606737 23.9979 0.736957 24.0002C0.867178 24.0024 0.995744 23.9707 1.11 23.9082L9 19.6032L16.89 23.9082C17.0043 23.9707 17.1328 24.0024 17.263 24.0002C17.3933 23.9979 17.5207 23.9618 17.6327 23.8953C17.7447 23.8289 17.8375 23.7344 17.9019 23.6212C17.9663 23.508 18.0001 23.38 18 23.2497V2.99973C18 2.20408 17.6839 1.44101 17.1213 0.878405C16.5587 0.315796 15.7956 -0.000274658 15 -0.000274658L3 -0.000274658C2.20435 -0.000274658 1.44129 0.315796 0.87868 0.878405C0.316071 1.44101 2.00803e-07 2.20408 2.00803e-07 2.99973V2.99973Z" fill="#EEEEEE" />
      </svg>}


    </div>
  )
}

export default BackToHome