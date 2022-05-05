# AUTO GENERATED FILE - DO NOT EDIT

export baysanchart

"""
    baysanchart(;kwargs...)

A BaysanChart component.
BaysanChart is an example of using Ant Design Charts component.
It takes a JSON data
to visualize.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `data` (Array; optional): The data used to visualize
- `legendPosition` (String; optional): The legendPosition to set the position of the chart legend
- `xField` (String; optional): The xField to use on the x-axis
- `yField` (String; optional): The yField to use on the y-axis
"""
function baysanchart(; kwargs...)
        available_props = Symbol[:id, :data, :legendPosition, :xField, :yField]
        wild_props = Symbol[]
        return Component("baysanchart", "BaysanChart", "baysan_custom_components", available_props, wild_props; kwargs...)
end

