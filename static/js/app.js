// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    var listFilteredMetadata = metadata.filter(metaObj => metaObj.id == sample);
    var filteredMetadata= listFilteredMetadata[0]

    // Use d3 to select the panel with id of `#sample-metadata`
    var panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (key in filteredMetadata){
      var value = filteredMetadata[key];
      panel.append('p').text(`${key.toUpperCase()} : ${value}`);
    };

  });
}

buildMetadata('940')

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    var samples = data.samples;

    // Filter the samples for the object with the desired sample number
    var sampleNumber = samples.filter(sampleObj => sampleObj.id == sample);
    var sampleData = sampleNumber[0];

    console.log(sampleData)
    // Get the otu_ids, otu_labels, and sample_values
    var otuIds = sampleData.otu_ids;
    var otuLabels = sampleData.otu_labels;
    var sampleValues = sampleData.sample_values;

  
    // Build a Bubble Chart
    var bubbleChart = [
      {
        mode: 'markers',
        x: otuIds,
        y: sampleValues,
        text: otuLabels,
        marker: {
          size: sampleValues,
          color: otuIds
        }
      }
    ];

    // Layout for Bubble Chart
    var bubbleChartLayout = {
      title: 'Bacteria Cultures per Sample',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Number of Bacteria' },
      margin: { t: 50 }
    };

    // Render the Bubble Chart
    Plotly.newPlot('bubble', bubbleChart, bubbleChartLayout);

    // // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    // var yticks = 

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    var barChart = {
        type: 'bar',
        orientation: 'h',
        x: sampleValues.slice(0,10).reverse(),
        y: otuIds
    }

    // Layout for Bar Chart
    var barChartLayout = {
      title: 'Top 10 Bacteria Cultures Found'
    }

    // Render the Bar Chart
    Ploty.newPlot('bar', barChart, barChartLayout)

  });
}
buildCharts('940')

// // Function to run on page load
// function init() {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

//     // Get the names field


//     // Use d3 to select the dropdown with id of `#selDataset`


//     // Use the list of sample names to populate the select options
//     // Hint: Inside a loop, you will need to use d3 to append a new
//     // option for each sample name.


//     // Get the first sample from the list


//     // Build charts and metadata panel with the first sample

//   });
// }

// // Function for event listener
// function optionChanged(newSample) {
//   // Build charts and metadata panel each time a new sample is selected

// }

// // Initialize the dashboard
// init();
