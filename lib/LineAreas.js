'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * This file is part of the nivo project.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * Copyright 2016-present, Raphaël Benitte.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * For the full copyright and license information, please view the LICENSE
                                                                                                                                                                                                                                                                   * file that was distributed with this source code.
                                                                                                                                                                                                                                                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _core = require('@nivo/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LineAreas = function LineAreas(_ref) {
    var areaGenerator = _ref.areaGenerator,
        areaOpacity = _ref.areaOpacity,
        lines = _ref.lines,
        animate = _ref.animate,
        motionStiffness = _ref.motionStiffness,
        motionDamping = _ref.motionDamping;

    if (animate !== true) {
        return _react2.default.createElement(
            'g',
            null,
            lines.map(function (_ref2) {
                var id = _ref2.id,
                    areaColor = _ref2.color,
                    points = _ref2.points;
                return _react2.default.createElement('path', {
                    key: id,
                    d: areaGenerator(points),
                    fill: areaColor,
                    fillOpacity: areaOpacity,
                    strokeWidth: 0
                });
            })
        );
    }

    var springConfig = {
        stiffness: motionStiffness,
        damping: motionDamping
    };

    return _react2.default.createElement(
        'g',
        null,
        lines.map(function (_ref3) {
            var id = _ref3.id,
                areaColor = _ref3.color,
                points = _ref3.points;
            return _react2.default.createElement(
                _core.SmartMotion,
                {
                    key: id,
                    style: function style(spring) {
                        return {
                            d: spring(areaGenerator(points), springConfig),
                            fill: spring(areaColor, springConfig)
                        };
                    }
                },
                function (style) {
                    return _react2.default.createElement('path', {
                        key: id,
                        d: style.d,
                        fill: areaColor,
                        fillOpacity: areaOpacity,
                        strokeWidth: 0
                    });
                }
            );
        })
    );
};

LineAreas.propTypes = _extends({
    areaOpacity: _propTypes2.default.number.isRequired
}, _core.motionPropTypes);

exports.default = (0, _pure2.default)(LineAreas);