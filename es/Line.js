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
import { sortBy } from 'lodash-es';
import { area, line } from 'd3-shape';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import withPropsOnChange from 'recompose/withPropsOnChange';
import defaultProps from 'recompose/defaultProps';
import { curveFromProp } from '@nivo/core';
import { getInheritedColorGenerator } from '@nivo/core';
import { withTheme, withColors, withDimensions, withMotion } from '@nivo/core';
import { Container, SvgWrapper } from '@nivo/core';
import { getScales, getStackedScales, generateLines, generateStackedLines } from './compute';
import { CartesianMarkers } from '@nivo/core';
import { Axes, Grid } from '@nivo/core';
import LineAreas from './LineAreas';
import LineLines from './LineLines';
import LineSlices from './LineSlices';
import LineDots from './LineDots';
import { LinePropTypes, LineDefaultProps } from './props';

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

    return React.createElement(
        Container,
        { isInteractive: isInteractive, theme: theme },
        function (_ref2) {
            var showTooltip = _ref2.showTooltip,
                hideTooltip = _ref2.hideTooltip;
            return React.createElement(
                SvgWrapper,
                { width: outerWidth, height: outerHeight, margin: margin },
                React.createElement(Grid, _extends({
                    theme: theme,
                    width: width,
                    height: height,
                    xScale: enableGridX ? xScale : null,
                    yScale: enableGridY ? yScale : null
                }, motionProps)),
                React.createElement(CartesianMarkers, {
                    markers: markers,
                    width: width,
                    height: height,
                    xScale: xScale,
                    yScale: yScale,
                    theme: theme
                }),
                React.createElement(Axes, _extends({
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
                enableArea && React.createElement(LineAreas, _extends({
                    areaGenerator: areaGenerator,
                    areaOpacity: areaOpacity,
                    lines: lines
                }, motionProps)),
                React.createElement(LineLines, _extends({
                    lines: lines,
                    lineGenerator: lineGenerator,
                    lineWidth: lineWidth
                }, motionProps)),
                isInteractive && enableStackTooltip && React.createElement(LineSlices, {
                    slices: slices,
                    height: height,
                    showTooltip: showTooltip,
                    hideTooltip: hideTooltip,
                    theme: theme,
                    tooltipFormat: tooltipFormat
                }),
                enableDots && React.createElement(LineDots, _extends({
                    lines: lines,
                    symbol: dotSymbol,
                    size: dotSize,
                    color: getInheritedColorGenerator(dotColor),
                    borderWidth: dotBorderWidth,
                    borderColor: getInheritedColorGenerator(dotBorderColor),
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

Line.propTypes = LinePropTypes;

var enhance = compose(defaultProps(LineDefaultProps), withTheme(), withColors(), withDimensions(), withMotion(), withPropsOnChange(['curve', 'height'], function (_ref3) {
    var curve = _ref3.curve,
        height = _ref3.height;
    return {
        areaGenerator: area().x(function (d) {
            return d.x;
        }).y0(height).y1(function (d) {
            return d.y;
        }).curve(curveFromProp(curve)),
        lineGenerator: line().defined(function (d) {
            return d.value !== null;
        }).x(function (d) {
            return d.x;
        }).y(function (d) {
            return d.y;
        }).curve(curveFromProp(curve))
    };
}), withPropsOnChange(['data', 'stacked', 'width', 'height', 'minY', 'maxY'], function (_ref4) {
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
        scales = getStackedScales(args);
    } else {
        scales = getScales(args);
    }

    return _extends({
        margin: margin,
        width: width,
        height: height
    }, scales);
}), withPropsOnChange(['getColor', 'xScale', 'yScale'], function (_ref5) {
    var data = _ref5.data,
        stacked = _ref5.stacked,
        xScale = _ref5.xScale,
        yScale = _ref5.yScale,
        getColor = _ref5.getColor;

    var lines = void 0;
    if (stacked === true) {
        lines = generateStackedLines(data, xScale, yScale, getColor);
    } else {
        lines = generateLines(data, xScale, yScale, getColor);
    }

    var slices = xScale.domain().map(function (id, i) {
        var points = sortBy(lines.map(function (line) {
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
}), pure);

var enhancedLine = enhance(Line);
enhancedLine.displayName = 'enhance(Line)';

export default enhancedLine;