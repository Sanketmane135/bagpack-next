import React from 'react'
import { honeymoonTerms } from '../data/honeyTerms'

export default function Terms() {
  return (

    <div className='terms-main'>
        <h5 className='terms-heading'>Terms & Conditions</h5>
        <div className='terms-bottom'>
            {
              honeymoonTerms.map((v,i)=>{
                return(
                  <div className='terms-bottom-div-inner'>
                    <div className='terms-title-div'>
                      <div className='terms-title-div-left'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CCCCCC"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
                          <p className='terms-bottom-p1'>{v.title}</p>
                      </div>
                      
                    </div>
                    <div  className='terms-bottom-main'>
                  {
                    v.description.map((v1,i)=>{
                      return(
                        
                        <p className='terms-bottom-p2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m280-240-56-56 184-184-184-184 56-56 240 240-240 240Zm360 0v-480h80v480h-80Z"/></svg>
                          {v1}
                        </p>
                      )
                    })
                  }
                  </div >
                 
                  </div>
                )
              })
            }
            
        </div>
    </div>

    
  )
}
