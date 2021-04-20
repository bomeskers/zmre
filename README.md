# zmre

Zuurbier Meskers Real Estate rekentool

## Installation

This repo uses Yarn for for package managing and developing.  
Install all packages with the following command.

```cli
yarn install
```

This will run for a little while and install all dependencies you'll need to start working on the project.

## Development

The project uses Webpack to bundle all files together in a single JS file, containing the JavaScript and CSS needed for the project. To start the engine and get to developing, execute the following command.

```cli
yarn start
```

This will start the _watch_ program of Webpack, which means that every file you save will trigger a new build and refresh the files you're working with the latest changes.

## Extensions

To make life a bit easier, but at the same time more complex, you'll need to use some extensions to accommodate for the usage of third party packages, like Tailwind CSS.

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - For formatting your files according to specified rules. Look at the [.prettierrc](./.prettierrc) for the current configuration.
-   [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - A linter which will check your styles for any syntax mistakes. Also enables you to configure what the linter should look for or ignore.
-   [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - With this VSCode will know what certain features of Tailwind are and will give you hints about options that Tailwind offers.

## Styles

Styling is done with the help of [Tailwind.css](https://tailwindcss.com). It's something like Bootstrap in that it has a lot of pre-defined classes that make it fast to work with, though Tailwind does not rely on Sass and has a lot of unique features.

I know this makes things a bit more complex, however, you're not required to actually use Tailwind and it's perfectly fine just to write your own CSS.

Do however use the module system. When creating a `.css` file it needs to be included in the build. Otherwise Webpack won't include the file when combining the files and the styles won't be applied.

For example, when creating a `components/button.css` file, include it by using a CSS `@import` statement in the `style.css` file including the button styles in the project.

```css
@import './components/button';
```

## Colors

I've looked for a color palette on [coolors](https://coolors.co) and landed on [this set](https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f). I've picked this palette because I felt that it ambiates a calm, strong and professional energy and has enough room for creativity as the colors can be combined in many ways.

-   <span><div style="background-color:#F4F1DE;display:inline-block;width:15px;height:15px;border:1px solid white;"></div> Merino</span>
-   <span><div style="background-color:#E07A5F;display:inline-block;width:15px;height:15px;border:1px solid white;"></div> Terracotta</span>
-   <span><div style="background-color:#3D405B;display:inline-block;width:15px;height:15px;border:1px solid white;"></div> Gun Powder</span>
-   <span><div style="background-color:#81B29A;display:inline-block;width:15px;height:15px;border:1px solid white;"></div> Acapulco</span>
-   <span><div style="background-color:#F2CC8F;display:inline-block;width:15px;height:15px;border:1px solid white;"></div> Manhattan</span>

The color names are generated by a website with a [name that color](https://chir.ag/projects/name-that-color/#6195ED) module. If this system is confusing, then we'll switch to regular names of colors, like red, blue, etc.
