"Simply issue a git push command with the name of the current branch along with the -u and -f switches.

Note that older Git repositories create a master branch by default, while newer ones use main. Amend the git push command accordingly.

git push -u -f origin master
The -u switch makes the remote GitHub repo the default for your existing project. The -f switch forces Git to overwrite any files that already exist on GitHub with your existing project’s files."


-https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-push-an-existing-project-to-GitHub#:~:text=Simply%20issue%20a%20git%20push



npm run start --max-old-space-size=8192