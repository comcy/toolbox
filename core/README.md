# Toolbox Core

## Installation

### Python 3

Go to [python.org](https://www.python.org/) and install Python 3 for your OS.

### Pipenv
Pipenv is the officially recommended Python packaging tool for
Python, free (as in freedom).

Pipenv is a tool that aims to bring the best of all packaging worlds
(bundler, composer, npm, cargo, yarn, etc.) to the Python world.
*Windows is a first–class citizen, in our world.*

If you're on MacOS, you can install Pipenv easily with Homebrew:

    brew install pipenv

Or, if you're using Ubuntu 17.10:

    sudo apt install software-properties-common python-software-properties
    sudo add-apt-repository ppa:pypa/ppa
    sudo apt update
    sudo apt install pipenv

Otherwise, just use pip:

    pip install pipenv
    
    
## Install the needed packages

To install the needed packages just go to ``toolbox/core`` and  use ``pipenv``:

    pipenv install

### Other packages

At the moment no other packages are needed.
    
## Setting all up

### Configuration

You can config everything inside the ``config.ini`` file. Set the api url and the auth token.

### Start the app

On Windows:

    cd toolbox/core
    pipenv shell
    python server.py