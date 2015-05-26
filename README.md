# dare-dev-admin

Admin scripts for a DareDev event.

## Installation

```
npm install
```

## Running

```
FIREBASE_APP=<YOUR-FIREBASE-APP> npm start
```

This script will listen for DareDev competitors to start their local development
environments via a Firebase app. It will then open their preview URLs in your
web browser.

(Note: they must have the OS X firewall turned off, and be on the same local
network.)
