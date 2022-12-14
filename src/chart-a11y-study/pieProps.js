const pieProps = {
	accessibility: {
		"includeDataKeyNames": true,
		"contextExplanation": "This example of a pie chart was selected through example list on the sidebar.",
		"purpose": "Pie chart depicting share of total across key categories.",
		"structureNotes": "A different color and pattern is used to represent each category.",
		"statisticalNotes": "This chart is using dummy data. The spread of share is relatively even across the groups.",
		"elementsAreInterface": false,
		"disableValidation": true
	},
	centerTitle: "Share",
	centerSubTitle: "of Market",
	mainTitle: "Group share of market",
	data: [
		{
			"label": "Group A",
			"value": 43000,
			"location": "US"
		},
		{
			"label": "Group C",
			"value": 32000,
			"location": "US"
		},
		{
			"label": "Group D",
			"value": 25000,
			"location": "US"
		},
		{
			"label": "Group B",
			"value": 52000,
			"location": "Region 4"
		},
		{
			"label": "Group E",
			"value": 31000,
			"location": "Region 4"
		}
	],
	dataLabel: {
		"visible": true,
		"placement": "outside",
		"labelAccessor": "value",
		"format": "normalized"
	},
	padding: {
		"top": 10,
		"bottom": 20,
		"right": 40,
		"left": 80
	},
	ordinalAccessor: "label",
	valueAccessor: "value",
	interactionKeys: [
		"location"
	],
	colorPalette: "categorical",
	tooltipLabel: {
		"labelAccessor": [
			"label",
			"location",
			"value",
			"value"
		],
		"labelTitle": [
			"",
			"Region",
			"Value%",
			"Value"
		],
		"format": [
			"",
			"",
			"normalized",
			"$0,0.0[a]"
		]
	},
	sortOrder: "default",
	cursor: "pointer",
	uniqueID: "pie-chart",
  selectionLabel: "Third Chart",
}