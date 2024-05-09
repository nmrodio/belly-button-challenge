# *belly-button-challenge* #
---------------------

## **Project Goal:** ##
* This project aims to develop an interactive dashboard that explores the human navel's microbial diversity using the Belly Button Biodiversity dataset.  The dataset showcases the presence of various microbial species (OTUs) found in human navels. This code demonstrates the use of D3.js to interact with data, build interactive visualizations (charts), and update them dynamically based on user input.

## **Key Features:** ##
* **Data Exploration:** The dashboard utilizes the D3 library to read data from an external JSON file.

* **Top 10 OTUs Visualization:** A horizontal bar chart displays the top 10 most abundant OTUs for a selected individual.

* **Sample Visualization:** A bubble chart visually represents each sample, with data points encoded for OTU ID, sample value, and size.

* **Sample Metadata Panel:** User-selected sample's demographic information is displayed in a dedicated panel.

* **Interactive Updates:** The dashboard dynamically updates visualizations and metadata based on the chosen sample through a dropdown menu.

* **Deployment:** The final project will be hosted on a free service through GitHub Pages for accessibility.
--------------------

## **Elements of the dashboard** ##
* This dashboard is interactive and dynamic based on the users selection of the specific "Test Subject ID Number" that they select. (Screenshots are based on the default ID of "940")

### **Interactive Dashboard:** ###

![Screenshot 2024-05-09 162925](https://github.com/nmrodio/belly-button-challenge/assets/157527614/eb7da9e5-269e-455b-aeed-2259fb22047b)

### **Dropdown Menu:** ###

![Screenshot 2024-05-09 162315](https://github.com/nmrodio/belly-button-challenge/assets/157527614/d351a1f6-ab03-4549-8203-0cef8e754a05)

### **Demographic Info:** ###

![Screenshot 2024-05-09 162427](https://github.com/nmrodio/belly-button-challenge/assets/157527614/e2e7cfe1-a2f3-43f0-93b6-d593c3250c7c)


### **Horizontal Bar Chart:** ###

![Screenshot 2024-05-09 162453](https://github.com/nmrodio/belly-button-challenge/assets/157527614/327bd820-1be8-46dd-b75a-cbcbbf1691c3)


### **Bubble Chart:** ###

![Screenshot 2024-05-09 162509](https://github.com/nmrodio/belly-button-challenge/assets/157527614/dae29035-c1b2-41ea-abef-0e040b772ed2)
-------------

## **Deployment** ##
* The link below will take you to the interactive dashboard that is being hosted through GitHub Pages for easier accessibility!

## https://nmrodio.github.io/belly-button-challenge/ ##
-----------------

## **How does the code work?** ##
## **app.js** ##

**Function 1: `buildMetadata`**
1) Fetches sample metadata from a JSON file.
2) Filters for the specific sample based on user selection.
3) Populates the designated panel (#sample-metadata) with key-value pairs representing the sample's demographic information.

**Function 2: `buildCharts`**
1) Fetches sample data from a JSON file.
2) Filters for the chosen sample based on user selection.
3) Extracts relevant data points (OTU IDs, labels, and sample values).
4) Creates a Bubble Chart => Inserted into dashboard based on the location of the  `<div id="bubble"></div>` located in the index.html file.
5) Visualizes OTU distribution with points sized by sample value and colored by OTU ID.
6) Includes informative titles and labels for axes.
7) Creates a Horizontal Bar Chart => Inserted into dashboard based on the location of the  `<div id="bar"></div>` located in the index.html file.
8) Displays the top 10 most abundant OTUs for the selected sample.
9) Uses sample values for bar height and reversed, formatted OTU IDs for labels.
10) Includes a title and label for the x-axis.

**Function 3: `init`**
1) Loads sample names from the JSON file.
2) Populates a dropdown menu with available sample names for user selection.
3) Initializes the dashboard by building charts and displaying metadata for the first sample in the list.

**Function 4: `optionChanged`**
1) This function is triggered by a user interaction with the dropdown menu.
2) When a new sample is selected, it rebuilds both the charts and metadata panel using the chosen sample's data.

**Function Call: `init()`**
1) Starts the application by executing the init function to initialize the dashboard.