<h1 align="center">

Exercício - Cidade Alta

</h1>

<div align="center">

[ENGLISH][lang-en]
|
[PORTUGUÊS][lang-pt]
|
[日本語][lang-jp]

</div>

<div align="center">

[![card-languages]][btn-null]
[![card-last-commit]][btn-null]
[![card-repo-size]][btn-goto-clone]
[![card-code-size]][btn-null]
[![card-license]][btn-goto-license]
[![card-issues]][btn-goto-issues]

</div>

## Sobre <span id="id-about"/>

Esse projeto é apenas um exercício passado pelo time de recrutamento da [Cidade Alta][btn-requester], afim de testar minhas habilidades.

### Descrição do exercício:

O Departamento de Polícia do Cidade Alta está precisando de um sistema para controlar os códigos penais da cidade. Para isso é necessário uma aplicação onde o usuário irá autenticar-se e após o sucesso poderá consultar, incluir, editar e visualizar os códigos penais da Cidade Alta. A aplicação deverá conter:

- Tela de autenticação com os campos de usuário e senha;
- Tela de listagem dos Códigos Penais com os campos Nome, Data, Multa e Status.
  - Ordenação
  - Filtro
  - Botão para inclusão de um novo registro.
  - Permitir editar, visualizar e excluir (com confirmação) o registro.
- Tela de Visualização com todas as informações do código penal.
- Tela de Edição.
- Tela de Inclusão.

Os dados estão disponíveis na API(Provida com JSON Placeholder) para consumo no seguinte endpoint: https://my-json-server.typicode.com/cidadealta/exercise

## :triangular_ruler: Tecnologia <span id="id-about"/>

As seguintes ferramentas foram usadas na construção do projeto:

[Vite]
[Vitest]
[Typescript]
[React]
[React Router Dom][react-router-dom]
[Redux]
[Styled-Components]

## :camera: Screenshots <span id="id-looking"/>

##### [Pular Screenshots][btn-skip]

#### Login(`/`):

![login]

#### Dashboard(`/dashboard`):

![dashboard]
![dashboard-filtered]

#### Visualização(`/dashboard/view`):

![dashboard-view-redirect]

#### Visualização(`/dashboard/view/n`):

![dashboard-view]

#### Edição(`/dashboard/edit`):

![dashboard-edit]

#### Edição(`/dashboard/edit/n`):

![dashboard-edit-redirect]

#### Criação(`/dashboard/create`):

![dashboard-create]

## [:eyes: Demonstração][btn-preview] <span id="id-preview"/>

## :electric_plug: Pré-requisitos <span id="id-clone"/>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git][btn-git]
- [Node.js][btn-node]

Além disto é bom ter um editor para trabalhar com o código como [VSCode][btn-vscode].

## :warning: Atenção

Yarn está sendo usando como gestor de pacotes neste projeto, recomendado não 'commitar' `package-lock.json` se você está usando npm!

Para instalar o yarn, vá ao seu terminal e cole esse comando:

```bash
npm install yarn -g
```

## :bulb: Faça você mesmo

##### No seu terminal clone o repositório e instale as dependências.

###### - para clonar o repositório

```bash
git clone https://github.com/ruanmoreiraofc/drkz-cidade-alta.git
```

###### - para entrar na pasta

```bash
cd drkz-cidade-alta
```

###### - para instalar as dependências

```bash
yarn
```

Com as dependências instaladas, crie um arquivo .env como o deste [exemplo.][btn-example]

##### Agora rode a aplicação.

###### - para rodar os testes

```bash
yarn test
```

<small>ao usar `yarn test:dev` ele entrará em modo continuo sendo assim não será rodar o comando novamente para poder rodar os testes.</small>

###### - para rodar o servidor

```bash
yarn dev
```

<small>com o servidor aberto, a aplicação ficará disponível no endereço [localhost][btn-localhost].</small>

## :balance_scale: Licença <span id="id-license"/>

Este projeto está sob a Licença MIT. Leia a [LICENÇA][btn-license] para mais informações.

# :boy: Autor <span id="id-author"/>

<div align="center">

  <p>
    <img
      alt="author-img"
      title="Ruan Moreira de Jesus"
      width="100"
      src="https://github.com/ruanmoreiraofc.png">
  </p>

  <!-- ![author-img] does not work with Github's default profile image -->

