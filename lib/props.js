'use strict';

exports.__esModule = true;
exports.LineDefaultProps = exports.LinePropTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('@nivo/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var LinePropTypes = exports.LinePropTypes = {
    // data
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        id: _propTypes2.default.string.isRequired,
        data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
            y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
        })).isRequired
    })).isRequired,

    stacked: _propTypes2.default.bool.isRequired,
    curve: _core.lineCurvePropType.isRequired,
    areaGenerator: _propTypes2.default.func.isRequired,
    lineGenerator: _propTypes2.default.func.isRequired,

    lines: _propTypes2.default.array.isRequired,
    slices: _propTypes2.default.array.isRequired,

    minY: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.oneOf(['auto'])]).isRequired,
    maxY: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.oneOf(['auto'])]).isRequired,
    xScale: _propTypes2.default.func.isRequired, // computed
    yScale: _propTypes2.default.func.isRequired, // computed

    // axes & grid
    axisTop: _propTypes2.default.object,
    axisRight: _propTypes2.default.object,
    axisBottom: _propTypes2.default.object,
    axisLeft: _propTypes2.default.object,
    enableGridX: _propTypes2.default.bool.isRequired,
    enableGridY: _propTypes2.default.bool.isRequired,

    // dots
    enableDots: _propTypes2.default.bool.isRequired,
    dotSymbol: _propTypes2.default.func,
    dotSize: _propTypes2.default.number.isRequired,
    dotColor: _propTypes2.default.any.isRequired,
    dotBorderWidth: _propTypes2.default.number.isRequired,
    dotBorderColor: _propTypes2.default.any.isRequired,
    enableDotLabel: _propTypes2.default.bool.isRequired,

    // markers
    markers: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        axis: _propTypes2.default.oneOf(['x', 'y']).isRequired,
        value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
        style: _propTypes2.default.object
    })),

    // styling
    getColor: _propTypes2.default.func.isRequired,
    enableArea: _propTypes2.default.bool.isRequired,
    areaOpacity: _propTypes2.default.number.isRequired,
    lineWidth: _propTypes2.default.number.isRequired,
    defs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        id: _propTypes2.default.string.isRequired
    })).isRequired,

    // interactivity
    isInteractive: _propTypes2.default.bool.isRequired,
    enableStackTooltip: _propTypes2.default.bool.isRequired,
    tooltipFormat: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};

var LineDefaultProps = exports.LineDefaultProps = {
    indexBy: 'id',
    keys: ['value'],

    stacked: false,
    curve: 'linear',

    // scales
    minY: 0,
    maxY: 'auto',

    // axes & grid
    axisBottom: {},
    axisLeft: {},
    enableGridX: true,
    enableGridY: true,

    // dots
    enableDots: true,
    dotSize: 6,
    dotColor: 'inherit',
    dotBorderWidth: 0,
    dotBorderColor: 'inherit',
    enableDotLabel: false,

    // styling
    colors: 'nivo',
    colorBy: 'id',
    enableArea: false,
    areaOpacity: 0.2,
    lineWidth: 2,
    defs: [],

    // interactivity
    isInteractive: true,
    enableStackTooltip: true
};