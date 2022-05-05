import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Bar} from '@ant-design/plots';

/**
 * BaysanChart is an example of using Ant Design Charts component.
 * It takes a JSON data
 * to visualize.
 */
const BaysanChart = (props) => {
    const config = {
        data: props.data,
        xField: props.xField,
        yField: props.yField,
        seriesField: props.yField,
        legend: {
            position: props.legendPosition,
        },
    };
    return <Bar {...config} />;
};
BaysanChart.defaultProps = {
    legendPosition: 'top-left',
};
BaysanChart.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The data used to visualize
     */
    data: PropTypes.array,

    /**
     * The xField to use on the x-axis
     */
    xField: PropTypes.string,

    /**
     * The yField to use on the y-axis
     */
    yField: PropTypes.string,

    /**
     * The legendPosition to set the position of the chart legend
     */
    legendPosition: PropTypes.string,
};
export default BaysanChart;
