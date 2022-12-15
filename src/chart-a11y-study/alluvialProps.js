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
	mainTitle: "Introductory and advanced class enrollment",
  subTitle: "This alluvial flow chart shows how many students were enrolled in introductory classes, and which advanced course they enrolled in.",
	linkData: [
		{
			"source": "English",
			"target": "Poetry",
			"value": 100
		},
		{
			"source": "English",
			"target": "Technical Writing",
			"value": 50,
      "Note": "Lowest value"
		},
		{
			"source": "English",
			"target": "Creative Writing",
			"value": 220,
      "Note": "Highest value"
		},
		{
			"source": "Science",
			"target": "Chemistry",
			"value": 80
		},
		{
			"source": "Science",
			"target": "Biology",
			"value": 110
		},
		{
			"source": "Science",
			"target": "Physics",
			"value": 50,
      "Note": "Lowest value"
		},
		{
			"source": "Science",
			"target": "Technical Writing",
			"value": 57
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
	sourceAccessor: "source",
	targetAccessor: "target",
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