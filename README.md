# Form Validation with Javascript

https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript

## Deploying:

Do all this in the main branch...

- Run `npm run build` to create the production build in dist/
- Create a commit for that release and push that to GitHub
- Run `npm run deploy` to run the git script that pushes only the dist/ folder
to the gh-pages branch, which automatically deploys to the gh-pages site.
 webpack-starter

## Preparation

### Collects:

- Email
- Country
- Zip Code
- Password (and confirmation)

### Notes: 

- use live inline validation for determining whether a field is properly filled in
  - highlighting it red along with error message if not
- give error msg if errors exist or unfilled fields
- all validation occurs in javascript file
- give user "high five" if successful

### Whiteboarding

- run validation functions on input `onBlur` event to run them as soon as focus is lost
- style with `:valid` and `:invalid` pseudo classes (set through javascript)
- validation strategies:
  - email: regex (`/^\S+@\S+\.\S+$/`)
  - country: makes sure matches a country from [here](https://www.npmjs.com/package/country-list)
  - zip code: get country code from above and validate with [this package](https://www.npmjs.com/package/postcode-validator)
  - password: just make sure password and confirmation matches