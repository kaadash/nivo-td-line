'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _d3Format = require('d3-format');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _withState = require('recompose/withState');

var _withState2 = _interopRequireDefault(_withState);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _withPropsOnChange = require('recompose/withPropsOnChange');

var _withPropsOnChange2 = _interopRequireDefault(_withPropsOnChange);

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
var Chip = function Chip(_ref) {
    var color = _ref.color;
    return _react2.default.createElement('span', {
        style: {
            display: 'block',
            borderRadius: '50%',
            width: '6px',
            height: '6px',
            background: color
        }
    });
};

var LineSlicesItem = function LineSlicesItem(_ref2) {
    var slice = _ref2.slice,
        height = _ref2.height,
        showTooltip = _ref2.showTooltip,
        hideTooltip = _ref2.hideTooltip,
        isHover = _ref2.isHover;
    return _react2.default.createElement(
        'g',
        { transform: 'translate(' + slice.x + ', 0)' },
        isHover && _react2.default.createElement('line', {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: height,
            stroke: '#000',
            strokeOpacity: 0.35,
            strokeWidth: 1
        }),
        _react2.default.createElement('rect', {
            x: -20,
            width: 40,
            height: height,
            fill: '#000',
            fillOpacity: 0,
            onMouseEnter: showTooltip,
            onMouseMove: showTooltip,
            onMouseLeave: hideTooltip
        })
    );
};

LineSlicesItem.propTypes = {
    slice: _propTypes2.default.object.isRequired,
    height: _propTypes2.default.number.isRequired,
    showTooltip: _propTypes2.default.func.isRequired,
    hideTooltip: _propTypes2.default.func.isRequired,
    isHover: _propTypes2.default.bool.isRequired,
    theme: _propTypes2.default.object.isRequired
};

var enhance = (0, _compose2.default)((0, _withState2.default)('isHover', 'setIsHover', false), (0, _withPropsOnChange2.default)(['slice', 'theme', 'tooltipFormat'], function (_ref3) {
    var slice = _ref3.slice,
        theme = _ref3.theme,
        tooltipFormat = _ref3.tooltipFormat;

    var format = !tooltipFormat || (0, _lodash.isFunction)(tooltipFormat) ? tooltipFormat : (0, _d3Format.format)(tooltipFormat);
    var hasValues = slice.points.some(function (p) {
        return p.value !== null;
    });

    var prepareValue = function prepareValue(value, preparedValue) {
        if (preparedValue) {
            return preparedValue;
        }
        return format ? format(value) : value;
    };

    return {
        tooltip: hasValues ? _react2.default.createElement(_core.TableTooltip, {
            theme: theme,
            rows: slice.points.filter(function (p) {
                return p.value !== null;
            }).map(function (p) {
                return [_react2.default.createElement(Chip, { color: p.color }), p.id, prepareValue(p.value, p.preparedValue)];
            })
        }) : null
    };
}), (0, _withHandlers2.default)({
    showTooltip: function showTooltip(_ref4) {
        var _showTooltip = _ref4.showTooltip,
            setIsHover = _ref4.setIsHover,
            tooltip = _ref4.tooltip;
        return function (e) {
            setIsHover(true);
            _showTooltip(tooltip, e);
        };
    },
    hideTooltip: function hideTooltip(_ref5) {
        var _hideTooltip = _ref5.hideTooltip,
            setIsHover = _ref5.setIsHover;
        return function () {
            setIsHover(false);
            _hideTooltip();
        };
    }
}), _pure2.default);

exports.default = enhance(LineSlicesItem);