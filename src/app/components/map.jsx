import React from 'react'
import gmap from '../photos/gmap-logo.png'

export default function GoogleMap() {
  return (
    <div className='map-div'>
        <iframe className='map-main'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29250838.180657715!2d61.02451656116589!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e1!3m2!1sen!2sin!4v1738262884600!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className='map-div-right'>
          <p className='map-div-right-p1'>Feature <span>Destinations</span>  on the Map </p>
          <p className='map-div-right-p2'>Our theme lets you integrate Google Maps on any of your pages. Not only this, but the maps are fully customizable so you can use the style that fits you the most! You can also easily pin the destinations from your posts right on the map!</p>
         <a href='https://www.google.com/maps/@16.0373246,72.6421044,3428321m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D'> <img src={gmap.src} alt='gmap' className='gogle-map' /></a>
        </div>

    </div>
  )
}
