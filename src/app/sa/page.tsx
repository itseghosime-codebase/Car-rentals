import AvaCar from '@/components/AvaCar'
import React from 'react'
import { AvailableCars } from '@/app/page'
import Rental from '@/components/Rental'

export default function page() {
    return (
        <main>
            <Rental title='San Antonio'/>
            <AvaCar cars={AvailableCars} home={true} />
        </main>
    )
}
