# Node Project Two - Prisma

In this project, you will build API for a bookstore and use Prisma with SQlite.

In this project, you will be building a backend application for a bookstore. They want us to create for them a way to add books in their database and manage the information of their bookstore. The books will have authors.

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository (Not Gabi's by mistake!).
* [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
* [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [ ] Push commits: git push origin `<firstName-lastName>`.


### Minimum Viable Product

#### Setup your Prisma

 Run `npm install prisma --save-dev`
 then Run `npx prisma init --datasource-provider sqlite`

 This will generate your Prisma file under the `prisma` directory.

 Your prisma is setup now, you will need to change the `datasource db` inside your `prisma.schema` file to:

 ```
 datasource db {
  provider = "sqlite"
  url      = "file:./bookstore.db"
}
 ```

You will need to go ahead and create your models. 

Make sure your models and fields follow this instruction:

1. bookstore - fields: id, name, location, created, updated
2. author - fields: id, name, created, updated.
3. book - fields: id, bookId, bookstoreId, title, price, image, created, updated.

Relations: `Author to Book is one to many`, meaning one author can have many books but each book has one author. Also `Bookstore to book is one to many`, meaning each Bookstore has many books but each book belongs to one store.

Once you're done with all your schema setup, run `npx prisma migrate dev` to migrate all your changes to the `SQlite` database.

Make sure to setup your `seed.js` file in `prisma` directory. Add all the data you need in your seed file.

#### Connect Prisma to your endpoints

  - Setup your `lib` directory and instantiate your prisma.
  - Setup all your endpoints in `bookstores.js`, `authors.js` and `books.js`
  - Make sure to test all your endpoints with `Postman`


### Stretch Goals

- Create new routes for sign up and login and make sure you created new models in Prisma.
- Change the database to `Planetscale`.