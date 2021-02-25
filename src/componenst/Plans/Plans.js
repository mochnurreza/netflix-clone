import { motion } from 'framer-motion'
import React from 'react'
import { animationPlans, animationRenewal, transitionPlans, transitionRenewal } from '../../Animations/PlanScreen'
import { packagePlans } from '../../Data/data'
import './Plans.css'

function Plans() {
    
    return (
        <div className="plans">
            <motion.p 
            initial="out"
            animate="in"
            variants={animationRenewal}
            transition={transitionRenewal}>
                Renewal Date:
            </motion.p>
            {packagePlans.map((plan) => {
                const {id, subcription, quality} = plan
            
            return(
            <motion.div
            initial="out"
            animate="in"
            variants={animationPlans}
            transition={transitionPlans}
            className="planscreen_plans"
            key={id}>
                <div className="plans_info">
                    <h5>{subcription}</h5>
                    <h6>{quality}</h6>
                </div>
                <button>Subscribe</button>
            </motion.div>
            )
            })}
        </div>
    )
}

export default Plans
