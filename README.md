# Ebates

## Objective

The objective of this exercise is to call a JSON with multiple pages, scan through it and print out how many response objects have flag:hd set to true and how many have hd set to false.

## Design

Javascript and jQuery were used for this exercise. There were 3 functions used: **_loadData_**, **_tally_**, & **_results_**. The first step was to called **_loadData_** which has getJSON to retrieve the data from the JSON. Assuming there are 10 responses per page, *trueCount* and *falseCount* keep track of how many response objects have flags:hd set to true or false. Then **_tally_** was called. This function's job was to add and keep track of how many hd:true and hd:false there are in each page. Another job of the tally function was to check if there's more data. If there's more data, **_loadData_** will be called again. If there's no more data, then the **_results_** function will be called. The **_results_** function prints out how many pages there are and the total numbers of how many response objects that have flags:hd set to true/false.

## Testing

This JSON had a lot of data. The first test I did was figuring out how many pages are there so I know what I'm dealing with. It took awhile to run all 1000 pages. In order to test it, the data was separated into a small part. Only the first 10 pages were tested in the beginning. After the first 10 pages were tested out and passed and the program was completed, I tested the whole file with all the pages a few times in different browsers.

## Results

The results were printed out on the consoles of three different browsers: Chrome, Firefox and IE.

There are 1000 pages.
There are 10000 response objects that have flags:hd set to true.
There are 0 response objects that have flags:hd set to false.
