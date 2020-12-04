### Mistakes I made
- created a node api that took params via header vs url
    - issue with that is that when you pull in a GeoJson layer via the ArcGIS api you just need a url and can skip the whole axios.get() thing. 


### Cool thoughts!!!
- add in a chart of the condition of the trees
- filter by ward
- break out by family???