[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7170724&assignment_repo_type=AssignmentRepo)
# week4-assigment-vuetemplate
Separation of the bsadmin template to components with vue

Bsadmin verilen düz html css şablonun vue'de bileşenlere ayrılması  ,

<div id="top"></div>

<!-- ABOUT THE PROJECT -->

<div align="center">
    <h1 id="about-the-project">About The Project</h1><br/><br/>
    <img src="./public/demo/demo.gif" alt="Demo" width="900" height="450"><br/><br/>
    <p>Splitting the bs-admin template into components using  vue. As content, the jsonplaceholder to-do list is shown, completed and incomplete items are displaced according to their class, and these changes are stored in local storage.</p>
</div>

<br/><br/>




<div align="center">
   <h1 id="built-with">Built With<h1>
   <table class="center" target="_blank" rel="noreferrer">
   <tr>
   <td><a href="https://vuejs.org/" target="_blank" rel="noreferrer">
   <img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png" width="175" height="75">
   </a>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="175" height="75">
   </a> 
   <td><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="175" height="125">
   </a> 
   <td><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
   <img src="https://camo.githubusercontent.com/84746920d1a9906680c387b3cc8753ee842e996fc8915abd295011e15b594b74/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e312f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67" width="175" height="75">
   </a>
   </tr>
   </table>
</div>

```
   ├── components/ 
       ├── LogoutModal.vue
       ├── PageWrapper.vue
       ├── ScrollToTop.vue
       └── wrapper/
           ├── ContentWrapper.vue
           ├── SideBar.vue
           └── contentSections/
               ├── ContentFooter.vue
               ├── ContentMain.vue
               └── main/
                   ├── PageContent.vue
                   ├── TopBar.vue
                   └── topbar/
                       ├── SidebarToggle.vue
                       ├── TopbarSearch.vue
                       └── navBarItems/
                           └── AlertsItem.vue
                           └── MessagesItem.vue
                           └── SearchDropdown.vue
                           └── UserInfo.vue
```

<br><br>
<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Check the node package manager, install it.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
2. Go to the directory
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run
   ```sh
   npm run serve
   ```
5. You can execute all the build tasks available to your project.
   ```sh
   npm run build
   ```
6. That you also ensure your code has no structural problems by running the code through lint.
   ```sh
   npm run lint
   ```



<!-- CONTACT -->
## Contact

Ramazan Ustuntas - [![LinkedIn][linkedin-shield]][linkedin-url]


<p align="right">(<a href="#top">back to top</a>)</p>



[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ramazan-ustuntas/
