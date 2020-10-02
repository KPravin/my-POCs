// ┌────────────────────────────────────────────────┐ \\
// │ F R E E B O A R D                                                                              │ \\
// ├────────────────────────────────────────────────┤ \\
// │ Copyright © 2013 Jim Heising (https://github.com/jheising)                                     │ \\
// │ Copyright © 2013 Bug Labs, Inc. (http://buglabs.net)                                           │ \\
// │ Copyright © 2015 Daisuke Tanaka (https://github.com/tanaka0323)                                │ \\
// ├────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT license.                                                                │ \\
// └────────────────────────────────────────────────┘ \\

(function() {
  'use strict';

  var hbChartWidget = function (settings) {
      var self = this;
      var BLOCK_HEIGHT = 600;

      var currentID = _.uniqueId('hb-chart-');
      var hbChartElement = $('<canvas id="'+ currentID +'"></canvas>');
      var hbChart = null;

      var currentSettings = settings;

              //Sample data. Later this will be replace with data comming from data source

var data1 = {
  labels: ["OPP 1", "OPP 2", "OPP 3", "OPP 4", "OPP 5", "OPP 6", "OPP 7", "OPP 8", "OPP 9", "OPP 10"],
  datasets: [
    {
      label: "Phase 1",
      data: [0,0,0,0,0,0,0,0,0,0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#FF0055",
      data: [7, 5, 5, 6, 5, 8, 20, 7, 5, 12],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 13, 20, 1, 1, 12],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [6, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [7, 28, 25, 24, 20, 13, 25, 28, 23, 13],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#807fff",
      data: [6, 22, 25, 0, 20, 13 , 12, 28, 23, 12],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },

    // STACK 2 START

    {
      label: "",
      backgroundColor: [ "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76","#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76"],
      data: [35, 45, 50, 30, 5, 27, 47, 47, 60, 49],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [7, 6, 6, 16, 7, 7, 7, 12, 7, 10],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 10],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
	{
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [7, 0, 19, 26, 23, 22, 20, 26, 24, 12],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
	{
      label: "Phase 2",
      backgroundColor: "#807fff",
      data: [25, 0, 19, 26, 23, 22, 20, 0, 0, 10],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },

    // STACK 3 START

  {
    label: "",
    backgroundColor:  [ "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76","#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76"],
    data: [75, 70, 79, 68, 7, 30, 47, 63, 60, 47],
    stack: 3,
    xAxisID: 'x-axis-2',
    yAxisID: 'y-axis-0'
  },
	{
      label: "Takt1",
      backgroundColor: "#FF0055",
      data:  [20, 23, 25, 16, 18, 22, 25, 28, 23, 29],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [30, 33, 35, 0, 23, 22, 20, 26, 24],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [20, 17, 19, 0, 23, 22, 20, 26, 24],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [0, 15, 6, 0, 27, 30, 30, 22, 26],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },

    // STACK 4 START

    {
      label: "Takt1",
      backgroundColor: ["#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055","#FF0055", "#FF0055", "#FF0055", "#FF0055"],
      data: [16, 20, 14, 16, 27, 19, 18, 20, 24],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [25, 24, 19, 26, 23, 0, 20, 26, 24],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [35, 34, 29, 33, 23, 0, 20, 36, 34],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [25, 24, 19, 26, 23, 0, 20, 0, 24],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt1",
      backgroundColor: "#FF0055",
      data: [29, 24, 19, 20, 0, 32, 30, 16, 34],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },

        // STACK 5 START

    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [20, 26, 19, 26, 0, 22, 20, 0, 19],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [30, 26, 29, 26, 0, 22, 20, 26, 14],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [35, 14, 16, 26, 0, 32, 30, 36, 44],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },

     // STACK 6 START

    {
      label: "Phase",
      backgroundColor: ["#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055","#FF0055", "#FF0055", "#FF0055", "#FF0055"],
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
  ]
};

var data2 = {
  labels: ["OPP A", "OPP B", "OPP C", "OPP D", "OPP E", "OPP F", "OPP G", "OPP H", "OPP I", "OPP J"],
  datasets: [
    {
      label: "Phase 1",
      data: [0,0,0,0,0,0,0,0,0,0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "yellow",
      data: [7, 5, 5, 6, 5, 8, 20, 7, 5, 12],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 13, 20, 1, 1, 12],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [6, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [7, 28, 25, 24, 20, 13, 25, 28, 23, 13],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#807fff",
      data: [6, 22, 25, 0, 20, 13 , 12, 28, 23, 12],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },

    // STACK 2 START

    {
      label: "",
      backgroundColor: [ "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76","#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76"],
      data: [35, 45, 50, 30, 5, 27, 47, 47, 60, 49],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [7, 6, 6, 16, 7, 7, 7, 12, 7, 10],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 10],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
	{
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [7, 0, 19, 26, 23, 22, 20, 26, 24, 12],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
	{
      label: "Phase 2",
      backgroundColor: "#807fff",
      data: [25, 0, 19, 26, 23, 22, 20, 0, 0, 10],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },

    // STACK 3 START

  {
    label: "",
    backgroundColor:  [ "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76","#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76"],
    data: [75, 70, 79, 68, 7, 30, 47, 63, 60, 47],
    stack: 3,
    xAxisID: 'x-axis-2',
    yAxisID: 'y-axis-0'
  },
	{
      label: "Takt1",
      backgroundColor: "#FF0055",
      data:  [20, 23, 25, 16, 18, 22, 25, 28, 23, 29],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [30, 33, 35, 0, 23, 22, 20, 26, 24],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [20, 17, 19, 0, 23, 22, 20, 26, 24],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [0, 15, 6, 0, 27, 30, 30, 22, 26],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },

    // STACK 4 START

    {
      label: "Takt1",
      backgroundColor: ["#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055","#FF0055", "#FF0055", "#FF0055", "#FF0055"],
      data: [16, 20, 14, 16, 27, 19, 18, 20, 24],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [25, 24, 19, 26, 23, 0, 20, 26, 24],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [35, 34, 29, 33, 23, 0, 20, 36, 34],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [25, 24, 19, 26, 23, 0, 20, 0, 24],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt1",
      backgroundColor: "#FF0055",
      data: [29, 24, 19, 20, 0, 32, 30, 16, 34],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },

        // STACK 5 START

    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [20, 26, 19, 26, 0, 22, 20, 0, 19],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [30, 26, 29, 26, 0, 22, 20, 26, 14],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [35, 14, 16, 26, 0, 32, 30, 36, 44],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },

     // STACK 6 START

    {
      label: "Phase",
      backgroundColor: ["#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055","#FF0055", "#FF0055", "#FF0055", "#FF0055"],
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
  ]
};

var data3 = {
  labels: ["OPP 11", "OPP 12", "OPP 13", "OPP 14", "OPP 15", "OPP 16", "OPP 17", "OPP 18", "OPP 19", "OPP 20"],
  datasets: [
    {
      label: "Phase 1",
      data: [0,0,0,0,0,0,0,0,0,0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "yellow",
      data: [7, 5, 5, 6, 5, 8, 20, 7, 5, 12],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 13, 20, 1, 1, 12],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [6, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#BB33FF",
      data: [7, 28, 25, 24, 20, 13, 25, 28, 23, 13],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 1",
      backgroundColor: "#807fff",
      data: [6, 22, 25, 0, 20, 13 , 12, 28, 23, 12],
      stack: 1,
      xAxisID: 'x-axis-0',
      yAxisID: 'y-axis-0'
    },

    // STACK 2 START

    {
      label: "",
      backgroundColor: [ "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76","#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76"],
      data: [35, 45, 50, 30, 5, 27, 47, 47, 60, 49],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [7, 6, 6, 16, 7, 7, 7, 12, 7, 10],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#FF0055",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 10],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
	{
      label: "Phase 2",
      backgroundColor: "#BB33FF",
      data: [7, 0, 19, 26, 23, 22, 20, 26, 24, 12],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },
	{
      label: "Phase 2",
      backgroundColor: "#807fff",
      data: [25, 0, 19, 26, 23, 22, 20, 0, 0, 10],
      stack: 2,
      xAxisID: 'x-axis-1',
      yAxisID: 'y-axis-0'
    },

    // STACK 3 START

  {
    label: "",
    backgroundColor:  [ "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76","#3D3D76", "#3D3D76", "#3D3D76", "#3D3D76"],
    data: [75, 70, 79, 68, 7, 30, 47, 63, 60, 47],
    stack: 3,
    xAxisID: 'x-axis-2',
    yAxisID: 'y-axis-0'
  },
	{
      label: "Takt1",
      backgroundColor: "#FF0055",
      data:  [20, 23, 25, 16, 18, 22, 25, 28, 23, 29],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [30, 33, 35, 0, 23, 22, 20, 26, 24],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [20, 17, 19, 0, 23, 22, 20, 26, 24],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [0, 15, 6, 0, 27, 30, 30, 22, 26],
      stack: 3,
      xAxisID: 'x-axis-2',
      yAxisID: 'y-axis-0'
    },

    // STACK 4 START

    {
      label: "Takt1",
      backgroundColor: ["#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055","#FF0055", "#FF0055", "#FF0055", "#FF0055"],
      data: [16, 20, 14, 16, 27, 19, 18, 20, 24],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [25, 24, 19, 26, 23, 0, 20, 26, 24],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [35, 34, 29, 33, 23, 0, 20, 36, 34],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [25, 24, 19, 26, 23, 0, 20, 0, 24],
      stack: 4,
      xAxisID: 'x-axis-3',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt1",
      backgroundColor: "#FF0055",
      data: [29, 24, 19, 20, 0, 32, 30, 16, 34],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },

        // STACK 5 START

    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [20, 26, 19, 26, 0, 22, 20, 0, 19],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [30, 26, 29, 26, 0, 22, 20, 26, 14],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [35, 14, 16, 26, 0, 32, 30, 36, 44],
      stack: 5,
      xAxisID: 'x-axis-4',
      yAxisID: 'y-axis-0'
    },

     // STACK 6 START

    {
      label: "Phase",
      backgroundColor: ["#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055", "#FF0055","#FF0055", "#FF0055", "#FF0055", "#FF0055"],
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt2",
      backgroundColor: "#BB33FF",
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt3",
      backgroundColor: "#BB33FF",
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
    {
      label: "Takt4",
      backgroundColor: "#807fff",
      data: [25, 24, 19, 26, 23, 22, 20, 26, 24],
      stack: 6,
      xAxisID: 'x-axis-5',
      yAxisID: 'y-axis-0'
    },
  ]
};

var data = data1;


      function setBlocks(blocks) {
          if (_.isUndefined(blocks))
              return;
          var height = BLOCK_HEIGHT * blocks;
          hbChartElement.css({
              'height': height + 'px',
              'width': height + 'px'
          });
          if (!_.isNull(hbChart))
            hbChart.resize();
      }

      //save the current chart data into session storage
      function saveCurrentChartData(currentChartData) {
          if(currentSettings.chartData != "") {
               sessionStorage.setItem(currentSettings.chartData, currentChartData);
           }
        }

      //TODO: provide inline comments
      function createhbChart() {

        //TODO: commented to redraw same size every time.
          //if (!_.isNull(hbChart)) {
          //  hbChart.destroy();
          //  hbChart = null;
         // }

          //
          hbChartElement.empty();

          //
          var ctx = document.getElementById(currentID).getContext("2d");

          //
          Chart.defaults.groupableHBar = Chart.helpers.clone(Chart.defaults.horizontalBar);

          //
          Chart.controllers.groupableHBar = Chart.controllers.horizontalBar.extend({
            calculateBarY: function(index, datasetIndex, ruler) {
                var me = this;
                var meta = me.getMeta();
                var yScale = me.getScaleForId(meta.yAxisID);
                var barIndex = me.getBarIndex(datasetIndex);
                var topTick = yScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
                topTick -= me.chart.isCombo ? (ruler.tickHeight / me.getBarCount()) : 0;
                var stackIndex = this.getMeta().stackIndex;

                if (yScale.options.stacked) {
                    if(ruler.datasetCount>1) {
                        var spBar=ruler.categorySpacing/ruler.datasetCount;
                        var h=me.calculateBarHeight(ruler);

                        return topTick + (((ruler.categoryHeight - h) / me.getBarCount())+ruler.categorySpacing-spBar/me.getBarCount())+(h+spBar)*stackIndex;
                    }
                    return topTick + (ruler.categoryHeight / me.getBarCount()) + ruler.categorySpacing;
                }

                return topTick +
                    (ruler.barHeight / me.getBarCount()) +
                    ruler.categorySpacing +
                    (ruler.barHeight * barIndex) +
                    (ruler.barSpacing / me.getBarCount()) +
                    (ruler.barSpacing * barIndex);
            },
            calculateBarHeight: function(ruler) {
                var returned=0;
                var me = this;
                var yScale = me.getScaleForId(me.getMeta().yAxisID);
                if (yScale.options.barThickness) {
                    returned = yScale.options.barThickness;
                }
                else {
                    returned= yScale.options.stacked ? ruler.categoryHeight : ruler.barHeight;
                }
                if(ruler.datasetCount>1) {
                    returned=returned/ruler.datasetCount;
                }
                return returned;
            },
            getBarCount: function () {
                var stacks = [];

                // put the stack index in the dataset meta
                Chart.helpers.each(this.chart.data.datasets, function (dataset, datasetIndex) {
                    var meta = this.chart.getDatasetMeta(datasetIndex);
                    if (meta.bar && this.chart.isDatasetVisible(datasetIndex)) {
                        var stackIndex = stacks.indexOf(dataset.stack);
                        if (stackIndex === -1) {
                            stackIndex = stacks.length;
                            stacks.push(dataset.stack);
                        }
                        meta.stackIndex = stackIndex;
                    }
                }, this);

                this.getMeta().stacks = stacks;

                return stacks.length;
            }
        });

      var ctx = document.getElementById(currentID).getContext("2d");
  //TODO: provide inline comments for options
  hbChart = new Chart(ctx, {
    type: 'groupableHBar',                                //
    data: data,
          options: {
          tooltips: {
               enabled: false
          },
          chartArea: {
					backgroundColor: 'black'
				},
        onClick: graphClickEvent,
        lineAtIndex: 148,  // now line is drawn at this point, have to get the now data from longest bar
        events: ['click'],
          legend: {
            display: false,
          },
          title: {
            display: true,
            position:'top',
            text: 'Version Increment January 1st to june 30th',
            fontSize:16,
            fontStyle:'normal',
            fontColor: '#d3d3d3'
          },
          scales: {
            yAxes: [{
              stacked: true,
              barThickness: 25,
              barPercentage: 1,
              categoryPercentage: 0.8,
              ticks: {
              fontColor: "black",
              fontSize:14
            },
              type: 'category',
              id: 'y-axis-0',
              gridLines: {
                display: true,
                drawTicks: true,
                color: "#383838"
              },
              scaleLabel: {
                display: true,
                labelString: 'Teams',
              }
            },
          ],
            xAxes: [{
              stacked: true,
              type: 'linear',
              position:'top',
              ticks: {
                callback: function(dataLabel, index) {
                  if(index != 0)
                  return index % 1 === 0 ? "Phase"+ " "+ (index) : null;
                },
                fontColor: "black",
                stepSize: 40,
                stepValue: 40,
                max: 160
              },
              gridLines: {
                display: true,
                drawTicks: true,
                offsetGridLines:false,
                color: "#383838"
              },
              id: 'x-axis-0',
              display: true,
            },
            {
              stacked: true,
              position: 'top',
              type: 'linear',
              ticks: {
                beginAtZero:true
              },
              id: 'x-axis-1',
              gridLines: {
                display: true,
                drawTicks: true,
              },
              display: false,
            },
             {
              stacked: true,
              position: 'top',
              type: 'linear',
              ticks: {
                beginAtZero:true
              },
              id: 'x-axis-2',
              gridLines: {
                display: true,
                drawTicks: true,
              },
              display: false
            },
             {
              stacked: true,
              position: 'top',
              type: 'linear',
              ticks: {
                beginAtZero:true
              },
              id: 'x-axis-3',
              gridLines: {
                display: true,
                drawTicks: true,
              },
              display: false
            },
            {
              stacked: true,
              position: 'top',
              type: 'linear',
              ticks: {
                beginAtZero:true
              },
              id: 'x-axis-4',
              gridLines: {
                display: true,
                drawTicks: true,
              },
              display: false
            },
            {
              stacked: true,
              position: 'top',
              type: 'linear',
              ticks: {
                beginAtZero:true
              },
              id: 'x-axis-5',
              gridLines: {
                display: true,
                drawTicks: true,
              },
              display: false
            }]
          }
        }
  });

    Chart.plugins.register({
      beforeDraw: function(chartInstance) {
        var ctx = chartInstance.chart.ctx;
        ctx.fillStyle = '#3D3D76';
        ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
      }
    })

  function graphClickEvent(evt){

		var activePoint = hbChart.getElementAtEvent(evt)[0];
    if(activePoint != undefined){
      
      var selectedData =  activePoint._chart.config.data.labels[activePoint._index]
      saveCurrentChartData(selectedData);

      var selected_stack = activePoint._chart.config.data.datasets[activePoint._datasetIndex].stack;
      var filteredStackResult = activePoint._chart.config.data.datasets.filter(function (stack_filter) { return stack_filter.stack == selected_stack; });
      var filteredLabelResult = filteredStackResult.filter(function (filter_label) { return filter_label.label == ""; });
      if( filteredLabelResult[0].backgroundColor[activePoint._index] != undefined && filteredLabelResult[0].backgroundColor[activePoint._index] === "rgba(255, 51, 51, 0.5)"){
        filteredLabelResult[0].backgroundColor[activePoint._index] = "#3D3D76";
        hbChart.update();
      } else {
        filteredLabelResult[0].backgroundColor[activePoint._index] = "rgba(255, 51, 51, 0.5)";
        hbChart.update();
      }
    }
	};
    ///////////////////////////////////////////////////////////////////////////////////////
    // Below code is for showing the white vertical line which represents the current date.

    var originalLineDraw = Chart.controllers.groupableHBar.prototype.draw;
    Chart.helpers.extend(Chart.controllers.groupableHBar.prototype, {

      draw: function () {
        originalLineDraw.apply(this, arguments);

        var chart = this.chart;
        var ctx = chart.chart.ctx;

        var index = chart.config.options.lineAtIndex;
        if (index) {

          var xaxis = chart.scales['x-axis-0'];
          var yaxis = chart.scales['y-axis-0'];

          var x1 = xaxis.getPixelForValue(index);
          var y1 = 0 + 30;

          var x2 = xaxis.getPixelForValue(index);
          var y2 = yaxis.height + 40;

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.strokeStyle = '#d3d3d3';
          ctx.setLineDash([7, 3]);
          ctx.lineTo(x2, y2);
          ctx.stroke();
          ctx.restore();

          // Below code is for showing 'now' text for the white vertical line.

          ctx.textAlign = 'center';
          ctx.fillStyle = '#d3d3d3';
          ctx.font = "normal 14px Courier New";
          ctx.fillText("now", x1, y2 + 12);
        }
      }
    });
}

      this.render = function (element) {
          $(element).append(hbChartElement);
          setBlocks(currentSettings.blocks);
          createhbChart();
          //saveCurrentChartData("Pravin Kumar");
      };

      this.onSettingsChanged = function (newSettings) {
          if (_.isNull(hbChart)) {
              currentSettings = newSettings;
              return;
          }
          setBlocks(newSettings.blocks);

          var updateCalculate = false;
          currentSettings = newSettings;

          return updateCalculate;
      };

      var oldValue;
      this.onCalculatedValueChanged = function (settingName, newValue) {
          //if (!_.isNull(hbChart))
          //console.log("data in HB Chart = ", newValue );
          //hbChart.refresh(Number(newValue));

          if(oldValue != newValue) {
            if(newValue == "India")
                data = data1;
            else if(newValue == "China")
                data = data2;
            else
                data = data3;

                createhbChart();
                //hbChart.update();
                oldValue = newValue;

          }
      };

      this.onDispose = function () {
          if (!_.isNull(hbChart)) {
            hbChart.destroy();
            hbChart = null;
          }
      };

      this.onSizeChanged = function () {
          if (!_.isNull(hbChart))
          hbChart.resize();
      };

      this.getHeight = function () {
          return currentSettings.blocks;
      };

      this.onSettingsChanged(settings);
  };



  freeboard.loadWidgetPlugin({
      type_name: 'HB_CHART',
      display_name: $.i18n.t('EM Horizontal Bar Chart'),
      //description: $.i18n.t('plugins_wd.gauge.description'),
      external_scripts : [
          'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.bundle.min.js'  //For chart js lib
      ],
      settings: [
          {
              name: 'title',
              display_name: $.i18n.t('My HB Chart'),
              validate: 'optional,maxSize[100]',
              type: 'text',
              description: $.i18n.t('plugins_wd.gauge.title_desc')
          },
           {
                name: 'blocks',
                display_name: $.i18n.t('plugins_wd.gauge.blocks'),
                validate: 'required,custom[integer],min[4],max[10]',
                type: 'number',
                style: 'width:100px',
                default_value: 10,
                description: $.i18n.t('plugins_wd.gauge.blocks_desc')
            },
            {
              name: 'chart_width',
              display_name: $.i18n.t('plugins_wd.gauge.gauge_width'),
              type: 'number',
              style: 'width:100px',
              validate: 'required,custom[integer],min[0],max[100]',
              default_value: 50,
              description: $.i18n.t('plugins_wd.gauge.gauge_width_desc')
          },
          {
            name: 'value',
            display_name: $.i18n.t('plugins_wd.text.value'),
            validate: 'optional,maxSize[2000]',
            type: 'calculated',                               //calls onCalculatedValueChange() on change
            description: $.i18n.t('plugins_wd.text.value_desc')
          },
          {
            name: 'chartData',
            display_name: 'Current Data',
            type: 'text',
            description: 'Store the current chart data into specified session variable.'
          }
      ],
      newInstance: function (settings, newInstanceCallback) {
          newInstanceCallback(new hbChartWidget(settings));
      }
  });
}());
