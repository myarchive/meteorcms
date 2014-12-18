meteorcms v 0.2
=========

A CMS system built and based on the Meteor project (www.meteor.com).  I have redesigned recently and restarted working on this now that Meteor is at v1. Contact direct or create issues to contact.

demo
====

Though this is non-functional since the project is new I will upload a demo upon any major updates:

- https://cms.meteor.com/

There is also a Google Group for this project

- https://groups.google.com/forum/#!forum/meteorcms

There is a freenode channel ##meteorcms (and also Meteor's #meteor you can join too)

- http://webchat.freenode.net/?channels=#meteor,##meteorcms

install
=======

Meteor is it's own application which runs it's own web server and packaging system which is built on Node.js, Sockjs, etc. Since it runs it's own web server you can have this code anywhere. In Step 2 you can change ~/Sites/ to any directory, though that is probably the best place on your development machine to have it.

Steps:

1) Install if you don't already have Meteor installed
- curl https://install.meteor.com | sh

2) Clone from repository to any directory, this is independent anything else installed
- git clone https://github.com/alisalaah/meteorcms.git ~/Sites/

3) Run the web application:
- cd ~/Sites/meteorcms
- meteor

Commit changes if you would like to contribute!

tests
=======

Install requirements:
`npm install -g mocha`
`npm install request`

Into tests/ run: mocha --reporter spec

* This was removed when upgraded to Meteor 1.0.1