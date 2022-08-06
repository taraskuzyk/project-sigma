import { useMutation } from "@tanstack/react-query";
import phin from "phin";
import { CreatePresetFormState } from "~/components/CreatePresetForm";
import { SensorPreset } from "~/mocks/types";

const createPreset = async (newPreset: CreatePresetFormState) => {
    const res = await phin<SensorPreset>({
        url: new URL('http://my.backend/presets'),
        method: 'POST',
        parse: 'json',
        data: newPreset
    })
    return res.body
}

export default function useCreatePresetMutation() {
    return useMutation<SensorPreset, unknown, CreatePresetFormState>(newPreset => createPreset(newPreset))
}