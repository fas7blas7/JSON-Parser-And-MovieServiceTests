📚 Test Suite Documentation

This repository contains test files designed to validate different functionality aspects of various JavaScript functions. The tests are written using Mocha and Chai frameworks for unit testing and assertion validation.

1. EcoLife JSON Parser 🌿

Parses a JSON file containing species data and displays it in a structured format:

    ✅ Parses species data from a JSON file located in the Datasets folder.
    ✅ Displays the list of species including their ID, name, habitat, lifespan, diet, and migration habits.
    ❌ Handles errors gracefully, including JSON parsing issues and unexpected runtime errors.
    
📝 Test Files
9. movieServiceTests.js 🎬

Tests the movieService object functions: getMovies, addMovie, deleteMovie, and updateMovie:

    getMovies: ✅ Verifies that all movies are returned with status 200 and correct data structure.
    addMovie: ✅ Tests successful addition of new movies and handles errors for invalid movie data.
    deleteMovie: ✅ Checks movie deletion by id and handles cases for non-existent ids.
    updateMovie: ✅ Verifies successful updates of existing movies and checks for errors when updating non-existent movies or with invalid data.

🆕 Changes & Updates
📅 Feb 25, 2025

    Added Unit Tests for:
        EcoLife JSON Parser: Parses species data from JSON and displays structured information about species including ID, name, habitat, lifespan, diet, and migration.
        movieServiceTests.js: Movie service functionalities including getting all movies, adding new movies, deleting movies by id, and updating existing movies with error handling.

