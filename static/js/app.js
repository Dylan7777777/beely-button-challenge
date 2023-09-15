const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
});

function init() {

// Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");


    d3.json(url).then((data) => {

        let names = data.names;

        names.forEach(id => {

            //console.log(id);

            dropdownMenu.append("option").text(id).property("value",id);
            
        });

        let itemOne = names[0];

        // Log the value of itemOne
        console.log(itemOne)

        buildMetadata(itemOne);
        buildBarChart(itemOne);
        buildBubbleChart(itemOne);
    });
};

function buildMetadata(item) {
    //use D3 to get the data
    d3.json(url).then((data) => {
        let metadata = data.metadata;

        let value = metadata.filter(result => result.id == item);


        console.log(value);


        let valueData = value[0];

        d3.select("#sample-metadata").html("");


        Object.entries(valueData).forEach(([key,value]) => {

            
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);

        });

        

    });

};

function buildBarChart(item) {
    //use D3 to get the data
    d3.json(url).then((data) => {

        let sample = data.samples;

        let value = sample.filter(result => result.id == item);

        console.log(value)

        let valueData = value[0];

        //Get otu_ids, labels and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        //log the data to the console
        console.log(otu_ids,otu_labels,sample_values);

        //Set the top tem items to display in descending order using slice
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();

        let trace = [{
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        }];

        let layout = {
            title: "Top 10 OTUs Present"
        };

        //Use Plotly to plot the bar
        Plotly.newPlot("bar",trace,layout)
    });
};

function buildBubbleChart(item) {
    //use D3 to get the data
    d3.json(url).then((data) => {
        
        let sample = data.samples;

        let value = sample.filter(result => result.id == item);

        let valueData = value[0];

        //Get otu_ids, labels and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        //log the data to the console
        console.log(otu_ids,otu_labels,sample_values);

        let trace1 = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"

            }
        }];

        let layout = {
            title: "Bacteria Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"}
        };

        //Use Plotly to plot the Bubble Chart
        Plotly.newPlot("bubble",trace1,layout)
    });
};
//Function to update the dashboard for change in sample
function optionChanged(value) {
    
    // log the new value
    console.log(value);

    //Call all functions
    buildMetadata(value);
    buildBarChart(value);
    buildBubbleChart(value);
    
};

//Call the initialize function
init();

