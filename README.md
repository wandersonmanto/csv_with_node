npm init -y
npm install express

ORM
npm install prisma -D
npm i @prisma/client

npx prisma init
Para iniciar o prisma e adicionar os arquivos schema.prisma e .env
após a criação de um model
exemplo de um model prisma:
model Products {
  id Int @id @unique @default(autoincrement())
  descricao String
  estoque Int

  @@map("products")
}
executar npx prisma migrate dev para criacao de tabela no banco. (será solicitado uma descrição para identificar a migration)
Em caso de sucesso será criada a tebela desejada e também uma tabela _prisma_migrations.

npm install typescript --save-dev
npm i -D @types/node
npm i -D @types/express
npm install -D @types/express typescript ts-node

create server.ts
npx tsc --init

create router in src/routes.ts
import router in src/server.ts

create new script in package.json
"dev": "ts-node src/server.ts",

exec npm run dev for test aplication

npm install --save multer
npm install --save @types/multer
import multer in src/routes.ts

Escolha do SQLite
O SQLite é escolhido para este guia devido à sua simplicidade, já que não requer uma instância de banco de dados separada e funciona com um arquivo local. No entanto, o Prisma suporta vários outros bancos de dados, como PostgreSQL, MySQL e SQL Server.
