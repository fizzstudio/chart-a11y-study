const alluvialProps = {
  uniqueID: "alluvial-diagram",
  selectionLabel: "Seventh Chart",
	accessibility: {
    elementDescriptionAccessor: 'Note',
    elementsAreInterface: true,
		"includeDataKeyNames": true,
		"contextExplanation": "This example of an alluvial diagram was selected through example list on the sidebar.",
		"purpose": "Alluvial diagram showing value mapping between Region and Ranking.",
		"structureNotes": "Links are defined to visually map data values between Regions and Rankings.",
		"disableValidation": true
	},
	mainTitle: "Region to rank mapping",
	linkData: [
		{
			"intro course": "English",
			"advanced course": "Poetry",
			"value": 100
		},
		{
			"intro course": "English",
			"advanced course": "Technical Writing",
			"value": 50
		},
		{
			"intro course": "English",
			"advanced course": "Creative Writing",
			"value": 220
		},
		{
			"intro course": "Science",
			"advanced course": "Chemistry",
			"value": 80
		},
		{
			"intro course": "Science",
			"advanced course": "Biology",
			"value": 110
		},
		{
			"intro course": "Science",
			"advanced course": "Physics",
			"value": 50
		},
		{
			"intro course": "Science",
			"advanced course": "Technical Writing",
			"value": 70
		},
	],
	nodeData: [
		{
			"id": "English"
		},
		{
			"id": "Science"
		},
		{
			"id": "Creative Writing"
		},
		{
			"id": "Poetry"
		},
		{
			"id": "Technical Writing"
		},
		{
			"id": "Physics"
		},
    {
			"id": "Chemistry"
		},
    {
			"id": "Biology"
		},
	],
	sourceAccessor: "intro course",
	targetAccessor: "advanced course",
	valueAccessor: "value",
	nodeIDAccessor: "id",
	dataLabel: {
		"visible": true,
		"placement": "auto",
		"collisionPlacement": "all"
	},
	linkConfig: {
		"visible": true,
		"fillMode": "source",
		"opacity": 0.8
	},
	nodeConfig: {
		"fill": true,
		"padding": 5,
		"compare": false,
		"width": 12,
		"alignment": ""
	},
	padding: {
		"top": 40,
		"bottom": 0,
		"right": 10,
		"left": 120
	},
	cursor: "pointer",
	colors: [
		"#7c99b1",
		"#cacae7",
		"#abb798",
		"#a19491",
		"#e7c0b8",
		"#717171",
		"#717171",
		"#717171"
	],
}