import baysan_custom_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    baysan_custom_components.TextInput(
        id='baysan-custom-component',
        value='Default Value from Dash',
        # label='Default Label from Dash'
    ),
    
    html.Div(id='output'),
    html.Button('CLICK ME',id='dummy-btn',n_clicks=0)
])


@app.callback(Output('output', 'children'), [Input('baysan-custom-component', 'value')])
def display_output(value):
    return 'You have entered:\n {}'.format(value)

# @app.callback(Output('baysan-custom-component','value'),Input('dummy-btn','n_clicks'))
# def demo(n_clicks):
#     if n_clicks > 0:
#         return 'ASD'

if __name__ == '__main__':
    app.run_server(debug=True)
