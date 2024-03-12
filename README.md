# GenStack

The genStack project refers to the generic stack for starting a project. I includes packages setup for a go-ahead.
Some packages include:

1. [TurboRepo](https://turbo.build/)
2. One web backend app based on [Elysia](https://elysiajs.com)
3. One shared libs for env files fetch
4. [semantic-release](https://github.com/semantic-release/semantic-release), [prettier](https://prettier.io/), [husky](https://typicode.github.io/husky/), [commitizen](https://github.com/commitizen/cz-cli), [commitlint](https://commitlint.js.org/)

The project is initiated with TurboRepo using [Bun](https://bun.sh/) workspaces. The whole project requires bun v1.0.30
at the time of writing.

### Running the project

For installing Bun, refer to [this link](https://bun.sh/docs/installation).

Install packages:

```bash
bun install
```

To run project:

```bash
cp sample.env .env
bun dev
```
