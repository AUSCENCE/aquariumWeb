import { SignIn } from '@clerk/nextjs'
import AuthWrapper from "@/app/component/AuthWrapper";

export default function Page() {
    return (
        <AuthWrapper>
            <SignIn />
        </AuthWrapper>
    )
}