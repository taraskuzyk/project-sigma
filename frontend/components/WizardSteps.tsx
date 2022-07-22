import { Step } from "./WizardSteps/types"
import WizardStep from "./WizardSteps/WizardStep"

type WizardStepsProps = {
    steps: Step[]
}

export default function WizardSteps({ steps }: WizardStepsProps) {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
                {steps.map((step) => (
                    <li key={step.name} className="md:flex-1">
                        <WizardStep step={step} />
                    </li>
                ))}
            </ol>
        </nav>
    )
}  