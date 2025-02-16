
# Monorepo Project

documentation: https://turbo.build/


## Deployment

To run with turbo

```bash
    turbo build
```


To run only backend with firebase

```bash
 npm run build && firebase emulators:start --only functions

 OR
  npm run serve && firebase emulators:start --only functions
```

To run only frontend 

```bash
  npm run build
```
