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

var _lodash = require('lodash');

var _d3Shape = require('d3-shape');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _withPropsOnChange = require('recompose/withPropsOnChange');

var _withPropsOnChange2 = _interopRequireDefault(_withPropsOnChange);

var _defaultProps = require('recompose/defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _core = require('@nivo/core');

var _compute = require('./compute');

var _LineAreas = require('./LineAreas');

var _LineAreas2 = _interopRequireDefault(_LineAreas);

var _LineLines = require('./LineLines');

var _LineLines2 = _interopRequireDefault(_LineLines);

var _LineSlices = require('./LineSlices');

var _LineSlices2 = _interopRequireDefault(_LineSlices);

var _LineDots = require('./LineDots');

var _LineDots2 = _interopRequireDefault(_LineDots);

var _props = require('./props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Line = function Line(_ref) {
    var lines = _ref.lines,
        lineGenerator = _ref.lineGenerator,
        areaGenerator = _ref.areaGenerator,
        xScale = _ref.xScale,
        yScale = _ref.yScale,
        slices = _ref.slices,
        margin = _ref.margin,
        width = _ref.width,
        height = _ref.height,
        outerWidth = _ref.outerWidth,
        outerHeight = _ref.outerHeight,
        axisTop = _ref.axisTop,
        axisRight = _ref.axisRight,
        axisBottom = _ref.axisBottom,
        axisLeft = _ref.axisLeft,
        enableGridX = _ref.enableGridX,
        enableGridY = _ref.enableGridY,
        lineWidth = _ref.lineWidth,
        enableArea = _ref.enableArea,
        areaOpacity = _ref.areaOpacity,
        enableDots = _ref.enableDots,
        dotSymbol = _ref.dotSymbol,
        dotSize = _ref.dotSize,
        dotColor = _ref.dotColor,
        dotBorderWidth = _ref.dotBorderWidth,
        dotBorderColor = _ref.dotBorderColor,
        enableDotLabel = _ref.enableDotLabel,
        dotLabel = _ref.dotLabel,
        dotLabelFormat = _ref.dotLabelFormat,
        dotLabelYOffset = _ref.dotLabelYOffset,
        markers = _ref.markers,
        theme = _ref.theme,
        animate = _ref.animate,
        motionStiffness = _ref.motionStiffness,
        motionDamping = _ref.motionDamping,
        isInteractive = _ref.isInteractive,
        tooltipFormat = _ref.tooltipFormat,
        enableStackTooltip = _ref.enableStackTooltip;

    var motionProps = {
        animate: animate,
        motionDamping: motionDamping,
        motionStiffness: motionStiffness
    };

    return _react2.default.createElement(
        _core.Container,
        { isInteractive: isInteractive, theme: theme },
        function (_ref2) {
            var showTooltip = _ref2.showTooltip,
                hideTooltip = _ref2.hideTooltip;
            return _react2.default.createElement(
                _core.SvgWrapper,
                { width: outerWidth, height: outerHeight, margin: margin },
                _react2.default.createElement(_core.Grid, _extends({
                    theme: theme,
                    width: width,
                    height: height,
                    xScale: enableGridX ? xScale : null,
                    yScale: enableGridY ? yScale : null
                }, motionProps)),
                _react2.default.createElement(_core.CartesianMarkers, {
                    markers: markers,
                    width: width,
                    height: height,
                    xScale: xScale,
                    yScale: yScale,
                    theme: theme
                }),
                _react2.default.createElement(_core.Axes, _extends({
                    xScale: xScale,
                    yScale: yScale,
                    width: width,
                    height: height,
                    theme: theme,
                    top: axisTop,
                    right: axisRight,
                    bottom: axisBottom,
                    left: axisLeft
                }, motionProps)),
                enableArea && _react2.default.createElement(_LineAreas2.default, _extends({
                    areaGenerator: areaGenerator,
                    areaOpacity: areaOpacity,
                    lines: lines
                }, motionProps)),
                _react2.default.createElement(_LineLines2.default, _extends({
                    lines: lines,
                    lineGenerator: lineGenerator,
                    lineWidth: lineWidth
                }, motionProps)),
                isInteractive && enableStackTooltip && _react2.default.createElement(_LineSlices2.default, {
                    slices: slices,
                    height: height,
                    showTooltip: showTooltip,
                    hideTooltip: hideTooltip,
                    theme: theme,
                    tooltipFormat: tooltipFormat
                }),
                enableDots && _react2.default.createElement(_LineDots2.default, _extends({
                    lines: lines,
                    symbol: dotSymbol,
                    size: dotSize,
                    color: (0, _core.getInheritedColorGenerator)(dotColor),
                    borderWidth: dotBorderWidth,
                    borderColor: (0, _core.getInheritedColorGenerator)(dotBorderColor),
                    enableLabel: enableDotLabel,
                    label: dotLabel,
                    labelFormat: dotLabelFormat,
                    labelYOffset: dotLabelYOffset,
                    theme: theme
                }, motionProps))
            );
        }
    );
};

Line.propTypes = _props.LinePropTypes;

var enhance = (0, _compose2.default)((0, _defaultProps2.default)(_props.LineDefaultProps), (0, _core.withTheme)(), (0, _core.withColors)(), (0, _core.withDimensions)(), (0, _core.withMotion)(), (0, _withPropsOnChange2.default)(['curve', 'height'], function (_ref3) {
    var curve = _ref3.curve,
        height = _ref3.height;
    return {
        areaGenerator: (0, _d3Shape.area)().x(function (d) {
            return d.x;
        }).y0(height).y1(function (d) {
            return d.y;
        }).curve((0, _core.curveFromProp)(curve)),
        lineGenerator: (0, _d3Shape.line)().defined(function (d) {
            return d.value !== null;
        }).x(function (d) {
            return d.x;
        }).y(function (d) {
            return d.y;
        }).curve((0, _core.curveFromProp)(curve))
    };
}), (0, _withPropsOnChange2.default)(['data', 'stacked', 'width', 'height', 'minY', 'maxY'], function (_ref4) {
    var data = _ref4.data,
        stacked = _ref4.stacked,
        width = _ref4.width,
        height = _ref4.height,
        margin = _ref4.margin,
        minY = _ref4.minY,
        maxY = _ref4.maxY;

    var scales = void 0;
    var args = { data: data, width: width, height: height, minY: minY, maxY: maxY };
    if (stacked === true) {
        scales = (0, _compute.getStackedScales)(args);
    } else {
        scales = (0, _compute.getScales)(args);
    }

    return _extends({
        margin: margin,
        width: width,
        height: height
    }, scales);
}), (0, _withPropsOnChange2.default)(['getColor', 'xScale', 'yScale'], function (_ref5) {
    var data = _ref5.data,
        stacked = _ref5.stacked,
        xScale = _ref5.xScale,
        yScale = _ref5.yScale,
        getColor = _ref5.getColor;

    var lines = void 0;
    if (stacked === true) {
        lines = (0, _compute.generateStackedLines)(data, xScale, yScale, getColor);
    } else {
        lines = (0, _compute.generateLines)(data, xScale, yScale, getColor);
    }

    var slices = xScale.domain().map(function (id, i) {
        var points = (0, _lodash.sortBy)(lines.map(function (line) {
            return {
                id: line.id,
                value: line.points[i].value,
                y: line.points[i].y,
                color: line.color,
                preparedValue: line.points[i].preparedValue
            };
        }), 'y');

        return {
            id: id,
            x: xScale(id),
            points: points
        };
    });

    return { lines: lines, slices: slices };
}), _pure2.default);

var enhancedLine = enhance(Line);
enhancedLine.displayName = 'enhance(Line)';

exports.default = enhancedLine;