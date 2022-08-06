import Button from "~/components/Button"
import AppLayout from "~/components/AppLayout"
import CreatePresetForm, { CreatePresetFormState } from "~/components/CreatePresetForm"
import { SubmitHandler } from "react-hook-form"
import { useCallback } from "react"
import { useRouter } from "next/router"
import useCreatePresetMutation from "~/lib/useCreatePresetMutation"

function AppPresetsNewPage() {
    const router = useRouter()
    const createPreset = useCreatePresetMutation()
    const handleSubmit: SubmitHandler<CreatePresetFormState> = useCallback(async data => {
        const preset = await createPreset.mutateAsync(data)
        console.log(preset)
        router.push(`/presets/${preset.id}/configure`)
    }, [router, createPreset])
    return (
        <AppLayout
            sidebar={'Hello World!'}
        >
            <header className="space-y-4">
                <div className='space-y-2'>
                    <h1 className='text-3xl font-bold'>Create New Preset Type</h1>
                    <h2 className='text-xl font-medium text-stone-500'>Create a new preset configured to your specifications.</h2>
                </div>
                <CreatePresetForm onSubmit={handleSubmit} />
            </header>
        </AppLayout>
    )
}

export default AppPresetsNewPage