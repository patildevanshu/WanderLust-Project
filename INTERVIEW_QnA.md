# 🎤 WanderLust — Interview Preparation Guide

> A complete list of expected interview questions and model answers based on your **WanderLust** project — an Airbnb-style full-stack web application.

---

## 📌 Table of Contents

1. [Project Introduction Questions](#1-project-introduction-questions)
2. [Why This Project?](#2-why-this-project)
3. [Architecture & Design Questions](#3-architecture--design-questions)
4. [Node.js & Express.js Questions](#4-nodejs--expressjs-questions)
5. [MongoDB & Mongoose Questions](#5-mongodb--mongoose-questions)
6. [Authentication & Authorization Questions](#6-authentication--authorization-questions)
7. [File Upload & Cloudinary Questions](#7-file-upload--cloudinary-questions)
8. [Maps & Geocoding Questions](#8-maps--geocoding-questions)
9. [Session & Cookie Questions](#9-session--cookie-questions)
10. [Validation & Error Handling Questions](#10-validation--error-handling-questions)
11. [Security Questions](#11-security-questions)
12. [Deployment & Environment Questions](#12-deployment--environment-questions)
13. [General CS / Web Dev Questions](#13-general-cs--web-dev-questions)
14. [Behavioral / HR Questions](#14-behavioral--hr-questions)

---

## 1. Project Introduction Questions

### Q1. Tell me about your project / Explain your project.

**Answer:**
> "I built **WanderLust**, a full-stack Airbnb-inspired vacation rental web application. It allows users to browse property listings from around the world, create and manage their own rental listings with photo uploads, view listing locations on an interactive map, and leave reviews with star ratings.
>
> Key features include user authentication (signup/login/logout), role-based authorization so only owners can edit/delete their listings, cloud-based image storage using Cloudinary, real-time geocoding with Mapbox to pin locations on a map, and server-side input validation using Joi.
>
> I built the backend using **Node.js** and **Express.js** following the MVC pattern, with **MongoDB** as the database and **EJS** as the templating engine. Sessions are persisted in MongoDB using connect-mongo, and file uploads are handled via Multer with Cloudinary storage."

---

### Q2. What problem does your project solve?

**Answer:**
> "WanderLust solves the problem of connecting property owners who want to rent out their spaces with travelers looking for unique, affordable accommodations. It eliminates the need for costly hotel bookings by providing a peer-to-peer marketplace where hosts can list properties and guests can browse, review, and find stays tailored to their needs — along with interactive map views to evaluate location before booking."

---

### Q3. Walk me through the features of your project.

**Answer:**
- ✅ **Browse Listings** — Public index page showing all available listings
- ✅ **Create Listings** — Authenticated users can post a new listing with title, description, location, country, price, category, and image upload
- ✅ **View a Listing** — Detailed show page with listing info, owner details, map location, and user reviews
- ✅ **Edit / Delete Listing** — Only the listing owner can update or remove their listing
- ✅ **User Auth** — Register, Login, Logout using Passport.js
- ✅ **Reviews** — Logged-in users can leave a rating (1–5 stars) and comment; only the review author can delete it
- ✅ **Geocoding** — Listing location is auto-converted to GPS coordinates using Mapbox and displayed on an interactive map
- ✅ **Image Upload** — Listing images are stored securely on Cloudinary via Multer
- ✅ **Flash Messages** — Success and error notifications shown to users
- ✅ **Input Validation** — Server-side validation using Joi schemas

---

### Q4. What is the tech stack you used and why?

**Answer:**

| Layer | Technology | Why |
|---|---|---|
| Backend | Node.js + Express.js | Lightweight, non-blocking I/O, large ecosystem |
| Database | MongoDB + Mongoose | Flexible schema, scales well for listing data |
| Templating | EJS + ejs-mate | Simple server-side rendering with layout support |
| Auth | Passport.js | Industry standard, pluggable strategies |
| File Upload | Multer + Cloudinary | Handles multipart forms; Cloudinary provides CDN |
| Maps | Mapbox SDK | Accurate geocoding, interactive map rendering |
| Validation | Joi | Declarative, readable schema validation |
| Session Store | connect-mongo | Persists sessions across server restarts |

---

### Q5. How long did it take to build this project?

**Answer:**
> "I built this project progressively while learning full-stack development. The core CRUD functionality took about a week, and features like authentication, authorization, cloud uploads, and map integration added another 2–3 weeks. The entire project took roughly 4–6 weeks of active development."

---

## 2. Why This Project?

### Q6. Why did you choose to build an Airbnb clone?

**Answer:**
> "Airbnb's architecture covers almost every major concept in full-stack development — user auth, file uploads, database relationships, third-party API integrations, authorization, validation, and session management. By building it, I was able to practice all these real-world concepts in a single, cohesive project. It's also a product people are familiar with, which made it easier to set clear requirements."

---

### Q7. What did you learn from building this project?

**Answer:**
> "I learned how to:
> - Structure a Node.js app using the MVC pattern
> - Implement full authentication and authorization flows with Passport.js
> - Integrate third-party services like Cloudinary and Mapbox
> - Handle file uploads securely using Multer
> - Write server-side validation with Joi to protect against bad data
> - Manage sessions and persist them in MongoDB
> - Use Mongoose relationships (populate, refs) and middleware hooks like post('findOneAndDelete')
> - Properly handle async errors in Express using wrapper utilities"

---

### Q8. What challenges did you face and how did you overcome them?

**Answer:**
> "Some key challenges:
>
> 1. **Authorization** — Initially, any logged-in user could edit any listing. I solved this by writing a custom `isOwner` middleware that checks if the current user's ID matches the listing's owner ID before allowing the action.
>
> 2. **Async error handling** — Express doesn't catch async errors by default. I created a `wrapAsync` utility that wraps async route handlers and forwards errors to the global error handler using `next(err)`.
>
> 3. **Session persistence** — Using in-memory sessions caused sessions to reset on server restart. I fixed this by switching to `connect-mongo` to store sessions in MongoDB Atlas.
>
> 4. **Image updates** — When editing a listing, the image upload is optional. I handled this with a conditional check: only update the image if a new file was actually uploaded."

---

## 3. Architecture & Design Questions

### Q9. What design pattern did you follow?

**Answer:**
> "I followed the **MVC (Model-View-Controller)** pattern:
> - **Model** — Mongoose schemas in the `models/` folder (Listing, Review, User)
> - **View** — EJS templates in the `views/` folder
> - **Controller** — Business logic separated into the `controllers/` folder (listings.js, reviews.js, users.js)
> - **Routes** — Express routers in `routes/` that connect HTTP endpoints to controller functions"

---

### Q10. How are your routes structured?

**Answer:**
> "I use Express Router to group related routes:
> - `/` → redirects to `/listings`
> - `/listings` → Index (GET) and Create (POST)
> - `/listings/new` → Render new form (GET)
> - `/listings/:id` → Show (GET), Update (PUT), Delete (DELETE)
> - `/listings/:id/edit` → Render edit form (GET)
> - `/listings/:id/reviews` → Create Review (POST)
> - `/listings/:id/reviews/:reviewId` → Delete Review (DELETE)
> - `/signup`, `/login`, `/logout` → User auth routes"

---

### Q11. How do you handle errors in your application?

**Answer:**
> "I have a layered error handling strategy:
> 1. A custom **`ExpressError` class** that extends the native `Error` class, allowing me to attach a `statusCode` to errors.
> 2. A **`wrapAsync` utility** that wraps all async controller functions and catches unhandled promise rejections, passing them to `next(err)`.
> 3. A **global error handler middleware** at the bottom of `app.js` that catches all errors and renders a dedicated `error.ejs` page with the status code and message."

---

### Q12. Why did you use `method-override`?

**Answer:**
> "HTML forms only natively support `GET` and `POST` methods. To use `PUT` and `DELETE` (required for RESTful updates and deletes), I use the `method-override` package. It reads a `_method` query parameter from the form action URL and overrides the HTTP method accordingly."

---

## 4. Node.js & Express.js Questions

### Q13. What is middleware in Express? Give examples from your project.

**Answer:**
> "Middleware are functions that have access to the request (req), response (res), and the `next` function in the request-response cycle. Examples from my project:
> - `express.urlencoded` — parses incoming form data
> - `express.static` — serves static files from the `public/` folder
> - `methodOverride` — enables PUT/DELETE from HTML forms
> - `passport.initialize()` — initializes Passport auth
> - `isLoggedIn` — custom middleware to guard protected routes
> - `isOwner` — custom middleware to check listing ownership
> - `validateListing` — custom middleware to run Joi schema validation"

---

### Q14. What is `wrapAsync` and why do you need it?

**Answer:**
> "Express doesn't automatically catch errors thrown inside async functions. If an async controller throws or rejects, the error silently hangs the request.
>
> `wrapAsync` is a higher-order function that wraps an async function and attaches a `.catch(next)` to it, ensuring any error is forwarded to Express's global error handler automatically. This removes the need to write `try/catch` in every controller."

```js
// utils/wrapAsync.js
module.exports = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
};
```

---

### Q15. What is the difference between `app.use()` and `app.get()`?

**Answer:**
> "- `app.use()` matches all HTTP methods and applies to any path that **starts with** the given prefix. Primarily used for mounting middleware or sub-routers.
> - `app.get()` matches only GET requests on an **exact path**.
> - Example: `app.use('/listings', listingRouter)` mounts the listing router on all requests beginning with `/listings`."

---

### Q16. What is `res.locals` and how did you use it?

**Answer:**
> "`res.locals` is an object that provides response-level local variables scoped to that request. They are available inside EJS templates without explicitly passing them.
>
> In my app, I set `res.locals.success`, `res.locals.error`, and `res.locals.currUser` in a global middleware so that flash messages and the logged-in user are accessible in every template automatically."

---

## 5. MongoDB & Mongoose Questions

### Q17. What is Mongoose and why did you use it?

**Answer:**
> "Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides schema-based modeling, built-in type casting, validation, query helpers, and middleware hooks. I used it because:
> - It enforces structure on a schema-less MongoDB database
> - It simplifies CRUD operations with a clean API
> - It supports population (joins), middleware, and virtual fields
> - It integrates naturally with Passport-Local-Mongoose for user auth"

---

### Q18. Explain the relationships between your models.

**Answer:**
> "My app has three models with the following relationships:
>
> - **User to Listing**: One-to-Many. A user can own many listings. The `Listing` model stores a reference (ObjectId) to the owner User.
> - **Listing to Review**: One-to-Many. A listing can have many reviews. The `Listing` model stores an array of Review ObjectIds.
> - **User to Review**: One-to-Many. A user can author many reviews. The `Review` model stores a reference to the author User.
>
> I use Mongoose's `.populate()` to replace these ObjectId references with the actual documents when needed."

---

### Q19. What is `.populate()` in Mongoose? Where did you use it?

**Answer:**
> "`.populate()` replaces ObjectId references in a document with the actual referenced document from another collection — similar to a JOIN in SQL.
>
> In my `showListing` controller, I use:
> ```js
> Listing.findById(id)
>   .populate({ path: 'review', populate: { path: 'author' } })
>   .populate('owner');
> ```
> This fetches the listing, populates all its reviews, and for each review also populates the author — all in a single query chain."

---

### Q20. How does the cascade delete work for reviews when a listing is deleted?

**Answer:**
> "I use a Mongoose **post middleware hook** on the `findOneAndDelete` event of the Listing model:
> ```js
> listingSchema.post('findOneAndDelete', async (listing) => {
>   if (listing) {
>     await Review.deleteMany({ _id: { $in: listing.review } });
>   }
> });
> ```
> When a listing is deleted, this hook automatically fires and deletes all reviews whose IDs are in the listing's `review` array."

---

### Q21. Why MongoDB over a relational database like MySQL?

**Answer:**
> "MongoDB was a good fit because:
> - Listings have flexible, document-like structures that may evolve (adding new fields like `category` or `geometry`)
> - JSON-like BSON documents map naturally to JavaScript objects
> - Embedding and referencing give flexibility for data relationships
> - MongoDB Atlas provides easy cloud hosting
>
> However, a relational DB would have been better if transactions, strict relationships, or complex aggregations were core requirements."

---

## 6. Authentication & Authorization Questions

### Q22. How does authentication work in your project?

**Answer:**
> "I use **Passport.js** with the **Local Strategy** and **passport-local-mongoose** plugin:
> 1. The user submits their username and password via a login form.
> 2. Passport's Local Strategy verifies credentials against the hashed password stored in MongoDB (passport-local-mongoose handles the hashing automatically using pbkdf2).
> 3. On success, Passport serializes the user ID into the session.
> 4. On subsequent requests, Passport deserializes the user from the session and attaches the full user object to `req.user`.
> 5. My custom `isLoggedIn` middleware checks `req.isAuthenticated()` before allowing access to protected routes."

---

### Q23. What is the difference between Authentication and Authorization?

**Answer:**
> "- **Authentication** — Verifying *who you are* (login, signup). In my project: Passport.js validates username/password.
> - **Authorization** — Verifying *what you're allowed to do* (permissions). In my project: `isOwner` middleware ensures only the listing creator can edit or delete it; `isReviewAuthor` middleware ensures only the review author can delete their review."

---

### Q24. What does `passport-local-mongoose` do for you?

**Answer:**
> "It extends the Mongoose schema with:
> - `username` and `hash`/`salt` fields (auto-added)
> - `.register()` — creates a new user with a salted, hashed password
> - `.authenticate()` — returns a Passport-compatible Local Strategy function
> - `.serializeUser()` and `.deserializeUser()` — static methods for Passport session management
>
> It saves me from manually implementing password hashing, salt generation, and session serialization."

---

### Q25. How do you prevent unauthorized users from editing a listing?

**Answer:**
> "I have two levels of protection:
> 1. **`isLoggedIn` middleware** — checks if the user is authenticated at all. If not, redirects to the login page.
> 2. **`isOwner` middleware** — fetches the listing from the database and compares `listing.owner._id` with `req.user._id`. If they don't match, flashes an error and redirects back to the listing.
>
> Both middlewares are applied to the `PUT` and `DELETE` routes for listings."

---

### Q26. How does session persistence work across server restarts?

**Answer:**
> "By default, `express-session` stores sessions in memory, which is lost on server restart. I configured **`connect-mongo`** as the session store:
> ```js
> MongoStore.create({ mongoUrl: dbUrl, touchAfter: 24 * 3600 })
> ```
> This stores all session data in a MongoDB collection. `touchAfter: 24*3600` means the session document is only updated once per day (unless session data changes), reducing unnecessary DB writes."

---

## 7. File Upload & Cloudinary Questions

### Q27. How do you handle image uploads?

**Answer:**
> "I use **Multer** as the multipart form parser and **multer-storage-cloudinary** as the storage engine. The workflow is:
> 1. The HTML form uses `enctype='multipart/form-data'` and submits an image file.
> 2. Multer intercepts the request and pipes the file stream directly to Cloudinary via `CloudinaryStorage`.
> 3. Cloudinary stores the file under the `wanderlust_dev` folder and returns a public `url` and `filename`.
> 4. These values are saved to the Listing document's `image.url` and `image.filename` fields.
>
> The image never touches the server's local disk — it goes directly to Cloudinary."

---

### Q28. Why Cloudinary for image storage?

**Answer:**
> "- **Scalability** — Cloudinary's CDN delivers images globally with low latency, unlike local disk storage.
> - **On-the-fly transformations** — Images can be resized using URL parameters (e.g., `/upload/w_250/` for thumbnails).
> - **Reliability** — Cloud storage is persistent; local storage would be lost on server deploys.
> - **Security** — Credentials are stored as environment variables; images are organized in folders per project."

---

### Q29. How do you handle optional image updates in the edit form?

**Answer:**
> "When editing a listing, the user may or may not upload a new image. I handle this with a conditional check in the `updateListing` controller:
> ```js
> if (typeof req.file !== 'undefined') {
>   let url = req.file.path;
>   let filename = req.file.filename;
>   listing.image = { url, filename };
>   await listing.save();
> }
> ```
> If no file is uploaded, `req.file` is `undefined` and the existing image is retained."

---

## 8. Maps & Geocoding Questions

### Q30. How does the map feature work in your project?

**Answer:**
> "When a user creates a listing, they enter a location name (e.g., 'Manali, India'). My app uses the **Mapbox Geocoding API** to convert that text into geographic coordinates:
> ```js
> let response = await geocodingClient.forwardGeocode({ query: req.body.location, limit: 1 }).send();
> newListing.geometry = response.body.features[0].geometry;
> ```
> The resulting GeoJSON `Point` object (with longitude/latitude coordinates) is stored in the listing's `geometry` field. On the show page, Mapbox GL JS renders an interactive map and places a marker at those coordinates."

---

### Q31. What is GeoJSON and why do you use it?

**Answer:**
> "GeoJSON is a standard JSON format for representing geographic data structures. A `Point` feature looks like:
> ```json
> { 'type': 'Point', 'coordinates': [77.1025, 28.7041] }
> ```
> I use it because Mapbox GL JS natively understands GeoJSON, making it trivial to add map markers and layers. MongoDB also supports geospatial indexing on GeoJSON fields for proximity queries."

---

## 9. Session & Cookie Questions

### Q32. What is the difference between a session and a cookie?

**Answer:**
> "- **Cookie** — A small piece of data stored on the client's browser. In my project, the session ID is stored in a cookie called `connect.sid`.
> - **Session** — The actual user data (e.g., user ID, flash messages) stored **server-side** in MongoDB. The cookie merely holds the session ID key to look up the server-side data.
>
> This approach is more secure because sensitive data never leaves the server."

---

### Q33. What does `httpOnly: true` on the cookie do?

**Answer:**
> "The `httpOnly: true` flag makes the session cookie inaccessible to client-side JavaScript. This prevents **Cross-Site Scripting (XSS)** attacks from stealing the session cookie via `document.cookie`. The browser will still send the cookie with every HTTP request, but JavaScript cannot read it."

---

### Q34. What is `saveRedirectUrl` middleware and why is it needed?

**Answer:**
> "When an unauthenticated user tries to access a protected page (e.g., `/listings/new`), they get redirected to `/login`. After logging in, they should be sent back to where they originally wanted to go.
>
> The flow:
> 1. `isLoggedIn` saves `req.originalUrl` into `req.session.redirectUrl`.
> 2. Before the login POST handler runs, `saveRedirectUrl` copies the session URL to `res.locals.redirectUrl` (because Passport clears the session on login).
> 3. After successful login, the controller redirects to `res.locals.redirectUrl` or falls back to `/listings`."

---

## 10. Validation & Error Handling Questions

### Q35. Why use Joi when Mongoose already has validation?

**Answer:**
> "Mongoose validation runs at the database layer — only when saving a document. Joi validation runs **before** hitting the database:
> - It gives more descriptive, user-friendly error messages
> - It catches bad data earlier in the request cycle
> - It's more expressive for complex validations (nested objects, conditional rules)
> - If the server receives malformed data from Postman or API abuse (bypassing browser-side HTML validation), Joi catches it at the middleware level"

---

### Q36. How do you validate review submissions?

**Answer:**
> "I use a Joi schema defined in `schema.js`:
> ```js
> Joi.object({
>   review: Joi.object({
>     rating: Joi.number().min(1).max(5).required(),
>     comment: Joi.string().required(),
>   }).required(),
> })
> ```
> The `validateReview` middleware in `middleware.js` runs this schema against `req.body`. If validation fails, it throws an `ExpressError(400, errMsg)` which is caught and displayed to the user."

---

## 11. Security Questions

### Q37. How do you protect sensitive data like API keys?

**Answer:**
> "I store all sensitive credentials in a `.env` file which is **excluded from version control** via `.gitignore`. I use the `dotenv` package to load these values into `process.env` during development. In production, environment variables are set directly on the hosting platform.
>
> The `.env` file contains:
> - `ATLASDB_URL` — MongoDB connection string
> - `SECRET` — Session secret key
> - `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET` — Cloudinary credentials
> - `MAP_TOKEN` — Mapbox API token"

---

### Q38. What security vulnerabilities have you thought about in this project?

**Answer:**
> "1. **XSS** — `httpOnly` cookie flag prevents JS from reading session cookies. EJS auto-escapes output by default.
> 2. **CSRF** — Sessions use a secret key for signing. (Can be improved with `csurf` middleware.)
> 3. **Unauthorized access** — `isLoggedIn`, `isOwner`, `isReviewAuthor` middleware layers.
> 4. **Bad input** — Joi validation on the server side before database writes.
> 5. **Password security** — `passport-local-mongoose` uses PBKDF2 with salt, so passwords are never stored in plain text.
> 6. **Secret leakage** — `.env` is gitignored; API keys never exposed in source code."

---

## 12. Deployment & Environment Questions

### Q39. How would you deploy this application?

**Answer:**
> "I would deploy using:
> - **Render / Railway / Heroku** for hosting the Node.js server
> - **MongoDB Atlas** as the cloud database (already in use)
> - **Cloudinary** for image storage (already integrated)
> - Set `NODE_ENV=production` as an environment variable, which prevents `.env` file loading and uses platform-injected env vars instead
> - The `engines` field in `package.json` specifies Node.js version `22.3.0` for the hosting platform"

---

### Q40. Why is there a check for `process.env.NODE_ENV != 'production'` at the top of `app.js`?

**Answer:**
> "In development, secrets are stored in `.env` and loaded via `dotenv`. In production (e.g., on Render), environment variables are injected directly by the hosting platform — `dotenv` is unnecessary and could cause issues. This guard ensures `dotenv.config()` is only called locally."

---

## 13. General CS / Web Dev Questions

### Q41. What is REST? Is your API RESTful?

**Answer:**
> "REST (Representational State Transfer) is an architectural style for web APIs based on HTTP methods and resource-based URLs. My app follows RESTful conventions:
>
> | Action | Method | Route |
> |---|---|---|
> | List all listings | GET | `/listings` |
> | Show new form | GET | `/listings/new` |
> | Create listing | POST | `/listings` |
> | Show one listing | GET | `/listings/:id` |
> | Show edit form | GET | `/listings/:id/edit` |
> | Update listing | PUT | `/listings/:id` |
> | Delete listing | DELETE | `/listings/:id` |
>
> Since it uses server-side rendering (EJS) rather than a JSON API, it's more accurately described as a RESTful web application rather than a RESTful API."

---

### Q42. What is the difference between PUT and PATCH?

**Answer:**
> "- **PUT** — Replaces the entire resource with the new data. All fields must be sent; omitted fields may be set to null.
> - **PATCH** — Partially updates a resource. Only the fields being changed are sent.
>
> I use `PUT` for updates because I'm re-submitting the full listing form with all fields. In a proper REST API, PATCH would be more appropriate for partial updates."

---

### Q43. What is MVC architecture?

**Answer:**
> "MVC (Model-View-Controller) separates an application into three layers:
> - **Model** — Defines data structure and business rules (Mongoose schemas in `models/`)
> - **View** — Presents data to the user (EJS templates in `views/`)
> - **Controller** — Handles requests, fetches data from models, and sends responses or renders views (`controllers/`)
>
> This separation makes the code modular, easier to maintain, and testable."

---

### Q44. What is the Event Loop in Node.js?

**Answer:**
> "Node.js is single-threaded but handles concurrency through the **Event Loop**. When an async operation (DB query, file read, API call) is initiated, it's offloaded to the underlying system (via libuv). The event loop continuously checks if any async operations have completed and executes their callbacks. This allows Node.js to handle thousands of concurrent connections without blocking the thread — which is why it's ideal for I/O-heavy apps like WanderLust."

---

### Q45. What is the difference between `async/await` and callbacks?

**Answer:**
> "- **Callbacks** — Traditional approach where you pass a function to be called when async work completes. Can lead to 'callback hell' with deeply nested code.
> - **Promises** — Chainable `.then()/.catch()` syntax, better than callbacks but still verbose.
> - **`async/await`** — Syntactic sugar over Promises. Makes async code look synchronous, much more readable. I use `async/await` throughout my controllers for all database and API calls."

---

## 14. Behavioral / HR Questions

### Q46. What was the most difficult feature to implement?

**Answer:**
> "The most challenging part was implementing the **authorization system** correctly. Initially, I had only authentication (isLoggedIn), but realized any logged-in user could edit or delete any listing.
>
> Building `isOwner` middleware required me to understand Mongoose's `.equals()` method for comparing ObjectIds (since they're objects, not strings, direct `===` comparison fails). I also had to handle the case where the listing doesn't exist gracefully."

---

### Q47. What would you add or improve if you had more time?

**Answer:**
> "I would add:
> - **Booking system** — Allow users to book listings for specific dates with availability checking
> - **Search & filters** — Filter listings by location, price range, and category
> - **React frontend** — Replace EJS with a React SPA consuming a REST/GraphQL API
> - **Payment integration** — Stripe for secure payment processing
> - **Email notifications** — Nodemailer for booking confirmations
> - **Image deletion from Cloudinary** — Currently deleted listings leave orphaned images on Cloudinary
> - **Rate limiting** — To prevent API abuse and brute-force login attempts"

---

### Q48. How did you manage your code and ensure quality?

**Answer:**
> "I:
> - Used **Git** for version control with meaningful commit messages
> - Followed the **MVC pattern** to keep code organized and separated by concern
> - Wrote **middleware** to reuse common logic (auth guards, validation) across routes
> - Used `wrapAsync` to avoid repetitive `try/catch` blocks
> - Validated user input both client-side (HTML5 attributes) and server-side (Joi)
> - Tested routes manually using the browser and Postman"

---

### Q49. Explain a bug you faced and how you fixed it.

**Answer:**
> "A common bug I faced: after login, users were not being redirected to the page they originally tried to visit.
>
> **Root cause**: Passport.js re-generates the session on successful login, which cleared `req.session.redirectUrl` before I could use it.
>
> **Fix**: I created the `saveRedirectUrl` middleware that copies the redirect URL from the session to `res.locals` *before* Passport processes the login. This way, even after session regeneration, the redirect URL is still available in `res.locals` for the login controller to use."

---

### Q50. Why should we hire you based on this project?

**Answer:**
> "This project demonstrates that I can:
> - Build a complete, production-ready full-stack application from scratch
> - Implement industry-standard security practices (hashed passwords, httpOnly cookies, authorization middleware)
> - Integrate real third-party services (Cloudinary, Mapbox, MongoDB Atlas)
> - Write clean, organized, maintainable code using MVC and middleware patterns
> - Debug and solve real architectural problems (auth flows, async error handling, cascade deletes)
> - Think beyond just 'making it work' to include proper validation, error handling, and UX considerations
>
> I'm eager to continue learning and contributing to a team where I can apply and grow these skills."

---

> 💡 **Tip**: Always speak with confidence. Know your code inside-out — be ready to open and explain any file.
> Practice saying answers aloud and keep them concise (under 2 minutes per answer unless asked to elaborate).
