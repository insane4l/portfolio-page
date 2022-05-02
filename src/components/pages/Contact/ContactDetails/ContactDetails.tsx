import React from 'react'
import './ContactDetails.scss'
import {Contacts} from '../../../Contacts/Contacts'
import { useMediaQuery } from 'react-responsive'

export const ContactDetails = () => {

    const isSmallerThanLgBreakPoint = useMediaQuery({ query: `(max-width: 992px)`})

    return (
        <div className="contact-details">
            <p>Roman Karpeyev</p>
            <p>Estonia, Narva</p>
            <a href="mailto:roman.karpeyev@gmail.com" className="contact-details__email">roman.karpeyev@gmail.com</a> 
            {isSmallerThanLgBreakPoint && <Contacts collapseMode={false}/>}
        </div>
    )
}