import classNames from "classnames"
import { Step } from "./types"

type WizardStepProps = {
    step: Step
}

function WizardStep({ step: { id, name, href, status } }: WizardStepProps) {
    return (
        <a
            href={href}
            className={classNames(
                "pl-4 py-2 flex flex-col border-l-4 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4",
                {
                    "border-blue-600": status === 'current',
                    "border-blue-600 group hover:border-blue-800": status === 'complete',
                    "group border-gray-200 hover:border-gray-300": status === 'upcoming',
                }
            )}
            aria-current={status === 'current' ? 'true' : 'false'}
        >
            <span className={classNames(
                "text-xs font-semibold tracking-wide uppercase",
                {
                    "text-blue-600": status === 'current',
                    "text-blue-600 group-hover:text-blue-800": status === 'complete',
                    "text-gray-500 group-hover:text-gray-700": status === 'upcoming',
                }
            )}>
                {id}
            </span>
            <span className="text-sm font-medium">{name}</span>
        </a>
    )
}

export default WizardStep