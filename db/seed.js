import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createDestination } from "#db/queries/destinations";
import { createReview } from "#db/queries/reviews";
import { faker } from "@faker-js/faker";


await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

a
async function seed() {
  // create User
  const user = await createUser({
    username: "travel_guru",
    password: "Password123",
  })
};
  console.log("Created user:", user);
// create Destinations
  const destinations = [];
  for (let i = 0; i < 10; i++) {
    const destination = await createDestination({
      name: faker.address.city(),
      description: faker.lorem.sentence(),
      location: faker.address.streetAddress(),
    });
    destinations.push(destination);
  }
  console.log("Created destinations:", destinations);

  // create Reviews
  const reviews = [];
  for (let i = 0; i < 20; i++) {
    const review = await createReview({
      userId: user.id,
      destinationId: destinations[faker.datatype.number({ min: 0, max: destinations.length - 1 })].id,
      rating: faker.datatype.number({ min: 1, max: 5 }),
      comment: faker.lorem.sentence(),
    });
    reviews.push(review);
  }
  console.log("Created reviews:", reviews);