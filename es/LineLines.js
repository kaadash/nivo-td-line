var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import { motionPropTypes } from '@nivo/core';
import { SmartMotion } from '@nivo/core';

var LineLines = function LineLines(_ref) {
    var lines = _ref.lines,
        lineGenerator = _ref.lineGenerator,
        lineWidth = _ref.lineWidth,
        animate = _ref.animate,
        motionStiffness = _ref.motionStiffness,
        motionDamping = _ref.motionDamping;

    if (animate !== true) {
        return React.createElement(
            'g',
            null,
            lines.map(function (_ref2) {
                var id = _ref2.id,
                    lineColor = _ref2.color,
                    points = _ref2.points;
                return React.createElement('path', {
                    key: id,
                    d: lineGenerator(points),
                    fill: 'none',
                    strokeWidth: lineWidth,
                    stroke: lineColor
                });
            })
        );
    }

    var springConfig = {
        stiffness: motionStiffness,
        damping: motionDamping
    };

    return React.createElement(
        'g',
        null,
        lines.map(function (_ref3) {
            var id = _ref3.id,
                lineColor = _ref3.color,
                points = _ref3.points;
            return React.createElement(
                SmartMotion,
                {
                    key: id,
                    style: function style(spring) {
                        return {
                            d: spring(lineGenerator(points), springConfig),
                            stroke: spring(lineColor, springConfig)
                        };
                    }
                },
                function (style) {
                    return React.createElement('path', {
                        key: id,
                        d: style.d,
                        fill: 'none',
                        strokeWidth: lineWidth,
                        stroke: style.stroke
                    });
                }
            );
        })
    );
};

LineLines.propTypes = _extends({
    lineWidth: PropTypes.number.isRequired
}, motionPropTypes);

export default pure(LineLines);