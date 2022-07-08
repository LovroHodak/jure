import React from 'react'
import {tw} from '../tailwind'

export default function Banner() {
  return (
    <ImageWrapper>
        {/* <Image src='https://bratinovgin.com/wp-content/uploads/2019/12/brina-venera.jpg'></Image> */}
        <p className='text-white'>icon</p>
        <p className='text-white'>icon</p>
    </ImageWrapper>
  )
}

const ImageWrapper = tw.section`
bg-[url('https://bratinovgin.com/wp-content/uploads/2019/12/brina-venera.jpg')] h-96`

const Image = tw.img`
`