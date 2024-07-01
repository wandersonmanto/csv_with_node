# Ler arquivos csv com Node.js!

O projeto criado usando Node.js e Typescript faz parte da construção de soluções para o mundo corporativo, 
visando a integração de documentos e disponibilidade de informações para a tomada de decisões.

### Bibliotecas nativas.
**"stream"**
**"readline"**

### Bibliotecas externas.
**"express"**
**"prisma"**
**"multer"**

## Escolhendo o banco de dados.
Escolha do **SQLite**
O SQLite é escolhido para este guia devido à sua simplicidade, já que não requer uma instância de banco de dados separada e funciona com um arquivo local. No entanto, o Prisma suporta vários outros bancos de dados, como **PostgreSQL, MySQL e SQL Server**.

## Iniciando o projeto.
Primeiro crie o projeto iniciando o node.

* ### Node e Typescript.
npm init -y
npm install typescript --save-dev
npm i -D @types/node

**inicie o typescript**  
npx tsc --init

**inicie o arquivo server**  
src/server.ts

**crie um script para a execução do server**  
in package.json  
"dev": "ts-node src/server.ts",

* ### Express.
npm install express

**Adicione a tipagem do express**  
npm install -D @types/express typescript ts-node

**Adicione as rotas**  
create router in src/routes.ts  
import router in src/server.ts

**Iniciando o server**  
exec npm run dev for test aplication  
(Após criar as rotas e iniciar o app do express)

* ### Prima.
ORM (Object-Relational Mapping) para Node.js
Ele facilita o trabalho com bancos de dados através de uma 
API intuitiva e fornece recursos como migrações de banco de dados, consultas fortemente tipadas e um modelo de dados declarativo.

**Adicionando o prisma ao projeto**  
npm install prisma -D  
npm i @prisma/client

**Iniciando o prisma**  
npx prisma init  
Para iniciar o prisma e adicionar os arquivos schema.prisma e .env

**Criando o primeiro model**
#### exemplo de um model prisma:
```
model Products {
  id Int @id @unique @default(autoincrement())
  descricao String
  estoque Int

  @@map("products")
}
```

após a criação de um model  
executar npx prisma migrate dev para criacao de tabela no banco. (será solicitado uma descrição para identificar a migration)  
Em caso de sucesso será criada a tebela desejada e também uma tabela _prisma_migrations.

* ### Multer.
Multer é um pacote npm comumente usado em aplicativos Node. js para manipular dados multipart/form, particularmente para uploads de arquivos. 
Ele simplifica o processo de manipulação de uploads de arquivos ao fornecer middleware que pode ser facilmente integrado em aplicativos Express. js.

**Adicionando o multer ao projeto**  
npm install --save multer  
npm install --save @types/multer  
import multer in src/routes.ts

## Obs.
Todos os console.logs comentados em src/routes.ts  
foram deixados para vificação dos pontos em que a plicação foi testada  
a medida que ia sendo contruido. Os retornos de cada um deles ajuda a entender a evolução da aplicação.











