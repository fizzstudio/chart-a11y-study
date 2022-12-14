const lineProps = {
  uniqueID: 'line-chart',
  selectionLabel: "Second Chart",
  accessibility: {
    elementDescriptionAccessor: 'Note',
    elementsAreInterface: true,
    statisticalNotes: 'Line one has an ascending trend. Line two has a steady trend.',
    disableValidation: true
  },
  mainTitle: 'Sales in Related Peer Products "Chairs" and "Tables"',
  subTitle: `This is a line chart demonstrating the sales patterns of two different products over the year 2021.`,
  data: [
    { Date: 'Jan', Line: 'Chairs', Value: 10, Note: 'Lowest Value. Click space for trend information.', Memo: 'This line has a generally upward trend.' },
    { Date: 'Feb', Line: 'Chairs', Value: 15 },
    { Date: 'Mar', Line: 'Chairs', Value: 12 },
    { Date: 'Apr', Line: 'Chairs', Value: 16 },
    { Date: 'May', Line: 'Chairs', Value: 18 },
    { Date: 'Jun', Line: 'Chairs', Value: 23 },
    { Date: 'Jul', Line: 'Chairs', Value: 34 },
    { Date: 'Aug', Line: 'Chairs', Value: 51 },
    { Date: 'Sep', Line: 'Chairs', Value: 86, Note: 'Click space for more information', Memo: 'Intersects other line, ascending' },
    { Date: 'Oct', Line: 'Chairs', Value: 143 },
    { Date: 'Nov', Line: 'Chairs', Value: 228 },
    { Date: 'Dec', Line: 'Chairs', Value: 386, Note: 'Highest Value. Click space for trend information.', Memo: 'This line has a generally upward trend.' },
    { Date: 'Jan', Line: 'Tables', Value: 86, Note: 'Click space for trend information.', Memo: 'This line has a generally stable trend.' },
    { Date: 'Feb', Line: 'Tables', Value: 85 },
    { Date: 'Mar', Line: 'Tables', Value: 89, Note: 'Highest Value' },
    { Date: 'Apr', Line: 'Tables', Value: 83 },
    { Date: 'May', Line: 'Tables', Value: 78, Note: 'Lowest Value' },
    { Date: 'Jun', Line: 'Tables', Value: 82 },
    { Date: 'Jul', Line: 'Tables', Value: 84 },
    { Date: 'Aug', Line: 'Tables', Value: 88 },
    { Date: 'Sep', Line: 'Tables', Value: 85, Note: 'Click space for more information', Memo: 'Intersects other line, descending' },
    { Date: 'Oct', Line: 'Tables', Value: 85 },
    { Date: 'Nov', Line: 'Tables', Value: 83 },
    { Date: 'Dec', Line: 'Tables', Value: 86, Note: 'Click space for trend information.', Memo: 'This line has a generally stable trend.' }
  ],
  ordinalAccessor: 'Date',
  valueAccessor: 'Value',
  seriesAccessor: 'Line',
  colorPalette: 'categorical',
  height: 430,
  width: 800,
  padding: { top: 20, bottom: 40, right: 60, left: 60 },
  yAxis: { label: '', visible: true, gridVisible: true },
  xAxis: { label: '', visible: true },
  showBaselineX: false,
  dataLabel: { visible: true, placement: 'auto' },
}