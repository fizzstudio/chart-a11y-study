const histogramProps = {
  chartType: 'bar-chart',
  uniqueID: "histogram",
  selectionLabel: "Fourth Chart",
  mainTitle: "Histogram showing heights of 30 people",
	subTitle: "The heights of 30 people, in centimeters",
	accessibility: {
    elementDescriptionAccessor: 'Note',
    elementsAreInterface: true,
		"includeDataKeyNames": true,
		"contextExplanation": "This example of a histogram was selected through example list on the sidebar.",
		"structureNotes": "This histogram shows the distribution of heights (in cm) for 30 people.",
		"purpose": "This histogram shows the distribution of heights (in cm) for 30 people.",
		"disableValidation": true
	},
	xAxis: {
		"visible": true,
		"gridVisible": false,
		"label": "Heights",
		"format": "0,0[a]"
	},
	yAxis: {
		"visible": true,
		"gridVisible": true,
		"label": "",
		"format": ""
	},
	data: [
		{
			"height": "139.5 to 149.5",
			"value": 6,
		},
		{
			"height": "149.5 to 159.5",
			"value": 9, 
      Note: 'Highest Value',
		},
		{
			"height": "159.5 to 169.5",
			"value": 7,
		},
		{
			"height": "169.5 to 179.5",
			"value": 5,
		},
		{
			"height": "179.5 to 189.5",
			"value": 3,
		},
		{
			"height": "189.5 to 199.5",
			"value": 1,
      Note: 'Lowest Value',
		}
	],
	ordinalAccessor: "height",
	valueAccessor: "value",
	// groupAccessor: "region",
	tooltipLabel: {
		"labelAccessor": [
			"height",
			"value"
		],
		"labelTitle": [
			"Height",
			"Amount"
		],
		"format": [
			"",
			"",
			// "$0,0[a]"
		]
	},
	padding: {
		"top": 20,
		"bottom": 60,
		"right": 100,
		"left": 80
	},
	layout: "vertical",
	sortOrder: "",
	legend: {
		"visible": false,
		"interactive": false
	},
  colors: [
		"grey"
	],
	dataLabel: {
		"visible": true,
		"placement": "right",
		"labelAccessor": "value",
		"format": "0,0[a]"
	},
	// referenceLines: [
	// 	{
	// 		"label": "Average",
	// 		"labelPlacementHorizontal": "left",
	// 		"labelPlacementVertical": "top",
	// 		"value": 57
	// 	}
	// ],
	clickStyle: {
		"color": "",
		"stroke": "categorical_blue",
		"strokeWidth": 2,
		"dashed": "4 2"
	},
	hoverStyle: {
		"color": "",
		"strokeWidth": 2
	},
	cursor: "pointer",
	interactionKeys: [
		"region"
	],
  height: 430,
  width: 800,
}