## Technical-Test(Semantix)

João has a legacy system where he has a user database that he would like to migrate to the new system. The new system that João envisioned is a Wikipedia for an anime that he is a big fan of Naruto.

## Index

- [Technical Test](<#technical-test(Semantix)>)
- [Basic Assumptions](#Basic-Assumptions)
- [Functional Requirements](#Functional-Requirements)
- [Start](#start)
- [API Documentation](#api-documentation)
- [Technologies](#Technologies)
- [Environment](#Environment)

## Basic-Assumptions

- :ballot_box_with_check: Import the user base from the legacy system;
- :ballot_box_with_check: Import the characters and clans.

## Functional-Requirements

- :ballot_box_with_check: The user should be able to list all characters;
- :ballot_box_with_check: The user should be able to list all clans;
- :ballot_box_with_check: The user should be able to add and remove characters and clans from favorites;
- :ballot_box_with_check: The user should be able to list favorite characters and clans;
- :ballot_box_with_check: The user should be able to query a character, and if the character has a clan, the clan information should be returned;
- :ballot_box_with_check: The user should be able to query a clan and retrieve all characters associated with that clan;
- :ballot_box_with_check: The user should be able to filter characters by status (alive/deceased), gender, name, and clan (when available);
- :ballot_box_with_check: The user should be able to view another user's profile;
- :ballot_box_with_check: OThe user should be able to edit characters, clans, and manage system users (users with different permission levels);
- :ballot_box_with_check: The user should be able to register in the application;
- :ballot_box_with_check: The user should be able to upload a profile picture.

## Extra

- :ballot_box_with_check: Request logs for the API;;
- :ballot_box_with_check: API documentation;
- :ballot_box_with_check: Rate limiting;
- :ballot_box_with_check: Export favorites to CSV for data analysis;
- Unit, integration, and end-to-end testing;
- :ballot_box_with_check: Use of a service for static files;
- :ballot_box_with_check: Deployment of the application.

## Start

To facilitate the consumption of the API, download the apinaruto.json file, which contains all available routes in the API. After downloading the file, import it into Insomnia.

## API-Documentation

Link to the API documentation with routes and request models:
https://api-naruto-w2uc.onrender.com/docs

## Technologies

- :star: Node.js
- :star: Typescript
- :star: Prisma ORM
- :star: PostgreSQL
- :star: AWS S3

## Environment

- :desktop_computer: Visual Studio Code for coding
- :desktop_computer: DBeaver for database management
- :desktop_computer: Insomnia for API testing
- :desktop_computer: Git for version control
- :desktop_computer: Spotify for focus
- :desktop_computer: Stack Overflow/CHATGPT for debugging
