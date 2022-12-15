const heatProps = {
  uniqueID: 'heat-map',
  selectionLabel: "Sixth Chart",
  accessibility: {
    elementDescriptionAccessor: 'Note',
    executiveSummary: 'Product Notepads has the highest approval rate correlation with the user group Northeast.',
    disableValidation: true,
    elementsAreInterface: true
  },
  mainTitle: 'Comparing how user groups correlate to approval rates of product types',
  subTitle: 'A heat map showing correlation between products and user approval. A high correlation value (close to 1) indicates that these users have a high approval rate of that product. A low correlation value (close to -1) indicates a negative approval rate of those products.',
  data: [
    { Product: 'Chairs', 'User group': 'Northwest', Value: 0.74, Note: 'High approval correlation' },
    { Product: 'Tables', 'User group': 'Northwest', Value: 0.43, Note: 'Medium approval correlation' },
    { Product: 'Notepads', 'User group': 'Northwest', Value: 0.33, Note: 'Medium approval correlation' },
    { Product: 'Pens', 'User group': 'Northwest', Value: -0.55, Note: 'Low approval correlation' },
    { Product: 'Chairs', 'User group': 'Midwest', Value: 0.81, Note: 'High approval correlation' },
    { Product: 'Tables', 'User group': 'Midwest', Value: 0.09, Note: 'Low approval correlation' },
    { Product: 'Notepads', 'User group': 'Midwest', Value: -0.25, Note: 'Low approval correlation' },
    { Product: 'Pens', 'User group': 'Midwest', Value: -0.45, Note: 'Low approval correlation' },
    { Product: 'Chairs', 'User group': 'Northeast', Value: 0.23, Note: 'Medium approval correlation' },
    { Product: 'Tables', 'User group': 'Northeast', Value: -0.25, Note: 'Low approval correlation' },
    { Product: 'Notepads', 'User group': 'Northeast', Value: 0.97, Note: 'High approval correlation' },
    { Product: 'Pens', 'User group': 'Northeast', Value: -0.76, Note: 'Very low approval correlation' },
    { Product: 'Chairs', 'User group': 'South', Value: -0.9, Note: 'Lowest approval correlation' },
    { Product: 'Tables', 'User group': 'South', Value: -0.52, Note: 'Low approval correlation' },
    { Product: 'Notepads', 'User group': 'South', Value: -0.69, Note: 'Very low approval correlation' },
    { Product: 'Pens', 'User group': 'South', Value: 0.02, Note: 'Low approval correlation' }
  ],
  height: 450,
  width: 500,
  padding: { top: 50, bottom: 50, right: 50, left: 100 },
  xAccessor: 'Product',
  yAccessor: 'User group',
  valueAccessor: 'Value',
  colorPalette: 'sequential_grey', // sequential_grey
  legend: { visible: true, type: 'default' },
  yAxis: { visible: true, label: '' },
  xAxis: { label: '', visible: true },
  tooltipLabel: {
    labelAccessor: ['Product', 'User group', 'Value'],
    labelTitle: ['Product', 'User group', 'Value'],
    format: ''
  },
  dataLabel: {
		"visible": true,
		"placement": "auto",
		"format": "0.0[0][a]"
	},
  clickStyle: { strokeWidth: '3px' },
}