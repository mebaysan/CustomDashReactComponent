/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import TextInput from '../lib/components/TextInput.react';

const App = () => {
    return (
        <>
            <TextInput 
            // label={'Label from props'} 
            value={'value from props'} />
        </>
    );
};

export default App;
