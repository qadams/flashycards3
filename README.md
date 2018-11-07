# FlashyCards

FlashyCards is a browser application that will allow a registered user to create a deck of flashcards and be able to use them to study or review. Use this as a tool to your advantage and you will surely ace the exam!

## Installation
```bash
#Have Homebrew installed on Mac
#Install Ember
brew update
brew upgrade node
brew install node
npm install -g npm
npm install -g ember-cli

#Pull down dependencies for frontend
git clone https://github.com/qadams/flashycards-test.git
cd frontend
npm install

#Make sure to install python
#Install Django
easy_install pip
pip install virtualenv
export PYTHONUSERBASE=$HOME
pip install--user virtualenv
virtualenv -p /usr/bin/python2.7 venv
source venv/bin/activate
pip install django
pip install djangorestframework
pip install django-cors-headers
pip install djangorestframework-jsonapi==2.0.0-beta.2
```

## Getting Started
In order to run FlashyCards app,
```bash
#In frontend directory
ember s
#In Django project directory
python manage.py runserver
```

# License
MIT License

Copyright (c) 2018 Quinn Adams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
