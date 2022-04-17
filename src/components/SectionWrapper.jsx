import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'
import {Button} from './index'

const SectionWrapper = ({title, description, showBtn, mockupImg, banner}) => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>
      <div className={`flex items-center ${styles.boxClass} w-11/12 sm:w-full minmd:w3/4`}>
        <div className={`${styles.descDiv} fadeLeftMini`}>
        <h1 className={`${styles.h1Text}`}>{title}</h1>
        <p className={`${styles.descriptionText}`}>{description}</p>
        {showBtn && (
          <Button 
            assetUrl={assets.expo}
            link="https://expo.dev/@rob.kedzior/NFTMarketplace?serviceType=classic&distribution=expo-go"
          />
        )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-9`}>
          <img src={mockupImg} alt="mockup" className={styles.sectionImg}/>
      </div>
      </div>
    </div>
  )
}

export default SectionWrapper