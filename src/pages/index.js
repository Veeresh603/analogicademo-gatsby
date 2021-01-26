import React from 'react'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>analogicademo</title>
        <meta property="og:title" content="analogicademo" />
      </Helmet>
      <div className={styles.menu}>
        <img
          src="/playground_assets/ana-1100h.png"
          className={` ${projectStyles.thqImage} ${styles.analogoimage} `}
        />
        <div className={styles.menucontainer}>
          <span className={styles.home}>Home</span>
          <span className={styles.training}>Training</span>
          <span className={styles.services}>Services</span>
          <span className={styles.blog}>Blog</span>
          <span className={styles.profile}>Profile</span>
          <span className={styles.text}>Contact Us</span>
        </div>
      </div>
      <div className={styles.hero}>
        <img
          src="/playground_assets/anagirl.svg"
          className={` ${projectStyles.thqImage} ${styles.anagirlimage} `}
        />
        <h2 className={` ${projectStyles.thqHeading2} ${styles.text01} `}>
          Letâs get you from If-Else to What else!
        </h2>
      </div>
      <div className={styles.secondcontainer}>
        <div className={styles.container01}>
          <div className={styles.container02}>
            <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon} `}>
              <title>access_time, query_builder, schedule</title>
              <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
          </div>
          <div className={styles.container03}>
            <span className={styles.text02}>We build</span>
            <span className={styles.text03}>
              Lorem ipsum some content goes here on hover the list shows up in the bottomÂ Lorem
              ipsum some content goes here on hover the list shows up in the bottom
            </span>
          </div>
          <div className={styles.container04}>
            <span className={styles.text04}>Read more</span>
            <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon1} `}>
              <title>arrow_forward</title>
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </div>
        </div>
        <div className={styles.maincontainer}>
          <div className={styles.container05}>
            <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon2} `}>
              <title>access_time, query_builder, schedule</title>
              <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
          </div>
          <div className={styles.container06}>
            <span className={styles.text05}>We build</span>
            <span className={styles.text06}>
              Lorem ipsum some content goes here on hover the list shows up in the bottomÂ Lorem
              ipsum some content goes here on hover the list shows up in the bottom
            </span>
          </div>
          <div className={styles.container07}>
            <span className={styles.text07}>Read more</span>
            <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon3} `}>
              <title>arrow_forward</title>
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </div>
        </div>
        <div className={styles.container08}>
          <div className={styles.container09}>
            <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon4} `}>
              <title>access_time, query_builder, schedule</title>
              <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
          </div>
          <div className={styles.container10}>
            <span className={styles.text08}>We build</span>
            <p className={styles.text09}>
              Lorem ipsum some content goes here on hover the list shows up in the bottomÂ Lorem
              ipsum some content goes here on hover the list shows up in the bottom
            </p>
          </div>
          <div className={styles.container11}>
            <span className={styles.text10}>Read more</span>
            <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon5} `}>
              <title>arrow_forward</title>
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
