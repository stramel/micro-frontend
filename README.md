# Micro-Frontend Monorepo

## Getting Started

To get started is easy:

1. Clone this repo
2. Run `yarn`

You're ready to go! Run an app command by using `yarn <project> <command>`, (ie. `yarn admin dev` would spin up the admin folder's `dev` command)

## The Tech

### Yarn Workspaces

Yarn workspaces does the heavy lifting of the repository. By running `yarn` at the root level, all the dependencies will be installed at the top level and symlinked to their project's folder. This way the project doesn't need to know it is part of a bigger picture and can manage it's own dependencies directly. Read more about how this works here: https://classic.yarnpkg.com/en/docs/workspaces/

We also, utilize Yarn Workspaces for running commands. The command `yarn workspace <INSERT_PROJECT_NAME> <INSERT_PROJECT_COMMAND>` will trigger the command for the specified project. This keeps it simple to run commands without having to navigate into a directory/project.

### TypeScript Path Mapping

Typescript added "Path Mapping" to it's config object. This allows us to alias paths to other ones. This allows us to use common libraries under a specific alias (ie. `@coolfire/components`). You can read more here: https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping

### Lerna

Lerna simplifies our CI build process by allowing us to only build what is necessary for the changes that were pushed. It also supports so lower-level primitive functions that Yarn Workspaces won't ever cover. For the most part you don't need to worry too much about this section. However if you would like, you can read more here: https://github.com/lerna/lerna

## Other Notes

### Running Admin and Core in a Crude way

You can spin up 3 terminals:

1. `yarn start` - Spins up a reverse proxy nginx instance using Docker Compose
2. `BASEPATH=/admin yarn admin dev` - Spins up a dev instance of admin on `/admin`
3. `yarn core dev` - Spins up a dev instance of core on `/`

Now you can just navigate to `http://localhost` for core and `http://localhost/admin` for admin.

I'm looking to simplify and improve this part of the setup.

### Each app allows for customizing the Port and Hostname

You can customize the port and hostname by using their respective environment variables, `PORT` and `HOSTNAME`. (ie. `PORT=3000 yarn admin dev` or `HOSTNAME=qa.localhost yarn admin dev`)

This provides some interesting oppurtunities to easily switch between proxies easily.

**NOTE:** I had to remove `HOSTNAME` because it kept trying to bind to something else. However, you can still alias to use `qa.localhost` and `dev.localhost` as `localhost`.
