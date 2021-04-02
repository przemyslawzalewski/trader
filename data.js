import faker from "faker";
import Random from "./random";

faker.seed(123);

const random = new Random(123);

const randomFloat = () => random.nextFloat();

const COUNT = 500;

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
  ratings: Math.floor(randomFloat() * 1000),
  rating: (randomFloat() * 5).toFixed(2),
  phone: faker.phone.phoneNumber(),
  imageUrl: `http://www.avatarpro.biz/avatar/${index + 1}?s=256`,
  description: {
    paragraphs: range(2 + Math.floor(randomFloat() * 10)).map(() =>
      faker.lorem.paragraph()
    ),
  },
  reviews: range(2 + Math.floor(randomFloat() * 100)).map((index) => ({
    id: `${index + 1}`,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    date: faker.date.past().toISOString(),
    quote: faker.lorem.paragraph(),
    rating: (randomFloat() * 5).toFixed(2),
    reply: randomFloat() < 0.1 ? faker.lorem.paragraph() : null,
    impression: Math.floor(randomFloat() * 5),
    cleanliness: Math.floor(randomFloat() * 5),
    value: Math.floor(randomFloat() * 5),
    punctuality: Math.floor(randomFloat() * 5),
    quality: Math.floor(randomFloat() * 5),
    overall: Math.floor(randomFloat() * 5),
    recommend: randomFloat() < 0.9,
    lead: randomFloat() < 0.7,
  })),
}));
