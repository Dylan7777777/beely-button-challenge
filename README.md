# belly-button-challenge

Use the D3 library to read in samples.json from the URL"https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

Disply the sample metadata - an individual's demographic and belly button washing frequency information
Display each key-value pair from the metadata Json object on the page


Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    Used sample_values as the values for the bar chart.
    Used otu_ids as the labels for the bar chart
    Used otu_labels as the hovertext for the chart

    "https://plotly.com/javascript/bar-charts/"

Created a bubble chart that displays each sample that is chosen from the dropdown menu
    Used otu_ids for the x values
    Used sample_values for the y values
    Also used sample_values for the marker size
    Used otu_ids for the marker colors and
    Used otu_labels for the text values

    "https://plotly.com/javascript/bubble-charts/"

app.js file in the static folder

I have chosen not to complete the gauge chart for the assignment but will do so at leisure once it is marked.










