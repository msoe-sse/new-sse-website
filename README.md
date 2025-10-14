The New SSE Website
---

## vite + react

`npm run dev` - to launch dev server
`npm run build` - to build dist folder

## Testing

`npm test` - runs jest test suit with coverage

### Adding test

Every file in `scripts/` should have a file in `script/test/`. if a script is names `script1.js` then the test file should be named `script1.test.js`.

## Components

Components are stored in `components/`. Component files should be name in upper cammel case with the file name corresponding to the component the file is exporting. For instance a file with the component `<CustomButton />` should be named `CustomButton.jsx`

### Component Testing

Currently there are no ui/dom tests. Feel free to add this in the future.

## Linting

ALL FILES SHOULD BE LINTED PRIOR TO COMMITS. Run `npm run lint` to see linting errors.