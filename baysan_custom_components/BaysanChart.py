# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BaysanChart(Component):
    """A BaysanChart component.
BaysanChart is an example of using Ant Design Charts component.
It takes a JSON data
to visualize.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- data (list; optional):
    The data used to visualize.

- legendPosition (string; default 'top-left'):
    The legendPosition to set the position of the chart legend.

- xField (string; optional):
    The xField to use on the x-axis.

- yField (string; optional):
    The yField to use on the y-axis."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, xField=Component.UNDEFINED, yField=Component.UNDEFINED, legendPosition=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'legendPosition', 'xField', 'yField']
        self._type = 'BaysanChart'
        self._namespace = 'baysan_custom_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'legendPosition', 'xField', 'yField']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BaysanChart, self).__init__(**args)
