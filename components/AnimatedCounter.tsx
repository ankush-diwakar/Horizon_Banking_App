'use client'
import React from 'react'
import CountUp from 'react-countup';
const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
            <CountUp
                decimal="."
                decimals={2}
                duration={1.5}
                prefix="₹"
                end={amount} 
            />
    )
}

export default AnimatedCounter
