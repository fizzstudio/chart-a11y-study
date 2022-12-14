const alluvialProps = {
	accessibility: {
		"includeDataKeyNames": true,
		"contextExplanation": "This example of an alluvial diagram was selected through example list on the sidebar.",
		"purpose": "Alluvial diagram showing value mapping between Region and Ranking.",
		"structureNotes": "Links are defined to visually map data values between Regions and Rankings.",
		"elementsAreInterface": false,
		"disableValidation": true
	},
	mainTitle: "Region to rank mapping",
	linkData: [
		{
			"source": "Region 1",
			"target": "High",
			"value": 50
		},
		{
			"source": "Region 1",
			"target": "Medium",
			"value": 100
		},
		{
			"source": "Region 1",
			"target": "Low",
			"value": 500
		},
		{
			"source": "Region 2",
			"target": "High",
			"value": 100
		},
		{
			"source": "Region 2",
			"target": "Medium",
			"value": 400
		},
		{
			"source": "Region 2",
			"target": "Low",
			"value": 50
		},
		{
			"source": "Region 3",
			"target": "High",
			"value": 100
		},
		{
			"source": "Region 3",
			"target": "Medium",
			"value": 500
		},
		{
			"source": "Region 3",
			"target": "Low",
			"value": 50
		},
		{
			"source": "Region 4",
			"target": "High",
			"value": 3148
		},
		{
			"source": "Region 4",
			"target": "Medium",
			"value": 7279
		},
		{
			"source": "Region 4",
			"target": "Low",
			"value": 3684
		},
		{
			"source": "Region 5",
			"target": "High",
			"value": 3148
		},
		{
			"source": "Region 5",
			"target": "Medium",
			"value": 7279
		},
		{
			"source": "Region 5",
			"target": "Low",
			"value": 3684
		}
	],
	nodeData: [
		{
			"id": "Region 1"
		},
		{
			"id": "Region 2"
		},
		{
			"id": "Region 3"
		},
		{
			"id": "Region 4"
		},
		{
			"id": "Region 5"
		},
		{
			"id": "High"
		},
		{
			"id": "Medium"
		},
		{
			"id": "Low"
		}
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
	uniqueID: "alluvial-diagram",
  selectionLabel: "Seventh Chart",
}