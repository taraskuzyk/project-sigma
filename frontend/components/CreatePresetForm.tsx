import { SubmitHandler, useForm } from "react-hook-form"

export type CreatePresetFormState = {
    deviceModel: string
    manufacturer: string
    type: string
}

type CreatePresetFormProps = {
    onSubmit: SubmitHandler<CreatePresetFormState>
}

function CreatePresetForm({ onSubmit }: CreatePresetFormProps) {
    const form = useForm<CreatePresetFormState>()
    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
        >
            <div>
                <label htmlFor="manufacturer">Manufacturer</label>
                <select {...form.register('manufacturer', { required: true })}>
                    <option>LaraNet</option>
                </select>
            </div>
            <div>
                <label htmlFor="type">Device Type</label>
                <select {...form.register('type', { required: true })}>
                    <option>LaraNet</option>
                </select>
            </div>
            <div>
                <label htmlFor="deviceModel">Device Model</label>
                <select {...form.register('deviceModel', { required: true })}>
                    <option>D-39392</option>
                </select>
            </div>
            <div>
                <button
                    type='submit'
                >
                    Create
                </button>
            </div>
        </form>
    )
}

export default CreatePresetForm