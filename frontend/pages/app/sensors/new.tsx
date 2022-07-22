import Button from "~/components/Button"
import AppLayout from "~/components/AppLayout"
import WizardSteps from "~/components/WizardSteps"
import { Step } from "~/components/WizardSteps/types"

const steps: Step[] = [
    { id: 'Step 1', name: 'Select Device/Application', href: '#', status: 'current' },
    { id: 'Step 2', name: 'Assign Parameters', href: '#', status: 'upcoming' },
    { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming' },
]

function AppSensorsNewPage() {
    return (
        <AppLayout
            sidebar={'Hello World!'}
        >
            <header className="space-y-4">
                <div className='space-y-2'>
                    <h1 className='text-3xl font-bold'>Create New Sensor</h1>
                    <h2 className='text-xl font-medium text-stone-500'>Create a new sensor configured to your specifications.</h2>
                </div>
                <WizardSteps steps={steps} />
            </header>
        </AppLayout>
    )
}

export default AppSensorsNewPage