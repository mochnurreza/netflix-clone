import React, { useState } from 'react'
import Signup from '../Signup/Signup'
import { motion } from 'framer-motion';
import './login.css'
import { animationButton, animationFour, animationLogo, animationOne, animationThree, animationTwo, loginscreenAnimation, loginscreenTransition, transitionButton, transitionFour, transitionLogo, transitionOne, transitionThree, transitionTwo } from '../../Animations/LoginAnimate';

function Login() {
    const [signIn, setSignIn] = useState(false)


    return (
        <motion.div
        initial='out'
        animate='in'
        variants={loginscreenAnimation}
        transition={loginscreenTransition}
        className='login'
        >
            <div className="login_background">
            <motion.img
            initial='out'
            animate='in'
            variants={animationLogo}
            transition={transitionLogo}
            className='login_logo'
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt='login'
            />
                <motion.button
                initial='out'
                animate='in'
                variants={animationButton}
                transition={transitionButton}
                className='login_button'
                onClick={() => setSignIn(true)}
                >
                   Sign in
                </motion.button>
                <div className="login_gradient"/>
            </div>
            <div className="login_body">
                {signIn ? (
                    <Signup/>
                ) : (
                <>
                <motion.h1
                initial='out'
                animate='in'
                variants={animationOne}
                transition={transitionOne}
                >Unlimited films, TV Shows, Programmes and more.</motion.h1>
                <motion.h2
                initial='out'
                animate='in'
                variants={animationTwo}
                transition={transitionTwo}>
                Watch anywhere. Cancel anytime
                </motion.h2>
                <motion.h3
                initial='out'
                animate='in'
                variants={animationThree}
                transition={transitionThree}>
                Ready to watch? Enter your email to create or restart your
                membership.
                </motion.h3>
                <motion.div
                initial='out'
                animate='in'
                variants={animationFour}
                transition={transitionFour}
                className='login_input'
                >
                <form>
                <input placeholder="Alamat email" type="email"/>
                <button onClick={() => setSignIn(true)} className="login_signup">Get started</button>
                </form>
                </motion.div>
                </> 
                )} 
            </div>  
        </motion.div>
    )
}

export default Login
