# Dark Archer 
*"The last file server you will ever need"*

![license](https://badgen.net/badge/license/GPL-3.0/blue) ![release](https://badgen.net/badge/release/V1-Alpha/green)

***Dark Archer*** is the successor to [Archer-FS](https://github.com/Retr05041/Archer-FS) which was a project I started back in November of 2021.
Now that my skills have increased and my need for this project to be a success has skyrocketed, I have decided to revamp the project into what it is now.

## How to install
The installation has been made very simple due to the use of [Docker](https://www.docker.com/).

1. Pull Repo down, through any method you prefer
2. If you do not have Docker/Docker-Compose installed, run the `docker-installer.sh` bash script, or install it manually
    - if you install it manually, please create a 'storage' folder in the root directory, this is where your incoming and outgoing files will be held
3. Run `docker compose up --build` to build the project the first time and run it

Reminder to run `docker compose down` when you want to shut down the images. After running the project with the `--build` flag the first time,
you will not need it on subsequent runs
