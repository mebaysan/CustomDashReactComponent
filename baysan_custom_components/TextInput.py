# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TextInput(Component):
    """A TextInput component.
TextInput is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- label (string; default 'Default Label with defaultProps'):
    The label used to show above of the input.

- value (string; optional):
    The value used to set the default value for the input."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, label=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'label', 'value']
        self._type = 'TextInput'
        self._namespace = 'baysan_custom_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'label', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TextInput, self).__init__(**args)
