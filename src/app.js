import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuario = [
  /*{
    username: 'bobesponja',
    avatar: 'https://www.nerdsite.com.br/wp-content/uploads/2022/11/Bob-Esponja-Novo-filme-estreia-apenas-em-2025-diz-site.jpg',
  },
  {
    username: 'patrick',
    avatar: 'https://assets.papelpop.com/wp-content/uploads/2021/03/patrick-bob-esponja.png'
  },
  {
    username: 'molusco',
    avatar: 'https://miro.medium.com/max/580/1*SVB1mupO2Wz6LqxVWn5Rgw.jpeg'
  }*/


]


const tweets = [
  /*{
    username: 'bobesponja',
    tweet: 'Eu gosto de encher o saco das pessoas que eu amo!'
  },
  {
    username: 'patrick',
    tweet: 'Sei lá, acho que minha vida tá coisada'
  },
  {
    username: 'molusco',
    tweet: 'Acredite na fantasia que vc quiser, mas faça isso longe de mim'
  }*/

]

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  usuario.push(req.body);
  res.status(201).send('OK');
})


app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body

  const user = usuario.find((user) => user.username === username);
  if (!user) {
    res.status(401).send("UNAUTHORIZED");
  } else {
    tweets.unshift(req.body)
  }

  res.status(201).send('OK')
})

function buscarAvatar(username) {
  const usuarioVerificado = usuario.find((obj) => username === obj.username)
  return usuarioVerificado.avatar
}

app.get("/tweets", (req, res) => {

  let publicados = []

  for (let i = 0; i < 10; i++) {
    if (i < tweets.length) {
      publicados.push(
        {
          username: tweets[i].username,
          avatar: buscarAvatar(tweets[i].username),
          tweet: tweets[i].tweet
        }
      )
    }
  }
  res.send(publicados);
})


app.listen(5000, () => {
  console.log('Servidor Funcionando!');
})