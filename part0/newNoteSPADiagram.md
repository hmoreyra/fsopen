```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    note right of server: the server saves the note
    server->>browser: 201 Created
    deactivate server
    Note right of browser: The browser starts executing the JavaScript code that reloads the notes (without asking the server)
```