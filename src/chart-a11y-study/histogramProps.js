const histogramProps = {
  chartType: 'bar-chart',
	accessibility: {
		"includeDataKeyNames": true,
		"contextExplanation": "This example of a histogram was selected through example list on the sidebar.",
		"structureNotes": "This histogram shows the distribution of heights (in cm) for 30 people.",
		"purpose": "This histogram shows the distribution of heights (in cm) for 30 people.",
		"elementsAreInterface": true,
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
	mainTitle: "Heights of 30 people",
	subTitle: ".",
	data: [
		{
			"height": "139.5 to 149.5",
			"value": 6,
			// "region": "Region 1"
		},
		{
			"height": "149.5 to 159.5",
			"value": 9,
			// "region": "Region 1"
		},
		{
			"height": "159.5 to 169.5",
			"value": 7,
			// "region": "Region 2"
		},
		{
			"height": "169.5 to 179.5",
			"value": 5,
			// "region": "Region 2"
		},
		{
			"height": "179.5 to 189.5",
			"value": 3,
			// "region": "Region 1"
		},
		{
			"height": "189.5 to 199.5",
			"value": 1,
			// "region": "Region 1"
		}
	],
	ordinalAccessor: "height",
	valueAccessor: "value",
	// groupAccessor: "region",
	tooltipLabel: {
		"labelAccessor": [
			// "region",
			"height",
			"value"
		],
		"labelTitle": [
			// "Region",
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
	colorPalette: "categorical",
	referenceStyle: {
		"color": "categorical_blue",
		"strokeWidth": "1px",
		"opacity": 0.8,
		"dashed": "3 2"
	},
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
	uniqueID: "histogram",
  selectionLabel: "Fourth Chart",
}