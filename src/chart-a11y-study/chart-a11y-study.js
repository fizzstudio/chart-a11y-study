const styleInnerHTML = `
.vcl-accessibility-instructions {
    position: relative !important;
}
.screen-reader-info {
    position: relative !important;
    left: 0px !important;
    top: 0px !important;
    width: auto !important;
    height: auto !important;
    overflow: auto !important;
}
`

const sparklineFix = (d) => {
  document.getElementById('sparkline').querySelectorAll('circle').forEach(circle => {
    circle.removeAttribute('tabindex')
    circle.setAttribute('aria-hidden', 'true')
  })
}

const heatClick = event => {
  const dataDetail = event.detail.data;
  // console.log(dataDetail);

  // Product: "Notepads", "User group": "Northeast", Value: 0.97
  let message = null;

  event.target.clickHighlight =
    event.target.clickHighlight && event.target.clickHighlight[0] === dataDetail ? [] : [dataDetail];

  if (!event.target.clickHighlight.length) {
    message = 'Selected data has been removed.';
  } else {
    if (event.detail.data.Value > 0.95) {
      message = 'Highest approval correlation has been selected. '
      message += `Product: ${dataDetail.Product}. User group: ${dataDetail['User group']}. Value: ${dataDetail.Value}. `
    } else {
      message = `${dataDetail.Note} has been selected.`;
    }
  }

  sendMessage(message);
};


let activeItemDetails = null;
const selectItem = event => {
  // console.log('selectItem');
  let message = null;

  const dataDetail = event.detail.data;
  // console.log(dataDetail);
  if (!activeItemDetails) {
    activeItemDetails = dataDetail;
    message = `Selected Product ${dataDetail.Product}, Region ${dataDetail.Region}.`
  } else {
    // console.log('activeItemDetails', activeItemDetails); 
    // console.log('dataDetail', dataDetail); 
    message = `Selected Product ${dataDetail.Product}, Region ${dataDetail.Region}. `
    message += `Comparison with Product ${activeItemDetails.Product}, Region ${activeItemDetails.Region}: `
    message += `Sum of values is ${activeItemDetails.Value + dataDetail.Value}. `
    message += `Difference of values is ${activeItemDetails.Value - dataDetail.Value}. `

    activeItemDetails = dataDetail;
  }

  sendMessage(message);
};


const selectHistogram = event => {
  // console.log('selectItem');
  let message = null;

  const dataDetail = event.detail.data;
  // console.log(dataDetail);
  if (!activeItemDetails) {
    activeItemDetails = dataDetail;
    message = `Selected Product ${dataDetail.height}.`
  } else {
    // console.log('activeItemDetails', activeItemDetails); 
    // console.log('dataDetail', dataDetail); 
    message = `Selected Product ${dataDetail.height}. `
    message += `Comparison with Product ${activeItemDetails.height}: `
    message += `Sum of values is ${activeItemDetails.value + dataDetail.value}. `
    message += `Difference of values is ${activeItemDetails.value - dataDetail.value}. `

    activeItemDetails = dataDetail;
  }

  sendMessage(message);
};

const genericClick = event => {
  // console.log('genericClick');
  const dataDetail = event.detail.data;
  // console.log(dataDetail);
  const memo = dataDetail.Memo;

  sendMessage(memo);


  // const clickArray = [...(event.target.clickHighlight || [])]
  // const i = clickArray.indexOf(event.detail.data)
  // if (i < 0) {
  //   clickArray.push(event.detail.data);
  //   // console.log('genericClick', event.detail.data);
  // } else {
  //   clickArray.splice(i, 1)
  // }
  // event.target.clickHighlight = clickArray
  // document.getElementById('aria-live').innerHTML = `${clickArray.length} clicked item${clickArray.length !== 1 ? 's' : ''}.`
};

const genericHover = event => {
  event.target.hoverHighlight = event.detail.data;
};

const genericMouseOut = event => {
  event.target.hoverHighlight = '';
};



const ariaLiveOutput = document.getElementById('aria-live');
function sendMessage (message) {
  ariaLiveOutput.textContent = ' ';

  if (message) {
    setTimeout(() => {
      ariaLiveOutput.textContent = message;
    }, 300);
  }
}


