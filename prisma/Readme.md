npm i -D prisma @prisma/client

npx prisma init

npx prisma generate

npx prisma migrate dev --name <add_user_based_tables>

npx prisma studio

npx tsx ./db/seed

## Authentication
https://authjs.dev/getting-started/adapters/prisma

drop the development database

npx prisma migrate reset