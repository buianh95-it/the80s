import React from 'react'
import VideoShowcase from './homeComponents/VideoShowcase'
import ShowcaseGallery from './homeComponents/ShowcaseGallery'
import VintageLookShowcase from './homeComponents/VintageLookShowcase'
import NewArrivalsList from '../../globalComponents/NewArrivalsList'
import HoodieJacketsList from '../../globalComponents/HoodieJacketsList'
import JeansList from '../../globalComponents/JeansList'
import { BackTop, Button } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
const HomePage = ({ scrolled }) => {
  return (
    <main className={scrolled ? 'paddingWhenFixedNav' : ''} style={{ marginTop: 30 }}>
      {/* <SliderShowcase /> */}
      <VideoShowcase />
      <ShowcaseGallery />
      <NewArrivalsList />
      <VintageLookShowcase />
      <HoodieJacketsList />
      <div className='section__hr'></div>
      <JeansList />
      <BackTop>
        <Button
          type='text'
          style={{ color: '#333' }}
          size='large'
          icon={<ArrowUpOutlined />}
        ></Button>
      </BackTop>
    </main>
  )
}

export default HomePage
