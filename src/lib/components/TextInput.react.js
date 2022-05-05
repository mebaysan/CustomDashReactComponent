import React, {useState} from 'react';
import PropTypes from 'prop-types';
/**
 * TextInput is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const TextInput = (props) => {
    const [value, setValue] = useState(props.value);

    const updateValue = (e) => {
        setValue(e.target.value);
        props.setProps({value: e.target.value});
    };

    return (
        <>
            {/* <label>{props.label != null ? props.label : 'DEFAULT LABEL'}</label> */}
            <label>{props.label}</label>
            <br />
            <input
                value={props.setProps ? props.value : value}
                onChange={updateValue}
            />
            <p>{value}</p>
        </>
    );
};
TextInput.defaultProps = {
    label: 'Default Label with defaultProps',
};
TextInput.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * The label used to show above of the input
     */
    label: PropTypes.string,
    /**
     * The value used to set the default value for the input
     */
    value: PropTypes.string,
};
export default TextInput;
