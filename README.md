#Setup

Using [https://help.github.com/articles/using-jekyll-with-pages/](https://help.github.com/articles/using-jekyll-with-pages/) as instructions for setup and installation. Uses Ruby, Bundler and Jekyll.

1. Install Ruby, if you don’t already have it by running gem install ruby in the command line. If you’re on a Mac, you probably already do. Run `ruby --version` in the command line to find out what version you are running.
2. Install Bundler to make managing gem and Jekyll versions easier. Run `gem install bundler` in the command line.
3. Install Jekyll by running the `gem install jekyll` command.
4. Clone the repo from [https://github.com/noom/design.git](https://github.com/noom/design.git). The site lives on the `gh-pages` branch.

#Previewing Locally
1. Navigate to the location to where you cloned the repo, and run `bundle exec jekyll serve` from within the directory.
2. Navigate to [http://localhost:4000](http://localhost:4000) to view the site locally. (If that doesn't work try http://localhost:4000/design/](http://localhost:4000/design))
3. Make content changes to the html files and edit the styling within the \_sass folder.

Note: do not make changes to files in the \_site folder, because they will be overwritten by the equivalent files outside the \_site folder when the project is compiled.