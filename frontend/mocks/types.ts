export type SensorPreset = {
    id: string
    modelName: string
    manufacturer: string
    fields: Field[]
}

type Field = {
    name: string
    displayName: string
    parameters: FieldParameter[]
}

type FieldParameter = {
    name: string
    displayName: string
    valueType: "integer" | string[] | "boolean"
    value: string | number | boolean
}