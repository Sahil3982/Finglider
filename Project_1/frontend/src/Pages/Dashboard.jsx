import React from 'react'
import Views from '../Components/Views'
import Shares from '../Components/Shares'
import Comments from '../Components/Comments'
import Suscribe from '../Components/Suscribe'
const Dashboard = () => {
  return (
    <div className='text-center m-10 text-3xl font-bold'>
            <Views />
            <Comments />
            <Shares />
            <Suscribe />

    </div>
  )
}

export default Dashboard
