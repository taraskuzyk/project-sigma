import Button from "~/components/Button"
import AppLayout from "~/components/Layout/AppLayout"

function AppIndexPage() {
    return (
        <AppLayout>
            <h1>App</h1>
            <Button
                type='button'
            >Click me, I do nothing!</Button>
        </AppLayout>
    )
}

export default AppIndexPage