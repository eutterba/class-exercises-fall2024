# Lab 5: Package Management Tutorial
Please complete the hands-on activities associated with this lab outlined in the <a href="https://csci338.github.io/fall2024/assignments/lab05" target="_blank">Lab 5 Instructions</a> (on the course website). When you're done, answer the following questions. Feel free to use Google / ChatGPT to help you think about these questions (but keep in mind that you'll need to know them for the midterm exam).

## Part 1. Operating System Package Managers
Answer the questions for either Homebrew or apt (depending on whether you're using Linux / WSL or Windows)
1. What is Homebrew / apt, and why is it useful? it allows you to install new packages to use

2. What does the `update` command do (either `brew update` or `apt-get update`)? it updates all packages you currently have

3. Where are the packages that are managed by Homebrew / apt stored on your local computer? they are stored on the disk in the local bin


## Part 2.
1. What is a python virtual environment? a python virtual enviroment is a space for you to do python coding and add packages without having to load them directly onto your computer

2. What is Poetry, and how is it different from other Python package managers like pip? poetry only works inside of the virtual enviroment for poetry where as pip is downloaded onto the computer itself and would would in or out of the enviroment

3. What happened when you issued the `poetry new poetry-demo` command? it created a new directory named poetry-demo that already contained a poetry.lock, a pyproject.toml and another subdirectory also named poetry-demo contianing a __init__.py file

4. How do you run a python file using the poetry virtual environment? poetry python <filename>

5. What is the purpose of the `poetry.lock` file? it tracks what packages are currently installed on poetry


## Part 3.
1. What are some of the things that `package.json` is used for? scripts and dependency it also keeps track of lisencing, authors and what version it is 

2. Why wouldn't you want to check in the `node_modules` directory into GitHub? because node_modules is mutable and based on the packages loaded, if you change the packages it may mess it up. 


