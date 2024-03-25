import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const data = [
    "https://images.unsplash.com/photo-1584762017375-9125b7918bdc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9jay1jb25jZXJ0fHx8fHx8MTcxMTMzNjc2Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
    "https://images.unsplash.com/photo-1548211610-a02688fafe12?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9jay1jb25jZXJ0fHx8fHx8MTcxMTMzNjc2Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
    "https://images.unsplash.com/photo-1602369944529-c237ca143d09?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9jay1jb25jZXJ0fHx8fHx8MTcxMTMzNjc1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
    "https://images.unsplash.com/photo-1598278197483-275a5ee09a7e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9jay1jb25jZXJ0fHx8fHx8MTcxMTMzNzU0NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
    "https://images.unsplash.com/photo-1548211610-a02688fafe12?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9jay1jb25jZXJ0fHx8fHx8MTcxMTMzNjc2Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
    "https://images.unsplash.com/photo-1614054111655-10c58a264433?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9jay1jb25jZXJ0fHx8fHx8MTcxMTMzNzU3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
    "https://images.unsplash.com/photo-1584230006297-da6cc19f1fef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9jay1jb25jZXJ0fHx8fHx8MTcxMTMzNzU3OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
    "https://images.unsplash.com/flagged/photo-1558905911-5a2ab1b3b361?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9jay1jb25jZXJ0fHx8fHx8MTcxMTMzNzU3OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
    "https://images.unsplash.com/photo-1574805950011-8cdf615261b2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9jay1jb25jZXJ0fHx8fHx8MTcxMTMzNzU3OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
    "https://images.unsplash.com/photo-1574155267225-3b5423dd45d9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9jay1jb25jZXJ0fHx8fHx8MTcxMTMzNzU4MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640"
].map(imageUrl => ({
    author: faker.person.fullName(),
    date: faker.date.anytime(),
    content: faker.lorem.paragraphs({min: 6, max: 20}),
    title: faker.lorem.sentence(),
    imageUrl
}));

const seedDataFunction = async () => {
    const client = new PrismaClient();
    await client.$connect();
    const count = await client.article.count();
    console.info(`${count} Articles found in the database`);
    if (count === 0 ) {
        console.info('Registering fake articles on the database');
        await client.article.createMany({data});
    }
};

const seedData = () => seedDataFunction().then(() => {
    console.info('Data Seeding finished Successfully');
    process.exit();
});

seedData();