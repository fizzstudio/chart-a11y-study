const barProps = {
  mainTitle: `Products in all Regions, 2020`,
  subTitle:
    'This chart shows all products sales across every region. Values are in millions of dollars.',
  data: [
    { Product: 'Chairs', Region: 'West', Value: 8 },
    { Product: 'Notepads', Region: 'South', Value: 16 },
    { Product: 'Pens', Region: 'Northeast', Value: 15 },
    { Product: 'Paper', Region: 'South', Value: 28 },
    { Product: 'Envelopes', Region: 'West', Value: 7 },
    { Product: 'Labels', Region: 'Non-contiguous', Value: 8 },
    { Product: 'Binders', Region: 'Midwest', Value: 14 },
    { Product: 'Art', Region: 'Northeast', Value: 15 },
    { Product: 'Fasteners', Region: 'West', Value: 22 },
    { Product: 'Accessories', Region: 'Midwest', Value: 18 },
    { Product: 'Pencils', Region: 'West', Value: 20 },
    { Product: 'Erasers', Region: 'Northeast', Value: 26 },
    { Product: 'Cleaners', Region: 'South', Value: 22 },
    { Product: 'Sticky Notes', Region: 'Northeast', Value: 14 },
    { Product: 'Paperclips', Region: 'Non-contiguous', Value: 13 }
  ],
  colorPalette: 'categorical',
  height: 450,
  padding: { top: 100, bottom: 50, right: 20, left: 20 },
  ordinalAccessor: 'Product',
  valueAccessor: 'Value',
  groupAccessor: 'Region',
  yAxis: { visible: false, gridVisible: false },
  xAxis: { label: '', visible: true },
  sortOrder: '',
  accessibility: {
    elementDescriptionAccessor: 'Note',
    executiveSummary: 'Product Paper is the Highest Value, Envelopes is the Lowest.',
    statisticalNotes: 'Chart is unsorted.',
    disableValidation: true
  },
  uniqueID: 'bar-chart',
  selectionLabel: "First Chart",
}