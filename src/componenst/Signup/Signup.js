import React, { useRef } from 'react'
import { auth } from '../../config/firebas'
import { motion } from 'framer-motion';
import './signup.css'
import { formAnimation, formTransition } from '../../Animations/SignupAnimate';

function Signup() {
    const emailRef = useRef(null)
    const password = useRef(null)

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            password.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((err) => {
            alert(err.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            password.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((err) => {
            alert(err.messager  )
        })
    }
    return (
        <motion.div
        className='signup'
        initial='out'
        animate='in'
        exit='out'
        variants={formAnimation}
        transition={formTransition}>
            <form>
                <h1>Masuk</h1>
                <input ref={emailRef} placeholder="Alamat email" type="email"/>
                <input ref={password} placeholder="password" type="password"/>
                <button onClick={signIn} type="submit">Sign In</button>
                <h4>
                    <span className="signup_gray">New to Netflix?</span>
                    <span onClick={register} className="signup_link">Sign Up now.</span> 
                </h4>
            </form>
        </motion.div>
    )
}

export default Signup
