import { expect } from "chai";
import { movieService } from "../function/movieServiceFunction.js";

describe("movieService Tests", function () {
    
    describe("getMovies()", function () {
        it("Should return all movies with status 200", function () {
            const response = movieService.getMovies();
            expect(response.status).to.equal(200);
            expect(response.data).to.be.an("array").with.lengthOf(3);
            expect(response.data[0]).to.include.all.keys("id", "name", "genre", "year", "director", "rating", "duration", "language", "desc");
        });
    });

    describe("addMovie()", function () {
        it("Should successfully add a new movie", function () {
            const newMovie = {
                id: "4",
                name: "The Dark Knight",
                genre: "Action",
                year: 2008,
                director: "Christopher Nolan",
                rating: 9.0,
                duration: 152,
                language: "English",
                desc: "A superhero film that follows Batman."
            };
            const response = movieService.addMovie(newMovie);
            expect(response.status).to.equal(201);
            expect(response.message).to.equal("Movie added successfully.");
            const movies = movieService.getMovies().data;
            expect(movies).to.deep.include(newMovie);
        });

        it("Should return an error for invalid movie data", function () {
            const invalidMovie = {
                id: "5",
                name: "Incomplete Movie"
                // Missing required fields
            };
            const response = movieService.addMovie(invalidMovie);
            expect(response.status).to.equal(400);
            expect(response.error).to.equal("Invalid Movie Data!");
        });
    });

    describe("deleteMovie()", function () {
        it("Should delete a movie by id successfully", function () {
            const newMovie = {
                id: "6",
                name: "Delete Me",
                genre: "Drama",
                year: 2020,
                director: "John Doe",
                rating: 7.5,
                duration: 120,
                language: "English",
                desc: "A movie that will be deleted."
            };
            movieService.addMovie(newMovie);
            const response = movieService.deleteMovie("6");
            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Movie deleted successfully.");
            const movies = movieService.getMovies().data;
            expect(movies.find(movie => movie.id === "6")).to.be.undefined;
        });

        it("Should return 404 for a non-existent movie id", function () {
            const response = movieService.deleteMovie("non-existent-id");
            expect(response.status).to.equal(404);
            expect(response.error).to.equal("Movie Not Found!");
        });
    });

    describe("updateMovie()", function () {
        it("Should update an existing movie successfully", function () {
            const updatedMovie = {
                id: "3",
                name: "Interstellar Updated",
                genre: "Sci-Fi",
                year: 2014,
                director: "Christopher Nolan",
                rating: 9.0,
                duration: 169,
                language: "English",
                desc: "A revised description for Interstellar."
            };
            const response = movieService.updateMovie("Interstellar", updatedMovie);
            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Movie updated successfully.");
            const movies = movieService.getMovies().data;
            expect(movies.find(movie => movie.name === "Interstellar Updated")).to.deep.equal(updatedMovie);
        });

        it("Should return an error if the movie to update does not exist", function () {
            const updatedMovie = {
                id: "7",
                name: "Non-Existent Movie",
                genre: "Comedy",
                year: 2010,
                director: "Jane Doe",
                rating: 6.0,
                duration: 95,
                language: "English",
                desc: "A non-existent movie."
            };
            const response = movieService.updateMovie("Non-Existent", updatedMovie);
            expect(response.status).to.equal(404);
            expect(response.error).to.equal("Movie Not Found!");
        });

        it("Should return an error if the new movie data is invalid", function () {
            const invalidUpdatedMovie = {
                id: "3"
                // Missing required fields
            };
            const response = movieService.updateMovie("Interstellar", invalidUpdatedMovie);
            expect(response.status).to.equal(400);
            expect(response.error).to.equal("Invalid Movie Data!");
        });
    });
});