Feito com :heart: por Ruan Moreira de Jesus!

[![author-card-email]][author-btn-email]
[![author-card-discord]][author-btn-discord]
[![author-card-github]][author-btn-github]

</div>

<!--
  ***---- VARIABLES ----***
-->

[btn-null]: #

<!-- *** AUTHOR *** -->

[author-img]: https://github.com/ruanmoreiraofc.png?size=100 'Ruan Moreira de Jesus'
[author-card-email]: https://img.shields.io/badge/Email--$?style=social&logo=microsoft-outlook
[author-card-discord]: https://img.shields.io/badge/Discord--$?style=social&logo=discord
[author-card-github]: https://img.shields.io/github/followers/ruanmoreiraofc?style=social
[author-btn-email]: mailto:ruanmoreiraofc@hotmail.com 'Entre em contato!'
[author-btn-discord]: #RuanMoreiraOfc#7904 'RuanMoreiraOfc#7904'
[author-btn-github]: https://github.com/ruanmoreiraofc 'Perfil do Github'

<!-- *** LANGUAGES README *** -->

[lang-en]: README.md
[lang-pt]: #
[lang-jp]: #

<!-- *** INFO CARDS *** -->

[card-languages]: https://img.shields.io/github/languages/count/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge&label=Linguagens
[card-last-commit]: https://img.shields.io/github/last-commit/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge&label=Último%20Commit
[card-repo-size]: https://img.shields.io/github/repo-size/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge&label=Repositório
[card-code-size]: https://img.shields.io/github/languages/code-size/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge&label=Código
[card-license]: https://img.shields.io/github/license/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge&label=Licença
[card-issues]: https://img.shields.io/github/issues/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge

<!-- *** MAIN BUTTONS *** -->

[btn-requester]: https://github.com/cidadealta 'Empresa'
[btn-git]: https://git-scm.com
[btn-node]: https://nodejs.org
[btn-vscode]: https://code.visualstudio.com

 <!---->

[btn-skip]: #id-preview
[btn-goto-clone]: #id-clone
[btn-goto-license]: #id-license
[btn-goto-issues]: https://github.com/ruanmoreiraofc/drkz-cidade-alta/issues?q=is%3Aopen

 <!---->

[btn-preview]: https://ruanmoreiraofc.github.io/drkz-cidade-alta
[btn-example]: .env.example
[btn-license]: LICENSE
[btn-localhost]: http://localhost:3000

<!-- *** TECHNOLOGY *** -->

[vite]: https://vitejs.dev/
[vitest]: https://vitest.dev/
[typescript]: https://www.typescriptlang.org/
[react]: https://reactjs.org
[react-router-dom]: https://github.com/ReactTraining/react-router
[redux]: https://redux.js.org/
[styled-components]: https://styled-components.com/

<!-- *** SCREENSHOTS *** -->

[login]: https://user-images.githubusercontent.com/36450847/159626618-aebf9317-9584-4409-bc02-76a918584043.png
[dashboard]: https://user-images.githubusercontent.com/36450847/159626626-57cb27ab-ebfc-4612-acec-87940e2949a9.png
[dashboard-filtered]: https://user-images.githubusercontent.com/36450847/159626628-0507412b-55ac-40e6-9d4a-ac5b9be4d435.png
[dashboard-view]: https://user-images.githubusercontent.com/36450847/159626636-b311b430-4acd-47b1-93d9-6f04e61412de.png
[dashboard-view-redirect]: https://user-images.githubusercontent.com/36450847/159629758-ee2e3764-d05e-4c60-a4c8-b2ff6573c291.png
[dashboard-edit]: https://user-images.githubusercontent.com/36450847/159626638-2fd08b19-53ff-46f8-ba35-73dbe99795ec.png
[dashboard-edit-redirect]: https://user-images.githubusercontent.com/36450847/159629755-8ce887af-dc05-4bdb-97ef-12173235ffd1.png
[dashboard-create]: https://user-images.githubusercontent.com/36450847/159626648-57c0a681-6581-4ce7-911f-0cef43c0d38a.png
