# Teste VExpenses 

# Sobre o projeto
Essa aplicação é uma agenda de contatos como teste.

# Tecnologias utilizadas
## Back end
- Node.js
- Express
- Sequelize
- Postgresql
- JWT
- Bcryptjs

## Front end
- Reactjs
- Redux
- Formik

# Como executar o projeto

Pré-requisitos: npm, postman e postgresql instalados 

```bash
# crie uma base de dados no postgresql com o nome de sua preferência

# clone o repositório
git clone https://github.com/pcoliveira98/teste-vexpenses

# entre na pasta backend e substitua o nome do arquivo ".env.example" para apenas ".env"

# entre nesse mesmo arquivo ".env" e configure as variáveis de ambiente de acordo com sua preferência

# execute o comando para a instalar as dependências do projeto
npm install

# execute o comando para criar as tabelas no seu banco de dados
npx sequelize db:migrate

# execute o projeto
npm run dev

# entre na pasta frontend e execute o camando
npm install

# ainda no frontend entre na pasta src/services e modifique o arquivo api.js para colocar a url onde a api(backend) irá rodar na sua máquina

# e por fim rode o comando para rodar o frontend
npm start
```


# Autor

Paulo César Cintra de Oliveira

https://www.linkedin.com/in/paulo-c%C3%A9sar-cintra-de-oliveira-b31787156/

