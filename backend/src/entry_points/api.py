"""

temparature - group and parameter

motion (Motion)- group:
    x: p
    y: p
    z: p

123456 - send to backend, header and bytes,
0xAAsbahsgiy12t3

"""

"""
{
    sensor: "epic_sensor",
    data_model: [
        // group
        {
            name: "group",
            display_name: "display_group_name",
            parameters: [
                {
                    name
                    display_name
                    value_type [integer, dropdown, float, string, etc.]
                    default_value
                }
            ]
        }
    ]
}
"""

"""
{
    sensor: "epic_sensor",
    display_name: "My Epic Sensor",
    id: 1,
    data: [
        // group
        {
            name: "temparature",
            display_name: "Temparature",
            parameters: [
                {
                    name: "trigger_high"
                    display_name: "Trigger High"
                    value_type: integer
                    value: 30
                },
                {
                    name: "trigger_low"
                    display_name: "Trigger Low"
                    value_type: integer
                    value: 10
                },
                {
                    name: "enabled",
                    display_name: "Enable Temperature Readings",
                    value_type: ["on", "off"]
                    value: "on"
                }
            ]
        }
    ]
}
"""

"fetch_default_sensor"


"""

{
    "sensor": "epic_sensor",
    "port": 10,
    "hex_payload": "FFFFFFF"
}

{
    "group_1": {
        "parameter_1": 1,
        "parameter_2: 0.555
    },
    "group_2": {
        "parameter_1": 1,
        "parameter_2: 0.555
    }
}
"""
