Section 2: Integration (3hrs)

The aim of this exam is to measure what you have learned from our integration-related topics. Instructions and parameters are found below but please don’t hesitate to message [...] if you have any questions.

Music Player Integration

Your task is to integrate two APIs to the layout you’ve initially developed in Section 1. Figma links are provided for your reference. We have prepared a list of parameters to indicate which parts of the exam are optional, and which should be strictly followed. There are no working interactions in the output needed.

Deployment
CodePen
You will need to use CodePen to submit your exam. Since it’s an online editor, you could develop your full exam directly on CodePen. Feel free to use your usual IDEs to develop.

Note: You may include plugins and use preprocessors through the settings option

RapidAPI
You will need to create an account in RapidAPI to gain access to the APIs needed for this exam. There are no payments required for this exam.

Note: You may include plugins and use preprocessors through the settings option

Instructions
This exam can be done purely using HTML, CSS, and JS
You may use either Axios or Fetch as your HTTP client
Pre-processors are acceptable but will be graded more stringently
External plugins may be used provided they only provide minor aesthetic improvements
Allowable plugins are those that affect transition and animation
Plugins that create a scaffold of the layout and/or include pre-generated code are not allowed
You are free to change the following:
Assets like images and icons as necessary
Text
Fonts
Color Scheme

Integration #1 - Music Player to Genius API

View Image of Integration #1 - Music Player to Genius APLinks to an external site.
You are to create a panel that fetches the lyrics displayed in the music player
To retrieve the data, you must connect to the Genius API:
https://rapidapi.com/Glavier/api/genius-song-lyrics1Links to an external site.
You must use variables for your requests as hard-coded request parameters are not allowed

Integration #2 - Music Player to Spotify API

View Image of Integration #2 - Music Player to Spotify API - ALinks to an external site.
View Image of Integration #2 - Music Player to Spotify API - BLinks to an external site.
You are to create two panels: one to fetch the other albums of the artist, and another to display the related artists
You must use variables for your requests and since the two panels will share one API, some variables are expected to be used multiple times across the panels.
To retrieve the data, you must connect to the Spotify API:
https://rapidapi.com/Glavier/api/spotify23Links to an external site.
The albums and artists should open the Spotify link of the album/artist in a new tab
Example - Ariana Grande’s Spotify Link
https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnRLinks to an external site.

Scoring
You will be graded on the following:
Cleanliness of you HTML, CSS, and JS code structure
Ability to replicate the example
Efficiency of the integration (No redundancy of the variables, no unnecessary calls to the API)
Bonus points will be given for the following:
Scrolling animation for all the panels
Ability to get a next or previous song - A hard-coded list of songs is acceptable as long as it is in a JSON format
