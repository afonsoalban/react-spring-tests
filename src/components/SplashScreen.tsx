import React, { useState } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
  useSprings,
  useTrail,
} from '@react-spring/web'

import styles from '../styles.module.css'
import logo from '../assets/logo.png'

export default function SplashScreen() {
  const [open, set] = useState(false);
  const greetings = "Good morning, Afonso".split(' ').map(item => item + ' ');

  const [splashSpring, splashSpringApi] = useSpring(() => ({
    from: {
      height: '100%'
    }
  }));
  
  const [logoSpring, logoSpringApi] = useSpring(() => ({
    delay: 500,
    from: {
      marginBottom: 30,
      height: 100,
      scale: 0
    },
    to: {
      scale: 1
    }
  }))
  
  const greetingTrail = useTrail(greetings.length, {
    delay: 1000,
    from: { opacity: 0, height: 20},
    to: { opacity: 1 },
  });

  const closeSplash = () => {
    splashSpringApi.start({
      to: {
        height: '10%'
      }
    });

    logoSpringApi.start({
      to: {
        height: 40,
        marginBottom: 0
      }
    });

    // greetingTrail.
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles['mobileWrapper']}>
        <animated.div style={splashSpring} className={styles.splash} onClick={closeSplash}>
          <animated.div style={logoSpring}>
            <img src={logo} />
          </animated.div>
          <p>
            {greetingTrail.map((props, index) => (
              <animated.span style={props}>{greetings[index]}</animated.span>
            ))}
          </p>
        </animated.div>
        <div className={styles.content}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quam, veniam cumque eos repellendus sit? Accusamus vitae sit voluptates illo impedit aut? Maxime sed quam, corporis deleniti maiores repellendus neque.</p>
          <p>Praesentium perspiciatis reiciendis provident adipisci temporibus ratione alias ducimus aut totam amet. Facilis temporibus cum error ipsa libero possimus commodi sint, doloribus corrupti quasi quae blanditiis animi, molestiae hic ratione.</p>
          <p>Distinctio, magnam quasi. Sit delectus rem nisi, libero aliquam saepe dignissimos architecto at quae error, veniam mollitia voluptas nulla iusto sapiente temporibus tenetur impedit, ab doloribus! Placeat optio dicta architecto!</p>
          <p>Consectetur tempora cum nostrum accusantium iusto, natus nesciunt nulla modi molestias at esse quas impedit laboriosam sit consequuntur corrupti! Error esse nemo hic officiis fugiat pariatur aliquam asperiores, sed animi.</p>
        </div>
      </div>
    </div>
  )
}
