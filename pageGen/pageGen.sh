#! /bin/bash

#-------------
#The purpose of this script is to eventually be used in conjunction with the other processing scripts to generate pages with the source videos contained therin. Right now it is setup using Netu.tv as the video host.
#-------------

rm ../src/pages/id-*.js

#-----
# Step 1: Create array from csv file with all the video links
#-----
readarray -t URLS < linklist.csv


#-----
# Step 2.1: Loop through array and create new page file for each link
# Step 2.2: Create pagename from video identifier within url
#-----
for LINK in ${URLS[*]}; do 
	sed "s,REPLACETHISSHIT,$LINK," template.js > "id-$LINK.js"
done


#-----
# Step 3: Move all page files to the page directory of the site folder
#-----
mv id-*.js ../src/pages
