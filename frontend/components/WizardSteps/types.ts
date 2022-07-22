type StepStatus = 'complete' | 'current' | 'upcoming'

export type Step = {
    id: string | number
    name: string
    href: string
    status: StepStatus
}