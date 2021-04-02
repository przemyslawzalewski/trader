import faker from "faker";

const COUNT = 15000;

const range = (n) =>
  Array(n)
    .fill(0)
    .map((_, index) => index);

export const traders = range(COUNT).map((index) => ({
  id: `${index + 1}`,
  name: faker.company.companyName(),
  trade: faker.name.jobTitle(),
  location: faker.address.cityName(),
  postCode: faker.address.zipCode(),
  area: faker.address.cityName(),
  email: faker.internet.email(),
  ratings: Math.floor(Math.random() * 1000),
  rating: (Math.random() * 5).toFixed(2),
  phone: faker.phone.phoneNumber(),
  description: {
    paragraphs: range(2 + Math.floor(Math.random() * 10)).map(() =>
      faker.lorem.paragraph()
    ),
  },
  reviews: range(2 + Math.floor(Math.random() * 500)).map((index) => ({
    id: `${index + 1}`,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    date: faker.date.past().toISOString(),
    quote: faker.lorem.paragraph(),
    rating: (Math.random() * 5).toFixed(2),
    reply: Math.random() < 0.1 ? faker.lorem.paragraph() : null,
    impression: Math.floor(Math.random() * 5),
    cleanliness: Math.floor(Math.random() * 5),
    value: Math.floor(Math.random() * 5),
    punctuality: Math.floor(Math.random() * 5),
    quality: Math.floor(Math.random() * 5),
    overall: Math.floor(Math.random() * 5),
    recommend: Math.random() < 0.9,
    lead: Math.random() < 0.7,
  })),
}));
