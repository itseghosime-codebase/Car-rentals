import AvaCar from '@/components/AvaCar'
import React from 'react'
import { AvailableCars } from '@/app/page'
import DoorDash from '@/components/DoorDash'

export default function page() {
    return (
        <main>
            <DoorDash />
            <AvaCar cars={AvailableCars} home={false} />
        </main>
    )
}
