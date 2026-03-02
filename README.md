# Jwebapp Frontend

This project is the frontend application for the Jwebapp, built with Angular. It provides a user interface for authentication (login, registration) and a home page.

## Features

*   User Registration
*   User Login
*   Home Page (after authentication)
*   Secure API communication


## Project Structure

The project follows a standard Angular CLI structure. Key directories and files include:

*   [`src/`](src/): Contains the application's source code.
    *   [`src/app/`](src/app/): Core application logic.
        *   [`src/app/components/`](src/app/components/): Contains presentational components.
            *   [`src/app/components/home/`](src/app/components/home/): Home page component.
            *   [`src/app/components/login/`](src/app/components/login/): User login component.
            *   [`src/app/components/register/`](src/app/components/register/): User registration component.
        *   [`src/app/models/`](src/app/models/): Defines data structures for the application.
            *   [`src/app/models/auth-response.model.ts`](src/app/models/auth-response.model.ts): Model for authentication responses.
            *   [`src/app/models/user.model.ts`](src/app/models/user.model.ts): Model for user data.
        *   [`src/app/services/`](src/app/services/): Contains injectable services for business logic and data fetching.
            *   [`src/app/services/auth.service.ts`](src/app/services/auth.service.ts): Service for user authentication.
        *   [`src/app/app.ts`](src/app/app.ts): Main application component.
        *   [`src/app/app.routes.ts`](src/app/app.routes.ts): Defines application routes.
    *   [`src/main.ts`](src/main.ts): The main entry point for the Angular application.
    *   [`src/styles.scss`](src/styles.scss): Global styles for the application.
*   [`angular.json`](angular.json): Angular CLI configuration file.
*   [`package.json`](package.json): Defines project metadata and dependencies.
*   [`README.md`](README.md): Project documentation.

## API Endpoints

The frontend application interacts with the following backend API endpoints, primarily for user authentication:

*   **Authentication Service (`AUTH_API` - `http://localhost:8080/api/auth/`)**
    *   `POST /api/auth/login`: Authenticates a user with provided credentials. Expected to return an authentication token upon successful login.
    *   `POST /api/auth/register`: Registers a new user with provided details. Returns a confirmation upon successful registration.

## Data Models

The frontend utilizes the following data models for structured data exchange with the backend and within the application:

### [`AuthResponse`](src/app/models/auth-response.model.ts)

Represents the response received from the authentication API endpoints after a successful login.

*   `token`: `string` - The JWT authentication token.
*   `type`: `string` - The type of token (e.g., "Bearer").
*   `id`: `number` - The ID of the authenticated user.
*   `username`: `string` - The username of the authenticated user.
*   `email`: `string` - The email of the authenticated user.

### [`User`](src/app/models/user.model.ts)

Represents a user in the system, used for both sending user credentials and receiving user information.

*   `id?`: `number` (Optional) - The unique identifier for the user. Present when receiving user data.
*   `username`: `string` - The user's chosen username.
*   `email`: `string` - The user's email address.
*   `password?`: `string` (Optional) - The user's password. Required for login and registration, but not typically sent back from the server.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
