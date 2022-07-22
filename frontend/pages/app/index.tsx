import Button from "~/components/Button"
import AppLayout from "~/components/AppLayout"

function AppIndexPage() {
    return (
        <AppLayout
            sidebar={'Hello World!'}
        >
            <h1 className='text-3xl font-bold mb-3 mt-1'>App</h1>
            <Button
                type='button'
            >
                Click me, I do nothing!
            </Button>
        </AppLayout>
    )
}

export default AppIndexPage