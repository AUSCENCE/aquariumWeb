import AuthWrapper from '@/app/component/AuthWrapper'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return  (
        <AuthWrapper>
            <SignUp />
        </AuthWrapper>
    )
}