import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import SimpleInput from 'components/SimpleInput'
import { movoLogo, conairLogo, tappingLogo, gotennaLogo, largeLogo } from 'assets'
import Footer from 'components/Footer'
import { newsletterSubscription } from 'api'
import './style.scss'

const Landing = () => {
  const [email, setEmail] = useState('')

  const handleChange = ({ target }) => setEmail(target.value)

  const handleSubmit = () => {
    let bodyFormData = new FormData()

    bodyFormData.append('email', email)

    newsletterSubscription(bodyFormData, setEmail)
  }

  const appsList = [
    { href: 'https://movo.me', title: 'Movo', img: movoLogo },
    {
      href: 'https://itunes.apple.com/us/app/ww-body-analysis-scale-tracker/id1157071126?mt=',
      title: 'Conair WeightWatchers',
      img: conairLogo,
    },
    {
      href: 'https://itunes.apple.com/us/app/the-tapping-solution/id1419815487?mt=',
      title: 'Tapping Solution',
      img: tappingLogo,
    },
    { href: 'https://www.gotenna.com', title: 'goTenna', img: gotennaLogo },
  ]

  const renderAppList = () => (
    <div className="apps-div">
      {appsList.map((app) => (
        <a href={app.href} className="apps-a" key={app.title}>
          <img src={app.img} className="apps-img" alt={app.title} />
          <h5 className="apps-h5"> {app.title} </h5>
        </a>
      ))}
    </div>
  )

  return (
    <div>
      <div className="container-landing">
        <Link to="login" className="login-link">
          {' '}
          Login{' '}
        </Link>

        <img className="logo-large" src={largeLogo} alt="large-logo" />

        <p>app Design & Development Agency</p>
      </div>

      <div className="who-section">
        <div className="inner">
          <h2 className="heading"> who we are </h2>
        </div>

        <div className="para-outer">
          <p className="para-text">
            Rapptr Labs is a Jersey City-based app development firm that works withFortune 500 brand
            s, leading retailers, funded startups and more to craft digital products and strategies
            that solve business problems and drive measurable results
          </p>

          <p className="para-text">
            We&apos;re part of your team. That means working together to meet the business challenge
            s you face. From iOS and Android to emerging technologies like VR, AR and wearables, we
            do whatever it takes to help you thrive in today&apos;s - and tomorrow&apos;s - digital
            ecosystem.
          </p>
        </div>
      </div>

      <div className="apps-main">
        <h2 className="apps-h2"> our apps </h2>

        {renderAppList()}
      </div>

      <div className="subscribe-main">
        <h2> subscribe to newsletter </h2>

        <div className="main">
          <div className="subscriber-inner">
            <SimpleInput
              styles="subscriber-input"
              name="password"
              label="Your email"
              type="email"
              handleChange={handleChange}
              value={email}
            />
            <button className="subscriber-button" onClick={handleSubmit}>
              {' '}
              subscribe{' '}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Landing
