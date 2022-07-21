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
                className="bg-blue-500 text-blue-50 rounded px-4 py-1 hover:bg-blue-700 hover:text-blue-200 transition-colors"
            >
                Click me, I do nothing!
            </Button>
        </AppLayout>
    )
}

export default AppIndexPage