import Button from "~/components/Button"
import AuthLayout from "~/components/AuthLayout"

function AppLoginPage() {
    return (
        <AuthLayout>
            <h1>Log In</h1>
            <Button
                type='button'
            >Click me, I do nothing!</Button>
        </AuthLayout>
    )
}

export default AppLoginPage