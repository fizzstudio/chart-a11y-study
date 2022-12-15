const scatterProps = {
  uniqueID: "scatter-plot",
  selectionLabel: "Fifth Chart",
	accessibility: {
    elementDescriptionAccessor: 'Note',
    elementsAreInterface: true,
		"includeDataKeyNames": true,
		"contextExplanation": "This example of a scatter plot was selected through example list on the sidebar.",
		"purpose": "Scatter plot with items plotted based on Number of Absences and Grade Point Average.",
		"statisticalNotes": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		"disableValidation": true
	},
  mainTitle: "Student Grade Point Average by Number of Absences",
	subTitle: "Scatter plot showing a comparison of Number of Absences and Grade Point Average.",
	xAxis: {
		"visible": true,
		"gridVisible": false,
		"label": "Number of Absences",
		"format": "0.[0][a]"
	},
	yAxis: {
		"visible": true,
		"gridVisible": true,
		"label": "Grade Point Average",
		"format": "0.0[a]"
	},
	data: [
		{
			"Grade Point Average": 2.8,
			"Number of Absences": 16,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
    
    {
			"Grade Point Average": 3.2,
			"Number of Absences": 2,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
		{
			"Grade Point Average": 3.91,
			"Number of Absences": 4, 
      "Note": 'Highest Value. Click space for trend information',
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
		{
			"Grade Point Average": 1.4,
			"Number of Absences": 34,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
		{
			"Grade Point Average": 3.7,
			"Number of Absences": 6,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
		{
			"Grade Point Average": 3.9,
			"Number of Absences": 1,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
		{
			"Grade Point Average": 2.7,
			"Number of Absences": 13,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
		{
			"Grade Point Average": 2.5,
			"Number of Absences": 1,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},

    {
			"Grade Point Average": 3.28,
			"Number of Absences": 5,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
		{
			"Grade Point Average": 2.9,
			"Number of Absences": 24,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
		{
			"Grade Point Average": 2.8,
			"Number of Absences": 26,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
		{
			"Grade Point Average": 3.3,
			"Number of Absences": 18,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},

		{
			"Grade Point Average": 2.4,
			"Number of Absences": 28,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
		{
			"Grade Point Average": 2.3,
			"Number of Absences": 28,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},

		{
			"Grade Point Average": 1,
			"Number of Absences": 33, 
      "Note": 'Lowest Value. Click space for trend information',
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},

		{
			"Grade Point Average": 2.8,
			"Number of Absences": 35,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
		{
			"Grade Point Average": 1.4,
			"Number of Absences": 36,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},
    {
			"Grade Point Average": 1.3,
			"Number of Absences": 38,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},


		{
			"Grade Point Average": 3.19,
			"Number of Absences": 10,
      "Note": "Click space for trend information",
      "Memo": "There is a descending trend, with the highest GPAs having the least absences and the lowest GPAs having the most absences.",
		},

	],
	xAccessor: "Number of Absences",
	yAccessor: "Grade Point Average",
	colors: [
		"base_grey"
	],
	dotSymbols: [
		"circle"
	],
	tooltipLabel: {
		"labelAccessor": [
			"Number of Absences",
			"Grade Point Average"
		],
		"labelTitle": [
			"Number of Absences",
			"Grade Point Average"
		],
		"format": [
			"0,0.[0][a]",
			"0.0[0][a]"
		]
	},
	dataLabel: {
		"visible": false,
		"placement": "auto",
		"format": "0.0[0][a]"
	},
	legend: {
		"visible": false
	},
}