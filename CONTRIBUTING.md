Contributing to Project TrainSite Front End
===========================================

Yay! Thanks for considering to contribute to this project!
To make sure your contribution can be merged into the main repository, follow this short guide.


## Workflow

- **Fork this repository** using the "Fork" button in the top right corner
- **Create a feature branch** based off of the most recent commit on `master` following this naming convention: `feature/<short-description>` (see more [below](#git-flow))
- **Do your thing!** 👩‍💻 👨‍💻
- **Write tests** (if possible) for everything you added/modified to make sure everything works as expected
- **Make a pull request** to this repository's `master` branch
- **Be happy!** 🎉


## Guidelines

Please follow these guidelines Whilst developing. This helps keeping the code nice and organized.

- Don't work directly on the `master` branch (see [below](#git-flow))!
- Run `npm run lint` every time before creating a new commit!
- Run `npm test` every time before submitting a pull request


## Git Flow

This project uses the Git Flow branching model. To learn more about Git Flow, check out the original post [here](https://nvie.com/posts/a-successful-git-branching-model/).

> **Quick Tip: Create a feature branch**  
> To create a new feature branch, use `git checkout -b feature/<your-feature-name> develop` or
> use the `git flow feature start <your-feature-name>` command if installed.

These are the settings used with Git Flow:
```
Branch name for production releases:          master
Branch name for "next release" development:   develop
Feature branches:                             feature/
Release branches:                             release/
Hotfix branches:                              hotfix/
Support branches:                             support/
Version tag prefix:                           v
```