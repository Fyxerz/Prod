## JS Runtime Engines

+ **JScript.NET:** HTML, CSS and JS can be used to build the UI but the actual logic of the program has to be built using .NET, which is not viable with my set of skills.
+ **Awesomium:** HTML and CSS can be used to create the UI but only works as a plugin for .NET and Unity3d applications.
+ **XULRunner:** Runtime engine used by firefox and thunderbird. It's been deprecated and no longer supported.

## NW.js

https://ducode.org/node-webkit-tutorial-creating-a-markdown-editor.html

NW.js (previously known as Node Webkit) is a runtime framework based on node.js. It allows packaging for Linux, Windows and Mac and comes with a very strong native support, with an API to manage everything for native UI. This involves menus and windows that fit with the native theme of the system used. Apart from that, the actual window of the application is completely un-opinionated and allows for a blank pattern. This allows for the user to build the application however they want. It also comes with no file structure which allows development without having to follow any strict patterns when developing the application. It is also based on normal HTML, CSS and JS files which means that the application can be written in any text editor, without having to use an IDE. Node is incorporated within the runtime meaning that it can use all it's functionality, including modules without having to have Node actually installed in the system making it completely standalone and very easy to add big chunks of core system functionality, like generating and rewriting files.

Building a hello world application with the engine felt very easy to build. It allowed me to get hands on with the logic of the application and not having to setup absolutely anything. The API is very intuitive and allows to build anything that would be needed for the text editor. As you are writing the actual app on just normal html and javascript files, the actual coding workflow is no different from the one that could be seen in a website which makes it very easy to get into and use.

## Chrome apps

Chrome apps has a surprisingly powerful API, it is based on the chrome frame but has extra methods that allow to natively write and read files on the file explorer. It however has a very big caveat which is that it requires chrome to initiate the application as while it doesn't create a chrome window it runs a process that is run by the chrome engine. Because of this if chrome is not installed it will not be able to be run. The other problem it has is that it is very opinionated in the way that apps built with it are planned to be in the google chrome store and therefore doesn't work too great when trying to create a standalone program.

The hello world app was quite simple to build, even though it required to use a bit of the Chrome specific API to be able to start the application. While this is not immediately a problem it does require a bit more getting used to and needs a bit more preparation in order to use it. This API however allows for extremely easy expansion of core functionality by using javascript.

## Electron

Electron is a runtime environment built by the GItHub team and used for Atom. This means that it should be quite easy to work with, and most importantly should be completely un-opinionated about how things are dealt with. It uses the Chromium frame and Node.js as runtime engine and is cross platform. It also has an API that allows to easily produce native features very easily.

The hello world app was very simple to use and took no time to set up, however I had several problems when actually packaging the application in order to create the executable. It requires very much on the use of node in order to set up things and because of the lack of practice I have with node, trouble shooting can be very unreliable and I am scared that I won't be able to handle problem handling with this environment.

## Visual Studio

Visual Studio allows to create windows apps through their IDE using HTML, CSS and JavaSCript. It has several caveats. For one it is necessary to use visual studio to code the actual project which means that it is necessary to work on their fixed editor which may not be the editor that you may want to work in. It also has a very specific file structure that forces the user to work in a workflow the may not  be the one they are used to making their speed less than optimal. Their API  is extremely strong as it is an IDE built by the company that created the operative system and allows for very easy and efficient expansion of core functionality.

Building a hello world with visual studio didn't feel great as I couldn't use the tools I am normally used to. It was, however very easy to get the application going as the IDE does most of it and sets absolutely everything needed to deploy the application up. The API while extremely strong is very opinionated and becomes a big part of the code which was a great drawback as it forces to work with their predefined concepts. This makes not want to work with visual studio and while it is possible the most powerful tool to create a windows application, I think the trades in workflow that need to be done in order to work with visual studio are not worth it.

## IntelXDK - Possibly mobile
