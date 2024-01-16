const { sql } = require('@vercel/postgres');


const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Testbutik 1',
      email: 'testbutik1@ctp.com',
      password: 'test',
    },
];

async function seedUsers() {
    try {
      await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      // Create the "invoices" table if it doesn't exist
      const createTable = await sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;
  
      console.log(`Created "users" table`);
  
      // Insert data into the "users" table
      const insertedUsers = await Promise.all(
        users.map(async (user) => {
          //const hashedPassword = await bcrypt.hash(user.password, 10);
          return sql`
          INSERT INTO users (id, name, email, password)
          VALUES (${user.id}, ${user.name}, ${user.email}, ${user.password})
          ON CONFLICT (id) DO NOTHING;
        `;
        }),
      );
  
      console.log(`Seeded ${insertedUsers.length} users`);
  
      return {
        createTable,
        users: insertedUsers,
      };
    } catch (error) {
      console.error('Error seeding users:', error);
      throw error;
    }
}
  
(async () => {
    await seedUsers();
})();