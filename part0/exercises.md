# Exercises

## 0.4

```mermaid
    sequenceDiagram
    note over browser: user enters note in text field
    note over browser: user clicks submit button that sends input to server through html form action
    browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    server->>browser: HTML-code
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server->>browser: main.js
    note over browser: browser starts executing js-code that requests JSON data from server
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server->>browser: data.json
    note over browser: browser executes the event handler that renders notes to display
```

## 0.5

```mermaid
    sequenceDiagram
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    server->>browser: HTML-code
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server->>browser: main.css
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server->>browser: spa.js
    note over browser: browser starts executing js-code that requests JSON data from server
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server->>browser: data.json
    note over browser: browser executes the event handler that renders notes to display
```

## 0.6

```mermaid
    sequenceDiagram
    note over browser: user enters note in text field
    note over browser: user clicks submit button that adds note to notes, redraws notes, and sends input to server through sendToServer function in js-code
    browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server->>browser: note created message
```