const chartTypes = {
  'bar-chart': barProps,
  'line-chart': lineProps,
  'pie-chart': pieProps,
  'histogram': histogramProps,
  'scatter-plot': scatterProps,
  'heat-map': heatProps,
  'alluvial-diagram': alluvialProps
};

const events = {
  'bar-chart': {
    // clickEvent: genericClick,
    clickEvent: selectItem,
    hoverEvent: genericHover,
    mouseOutEvent: genericMouseOut
  },
  'line-chart': {
    clickEvent: genericClick,
    hoverEvent: genericHover,
    mouseOutEvent: genericMouseOut
  },
  'pie-chart': {
    clickEvent: genericClick,
    hoverEvent: genericHover,
    mouseOutEvent: genericMouseOut
  },
  'histogram': {
    // clickEvent: genericClick,
    clickEvent: selectHistogram,
    hoverEvent: genericHover,
    mouseOutEvent: genericMouseOut
  },
  'scatter-plot': {
    clickEvent: genericClick,
    hoverEvent: genericHover,
    mouseOutEvent: genericMouseOut
  },
  'heat-map': {
    clickEvent: heatClick,
    hoverEvent: genericHover,
    mouseOutEvent: genericMouseOut
  },
  'alluvial-diagram': {
    clickEvent: genericClick,
    hoverEvent: genericHover,
    mouseOutEvent: genericMouseOut
  },
}

const chartConstructor = (chartTag, id) => {
  // console.group(chartTag);
  let chart = document.getElementById(id);
  if (!chart) {
    // console.log('chartTag', chartTag);
    chart = document.createElement(chartTypes[chartTag].chartType || chartTag);
  }
  // chart.classList.add('hidden')
  // chart.classList.add('environment')
  Object.keys(chartTypes[chartTag]).forEach(prop => {
    // console.log('prop', prop);
    let propToTransfer = chartTypes[chartTag][prop]
    if (chartTypes[chartTag][prop][0] && chartTypes[chartTag][prop][0].date) {
      propToTransfer = []
      chartTypes[chartTag][prop].forEach(d => {
        let newDatum = { ...d }
        newDatum.date = new Date(d.date)
        propToTransfer.push(newDatum)
      })
    }
    chart[prop] = propToTransfer;
  });
  
  if (events[chartTag]) {
    Object.keys(events[chartTag]).forEach(key => {
      chart.addEventListener(key, events[chartTag][key]);
    });
  }

  // console.groupEnd();

  return chart;
};

const swapCharts = event => {
  const announcement = document.getElementById('announcement');
  if (announcement) {
    announcement.classList.remove('hidden');
  }

  document.getElementById('aria-live').textContent = ' ';
  activeItemDetails = null;

  const chartType = event.target.id.substr(1);
  document.getElementById('render-location').querySelectorAll('.environment').forEach(env => {
    // console.log('env', env);
    env.classList.add('hidden')
  })
  document.getElementById(`${chartType}-group`).classList.remove('hidden')
  // document.getElementById('aria-live').innerHTML = `${e.target.value} has loaded.`
};

const toggleSRText = e => {
  // console.log(e.target.checked)
  document.getElementById("flexible-style").innerHTML = e.target.checked ? styleInnerHTML : ''
}

const initPage = () => {
  let inputs = ''

  Object.keys(chartTypes).forEach(chartType => {
    const chartProps = chartTypes[chartType];
    inputs += `<input type="radio" id="i${chartProps.uniqueID}" name="chart" value="${chartType}" class="input-selector" />
        <label for="i${chartProps.uniqueID}">${chartProps.selectionLabel}</label><br />`
    const chart = chartConstructor(chartType, chartProps.uniqueID);
    document.getElementById(`${chartType}-container`).appendChild(chart);
  })

  // document.getElementById('toggle').addEventListener('change', toggleSRText);

  document.getElementById("inputs").innerHTML = inputs
  inputs = document.querySelectorAll('.input-selector');
  inputs.forEach(input => {
    input.addEventListener('change', swapCharts);
  });
};

window.addEventListener('load', initPage, false);
