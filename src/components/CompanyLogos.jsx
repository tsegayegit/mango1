import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
       <h5 className='tagline mb-6 text-center text-n-1/50'>
        Helping people create beautifull content
        </h5>
        <ul className='flex'>
             {companyLogos.map((logo,index)=>(
                <li className='flex items-center justify-center flex-1 height-[8.5rem]' key={index}>
                    <img src={logo} alt="logo" 
                    height={134} width={68}/>
                </li>
             ))}
        </ul>
    </div>
  )
}

export default CompanyLogos