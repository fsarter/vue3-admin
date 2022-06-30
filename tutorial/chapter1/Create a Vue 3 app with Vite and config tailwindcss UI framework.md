## Create Vue 3 project with Vite
There is several ways to create Vue project.Because we use vite as build tool, so we create Vue project with Vite for simple.

First of all, you should install `node` and `npm` tools, and config them rightly. Then you can continue the tutorial.

Let's execute `npm init vite` in the directory you think is good.
```powershell
PS D:\blog\vue3>npm init vite
Need to install the following packages:
  create-vite
Ok to proceed? (y)
```
If you are promopted by `create-vite`, press `enter` key to install it.

```powershell
√ Project name: ... vue3-admin
? Select a framework: » - Use arrow-keys. Return to submit.
    vanilla
>   vue
    react
    preact
    lit
    svelte
```
Then input the project name `vue3-admin`, and select `vue` as the framework.

```powershell
? Select a variant: » - Use arrow-keys. Return to submit.
>   vue
    vue-ts
```
Select `vue` as the variant, we don't use Typescript with this project.You can select `vue-ts` if you want to use Typescript.

```powershell
Scaffolding project in D:\blog\vue3\vue3-admin...

Done. Now run:

  cd vue3-admin
  npm install
  npm run dev
```
Run above commands. Finally we get the successfull screen as below.
![](startup-page.png)