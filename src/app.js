import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuario = [
  {
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
  }


]


const tweets = [
  {
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
  }

]



app.listen(5000, () => {
  console.log('Servidor Funcionando!');
})