import AvaCar from '@/components/AvaCar'
import React from 'react'
import { AvailableCars } from '@/app/page'
import Rental from '@/components/Rental'

export default function page() {
    return (
        <main>
            <Rental title='Texas' />
            <AvaCar cars={AvailableCars} home={false} />
        </main>
    )
}
