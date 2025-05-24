# `/users/register` Endpoint

## Description
Registers a new user in the system. Requires a valid email, a password (minimum 8 characters), and a full name (first name at least 3 characters).

## Method
`POST`

## Endpoint
`/users/register`

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

- `fullName.firstName` (string, required, min 3 chars)
- `fullName.lastName` (string, optional, min 3 chars if provided)
- `email` (string, required, must be a valid email)
- `password` (string, required, min 8 chars)

## Responses

| Status Code | Description                                      |
|-------------|--------------------------------------------------|
| 201         | User registered successfully. Returns user & token. |
| 400         | Validation error. Returns details of the errors.  |

### Success Response Example (`201 Created`)
```json
{
  "user": {
    "_id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2024-05-23T12:34:56.789Z"
  },
  "token": "jwt_token_here"
}
```

### Error Response Example (`400 Bad Request`)
```json
{
  "errors": [
    {
      "msg": "Password must be at least 8 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## Notes
- All fields are required except `lastName`.
- Passwords are securely hashed before storage.
- On success, a JWT token is returned for authentication.


# `/users/login` Endpoint

## Description
Authenticates a user with email and password. Returns user data and a JWT token on success.

## Method
`POST`

## Endpoint
`/users/login`

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

- `email` (string, required, must be a valid email)
- `password` (string, required, min 8 chars)

## Responses

| Status Code | Description                                         |
|-------------|-----------------------------------------------------|
| 200         | Login successful. Returns user & token.             |
| 400         | Validation error. Returns details of the errors.    |
| 401         | Invalid email or password.                          |

### Success Response Example (`200 OK`)
```json
{
  "user": {
    "_id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2024-05-23T12:34:56.789Z"
  },
  "token": "jwt_token_here"
}
```

### Error Response Example (`400 Bad Request`)
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Error Response Example (`401 Unauthorized`)
```json
{
  "message": "Invalid email or password"
}
```

## Notes
- Both fields are required.
- On success, a JWT token is returned for authentication.


# `/users/profile` Endpoint

## Description
Returns the authenticated user's profile information. Requires a valid JWT token in the request (as a cookie or Authorization header).

## Method
`GET`

## Endpoint
`/users/profile`

## Authentication
- Requires JWT token (sent as a cookie named `token` or in the `Authorization: Bearer <token>` header).

## Responses

| Status Code | Description                        |
|-------------|------------------------------------|
| 200         | Returns the user's profile data.   |
| 401         | Unauthorized or invalid token.     |

### Success Response Example (`200 OK`)
```json
{
  "_id": "user_id",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "createdAt": "2024-05-23T12:34:56.789Z"
}
```

### Error Response Example (`401 Unauthorized`)
```json
{
  "message": "Authentication required"
}
```

## Notes
- You must be logged in to access this endpoint.


# `/users/logout` Endpoint

## Description
Logs out the authenticated user by blacklisting their JWT token and clearing the authentication cookie.

## Method
`GET`

## Endpoint
`/users/logout`

## Authentication
- Requires JWT token (sent as a cookie named `token` or in the `Authorization: Bearer <token>` header).

## Responses

| Status Code | Description                        |
|-------------|------------------------------------|
| 200         | Logout successful.                 |
| 401         | Unauthorized or invalid token.     |

### Success Response Example (`200 OK`)
```json
{
  "message": "Logged out successfully"
}
```

### Error Response Example (`401 Unauthorized`)
```json
{
  "message": "Authentication required"
}
```

## Notes
- The token is blacklisted for 24 hours and cannot be reused.
- The authentication cookie is cleared on logout.