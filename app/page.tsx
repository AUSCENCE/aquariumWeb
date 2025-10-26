'use client'

import { SignUp, useUser } from '@clerk/nextjs'
import Wrapper from "@/app/component/Wrapper";
import UserInfo from './component/userInfo';

export default function Home() {
    const { isSignedIn } = useUser()
    
    if (!isSignedIn) {
        return <SignUp />
    }

    return (
        <Wrapper>
            <div>
                
            </div>
        </Wrapper>
    )
}