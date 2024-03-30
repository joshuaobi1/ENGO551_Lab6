# ENGO551_Lab6

## Overview

This lab focuses on implementing line simplification in a web mapping application using Turf.js. Users can draw polylines on the map, and with the click of a button, see a simplified version of the polyline they drew. This simplified polyline is displayed in a different color for clear differentiation. The project aims to demonstrate the practical application of line simplification algorithms in enhancing map visualization and interaction.

## Features

- **Drawing on the Map:** Users can draw polylines directly on the map interface, providing an interactive way to input geographic data.
- **Line Simplification:** By clicking the "Simplify Line" button, users can generate and display a simplified version of their drawn polyline. This simplification process uses Turf.js's `simplify` function.
- **Layer Management:** Users have the option to delete the original or simplified polylines, allowing for iterative drawing and simplification processes.
- **Visual Differentiation:** The original and simplified polylines are displayed in different colors, ensuring users can easily distinguish between them.

## Technical Details

- **Leaflet:** The mapping library used to provide the interactive map interface and drawing capabilities.
- **Leaflet Draw:** A Leaflet plugin enabling drawing tools for users to create polylines on the map.
- **Turf.js:** Utilized for its `simplify` function, which applies a line simplification algorithm to the drawn polyline, producing a simplified version.
- **Flask:** A lightweight WSGI web application framework used to serve the application.

## Files

- `index.html`: The main HTML document that includes the layout and structure of the web application.
- `style.css`: Contains styles for the web application, ensuring a responsive and user-friendly interface.
- `main.js`: JavaScript file that implements the mapping functionality, drawing interactions, and line simplification logic.
- `app.py`: A simple Flask application used to serve the web application locally for development and testing.

## Usage

To use the application, users can draw a polyline on the map using the drawing tools provided. Once a polyline is drawn, clicking the "Simplify Line" button will generate and display a simplified version of the polyline. Users can then delete either polyline and start the process over if desired.

## Setup

1. Ensure you have Python and Flask installed on your system.
2. Clone the repository and navigate to the lab's directory.
3. Run `app.py` to start the Flask server.
4. Open your web browser and go to `http://localhost:5000` to view the application.

