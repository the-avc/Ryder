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