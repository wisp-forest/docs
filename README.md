## Wisp Forest Documentation

This repository contains the sources of our project documentation, hosted over at https://docs.wispforest.io/. We use [VitePress](https://vitepress.dev) as our static site generator, so you need a NodeJS-compatible JavaScript runtime to serve and/or build it.

### Writing documentation
Clone the repository like normal and install its dependencies:

```sh
$ npm install --legacy-peer-deps
```

For the time being this flag is required because [`vitepress-plugin-tabs`](https://www.npmjs.com/package/vitepress-plugin-tabs) currently has a hard dependency on an older version of VitePress.

- To serve the site locally, run
    ```sh
    $ npm run dev
    ```
- To build the site for deployment, run
    ```sh
    $ npm run build
    $ npm run preview # to verify the build works properly using a local server
    ```

For more details, check [the VitePress documentation](https://vitepress.dev/reference/cli).

### Adding Documentation for a new Project
- Add a new directory for the project's documentation
- Add a `feature` entry to the frontmatter of [`index.md`](index.md) along with the project's icon file in `public`, named like `<project>-icon.png`
- Tell the site about the project's icon, description, repository URL and color by adding a respective entry to [`meta.ts`](components/meta.ts)