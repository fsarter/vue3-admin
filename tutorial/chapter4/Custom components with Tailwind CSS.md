Some UI framework provide out-of-the-box components like `Element UI`,`Vuetify` etc.It's very convenient and efficiency using OOTB framework, all you need to do is adding the components to your view, binding the data, adjusting the style.

Since we are using tailwindcss framework which is more lightweight and flexible. So we will take one more step in this tutotial, we create our own custom UI components start from native html element with the help of vue and tailwindcss.

## Top Navigation Bar
We have created a `NavBar` component in Chapter 2, then we add more items to it.

Here is the general layout of a top navigation bar
```
|-----------------------------------------------------|
| Brand Name                        Nickname | Avatar |
|-----------------------------------------------------|
```
The `Brand Name` element float on the left , `Nickname` and `Avatar` element float on the right. All the elements align at the vertical center of the bar.

Now let's see how to achieve this layout.

**`src/components/NavBar.vue`**
```html
<template>
  <div class="flex items-center justify-between border h-14">
    <div>Brand Name</div>
    <div>
      <span>Nickname</span>
      <div>Avatar</div>
    </div>
  </div>
</template>
```
Here, we removed `Top Navigation Bar` text, add two `div` and one `span` tag, replace `justify-center` with `justify-between`.

Run `npm run dev` and the page renderd as below:

We can see `Brand Name` float on the left, `Nickname` and `Avatar` float on the right, almost what we want.The magic here is `justify-between` push its two children elements aside and fill space between them.

Then we add more details to `NavBar`:
**`src/components/NavBar.vue`**
```html
<template>
  <div class="flex items-center justify-between border h-14 px-4 font-bold">
    <div>Brand Name</div>
    <div class="flex items-center gap-2">
      <span>Nickname</span>
      <div
        class="flex relative rounded-full border h-10 w-10 items-center justify-center text-xs"
      >
        <img src="../assets/logo.png" class="absolute h-8 w-8" />
        <span class="absolute">Avatar</span>
      </div>
    </div>
  </div>
</template>
```
What we do here is:
1. Add padding space on the left and right side of the bar with `px-4`
2. Add `font-bold` class to make text in the bar bold and identical.
3. Add `flex` and `gap-2` to arrange Nickname and Avatar elements in a row.
4. Add `img` element to display the vue logo as avatar image.
5. Add `relative` and `absolute` classes to make avatar text stack on top of image.
6. Some `h-x` and `w-x` classes setting heights and widths.

## SVG Icon System
If you have a large project, you will realize that you need all kinds of icons to provide end users professional UI and you need a good management of those icons.

So, here we will create one SVG icon component, and wrap all those svg icon files designed by yourself or downloaded from other opensource libraries.

### Create SVG Icon Wrapper
Create `SvgIcon.vue` in `components` folder, edit its content:

**`src/components/SvgIcon.vue`**
```javascript
<template>
  <svg aria-hidden="true" class="fill-current">
    <use :href="symbolId" />
  </svg>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon",
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return { symbolId };
  },
});
</script>
```
Here, you will be confused.Do not worry, here we defined the entry component or component wrapper.It has two props `prefix` and `name`, and concat them as `symbolId`.The `symbolId` represents a global component registered by a plugin we will introduce next step.

### Register SVG Files
Here we use a vite plugin called [`vite-plugin-svg-icons`](https://github.com/vbenjs/vite-plugin-svg-icons) that does the job well.

```powershell
npm i vite-plugin-svg-icons -D
```

Then, config vite plugin.

**`vite.config.js`**
```js
...
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default defineConfig({
  plugins: [
    ...
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  ...
});

```
The `symbolId` option here has the same format as `SvgIcon` component.

Next, introduce the registration script in `src/main.js` and register `SvgIcon` component globally.

**`src/main.js`**
```javascript
...
import { createApp } from 'vue'
import App from './App.vue'
import "./index.css";
import "virtual:svg-icons-register";
import SvgIcon from "./components/SvgIcon.vue";

const app = createApp(App); // name the instance for subsequent config
app.component("SvgIcon", SvgIcon); // register component globally
app.mount("#app");
```

Finally, create folder `src/assets/icons` that we configed for `iconDirs` option in `vite.config.js`.

We can get icons from [Google fonts](https://fonts.google.com/icons):

Search `arrow up` download `Keyboard Arrow Up` with default Customization.

Search `arrow down` download `Keyboard Arrow Down` with default Customization.

Copy downloaded icons to folder `src/assets/icons`.

### Use SVG Icons in Custom Components
If you have completed all the previous steps, it is easy to use SVG icons now.

Just copy SVG file name you want from icons folder, put it as `SvgIcon` component's name property.

Here we have an example:

**`src/App.vue`**
```html
...
<template>
  <MainLayout>
    <h1 class="underline text-red-500 text-3xl">Main Layout</h1>
    <SvgIcon
      name="keyboard_arrow_down_FILL0_wght400_GRAD0_opsz48"
      class="text-red-500"
    />
  </MainLayout>
</template>
...
```

Run `npm run dev`, you can see rendered page:

The `Keyboard Arrow Down` icon shows up with red color by adding `text-red-500` class.

## Side Menu
As usual, side menus have tree structure.
```
|--Item.1
|    |--Item.1.1
|    |--Item.1.2
|    |    |--Item.1.2.1
|    |    |--Item.1.2.2
|--Item.2
|    |--Item.2.1
|    |--Item.2.2
|    |    |--Item.2.2.1
|    |    |--Item.2.2.2
|--Item.3
|--Item.4
|--...
```
Here we will create a common component called `MenuItem` which denote one menu item, and nested itself to construct the tree.

**`src/components/`**


