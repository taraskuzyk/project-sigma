import { rest } from 'msw'
import { SensorPreset } from './types'

export const handlers = [
  rest.get('http://my.backend/presets/:id', (_req, res, ctx) => {
    return res(
      ctx.json<SensorPreset>({
        id: 'abc-123',
        fields: [
          {
            name: "temperature",
            displayName: "Temperature",
            parameters: [
                {
                    name: "trigger_high",
                    displayName: "Trigger High",
                    valueType: 'integer',
                    value: 30,
                },
                {
                    name: "trigger_low",
                    displayName: "Trigger Low",
                    valueType: 'integer',
                    value: 10,
                },
                {
                    name: "enabled",
                    displayName: "Enable Temperature Readings",
                    valueType: ["on", "off"],
                    value: "on"
                }
            ]
          }
        ],
        manufacturer: 'TekSensor',
        modelName: 'Tek1234',
      })
    )
  }),
  rest.get('http://my.backend/presets', (_req, res, ctx) => {
    return res(
      ctx.json<SensorPreset[]>([
        {
          id: 'abc-123',
          fields: [
            {
              name: "temparature",
              displayName: "Temparature",
              parameters: [
                  {
                      name: "trigger_high",
                      displayName: "Trigger High",
                      valueType: 'integer',
                      value: 30,
                  },
                  {
                      name: "trigger_low",
                      displayName: "Trigger Low",
                      valueType: 'integer',
                      value: 10,
                  },
                  {
                      name: "enabled",
                      displayName: "Enable Temperature Readings",
                      valueType: ["on", "off"],
                      value: "on"
                  }
              ]
            }
          ],
          manufacturer: 'TekSensor',
          modelName: 'Tek1234',
        },
      ])
    )
  }),

  rest.post('http://my.backend/presets', async (req, res, ctx) => {
    const { manufacturer, deviceModel, type } = await req.json<{ manufacturer: string; deviceModel: string; type: string; }>()
    return res(ctx.json<SensorPreset>({
      id: 'abc-223',
      fields: [
        {
          name: "temparature",
          displayName: "Temparature",
          parameters: [
              {
                  name: "trigger_high",
                  displayName: "Trigger High",
                  valueType: 'integer',
                  value: 30,
              },
              {
                  name: "trigger_low",
                  displayName: "Trigger Low",
                  valueType: 'integer',
                  value: 10,
              },
              {
                  name: "enabled",
                  displayName: "Enable Temperature Readings",
                  valueType: ["on", "off"],
                  value: "on"
              }
          ]
        }
      ],
      manufacturer,
      modelName: deviceModel,
    }))
  }),
]