const pieProps = {
  uniqueID: "pie-chart",
  selectionLabel: "Third Chart",
	accessibility: {
    elementDescriptionAccessor: 'Note',
    elementsAreInterface: true,
		"includeDataKeyNames": true,
		"contextExplanation": "This example of a pie chart was selected through example list on the sidebar.",
		"purpose": "Pie chart depicting share of total across key categories.",
		"structureNotes": "A different color and pattern is used to represent each category.",
		"statisticalNotes": "This chart is using dummy data. The spread of share is relatively even across the groups.",
		"disableValidation": true
	},
	mainTitle: "Company share of market",
  subTitle: `A pie chart showing market share of several companies from different North American companies.`,
	centerTitle: "Share",
	centerSubTitle: "of Market",
	data: [
		{
			"label": "Company A",
			"value": 35000,
			"location": "US",
      "Note": "Click space for details on this country.",
      "Memo": "Total percentage for all US companies is 45.4%. Total revenue for all US companies is $70,000."
		},
		{
			"label": "Company B",
			"value": 32000,
			"location": "Mexico",
      "Note": "Click space for details on this country.",
      "Memo": "Total percentage for all Mexican companies is 20.8%. Total revenue for all Mexican companies is $32,000."
		},
		{
			"label": "Company C",
			"value": 15000,
			"location": "US",
      "Note": "Lowest value. Click space for details on this country.",
      "Memo": "Total percentage for all US companies is 45.4%. Total revenue for all US companies is $70,000."
		},
		{
      "label": "Company D",
			"value": 52000,
			"location": "Canada",
      "Note": "Highest value. Click space for details on this country.",
      "Memo": "Total percentage for all Canadian companies is 33.8%. Total revenue for all Canadian companies is $52,000."
		},
		{
      "label": "Company E",
			"value": 20000,
			"location": "US",
      "Note": "Click space for details on this country.",
      "Memo": "Total percentage for all US companies is 45.4%. Total revenue for all US companies is $70,000."
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
}