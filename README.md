<h1 align="center">

Exercise - Cidade Alta

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

## About <span id="id-about"/>

This project is just a exercise passed by [Cidade Alta][btn-requester] team recruiter, in order to
test my skills when I applied to a job of them.

### Exercise description:

The police department from Cidade Alta needs a system to control the city's penal codes. In order to accomplish it will be necessary a application where the user will try to authenticate and with a approved response them will be able to retrieve, include, edit and view all details of the penal codes from Cidade Alta. The application must have:

- A page with username and password fields;
- A page listing all penal codes with: name, date, penalty, status;
  - Ordering
  - Filtering
  - Include Button
  - Edit, View, Delete(with a confirmation dialog) Button.
- A page listing all information from a unique penal code.
- A edit page.
- A include page.

Api endpoint at: https://my-json-server.typicode.com/cidadealta/exercise

## :triangular_ruler: Technology <span id="id-about"/>

It was used on development:

[Vite]
[Vitest]
[Typescript]
[React]
[React Router Dom][react-router-dom]
[Redux]
[Styled-Components]

## :camera: Screenshots <span id="id-looking"/>

##### [Skip Screenshots][btn-skip]

#### Login(`/`):

![login]

#### Dashboard(`/dashboard`):

![dashboard]
![dashboard-filtered]

#### View(`/dashboard/view`):

![dashboard-view-redirect]

#### View(`/dashboard/view/n`):

![dashboard-view]

#### Edit(`/dashboard/edit`):

![dashboard-edit]

#### Edit(`/dashboard/edit/n`):

![dashboard-edit-redirect]

#### Create(`/dashboard/create`):

![dashboard-create]

## [:eyes: Preview][btn-preview] <span id="id-preview"/>

## :electric_plug: Requirements <span id="id-clone"/>

Before to start, you will need have installed on your computer these programs:

- [Git][btn-git]
- [Node.js][btn-node]

Also is good have a code editor like [VSCode][btn-vscode].

## :warning: Warnings

Yarn being used as package manager in this project, be preferred to **do not** commit
`package-lock.json` if you're using npm!

To install Yarn, go to your terminal and paste this command:

```bash
npm install yarn -g
```

## :bulb: Do it by yourself

##### In your terminal clone the repository and install the dependencies.

###### - to clone the repository

```bash
git clone https://github.com/ruanmoreiraofc/drkz-cidade-alta.git
```

###### - to enter into the folder

```bash
cd drkz-cidade-alta
```

###### - to install the dependencies

```bash
yarn
```

With all done, create a new .env file like this [example.][btn-example]

##### Now run your project.

###### - to run the tests

```bash
yarn test
```

<small>using `yarn test:dev` will re-test without re-running the command.</small>

###### - to run the server

```bash
yarn dev
```

<small>with the server open, you will be able to see the application on [localhost][btn-localhost].</small>

## :balance_scale: License <span id="id-license"/>

This project is under the MIT license. See the [LICENSE][btn-license] for more information.

# :boy: Author <span id="id-author"/>

<div align="center">

  <p>
    <img
      alt="author-img"
      title="Ruan Moreira de Jesus"
      width="100"
      src="https://github.com/ruanmoreiraofc.png">
  </p>

  <!-- ![author-img] does not work with Github's default profile image -->

Made with :heart: by Ruan Moreira de Jesus!

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
[author-btn-email]: mailto:ruanmoreiraofc@hotmail.com 'Get in touch!'
[author-btn-discord]: #RuanMoreiraOfc#7904 'RuanMoreiraOfc#7904'
[author-btn-github]: https://github.com/ruanmoreiraofc 'Github Profile'

<!-- *** LANGUAGES README *** -->

[lang-en]: #
[lang-pt]: README_PORTUGUESE.md
[lang-jp]: #

<!-- *** INFO CARDS *** -->

[card-languages]: https://img.shields.io/github/languages/count/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge&label=Languages
[card-last-commit]: https://img.shields.io/github/last-commit/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge&label=Last%20Commit
[card-repo-size]: https://img.shields.io/github/repo-size/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge&label=Repo%20Size
[card-code-size]: https://img.shields.io/github/languages/code-size/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge&label=Code%20Size
[card-license]: https://img.shields.io/github/license/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge&label=License
[card-issues]: https://img.shields.io/github/issues/ruanmoreiraofc/drkz-cidade-alta?style=for-the-badge

<!-- *** MAIN BUTTONS *** -->

[btn-requester]: https://github.com/cidadealta 'Company'
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
