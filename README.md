# My little poller

My little poller is a pet project to monitor things on the web I don't want to check on manually:

- Is the movie I saw a few months back released in Blu-ray or DVD yet?
- Does my favourite online store have my favourite band's the most recent album in stock yet?
- Etc.

So, in other words, this is a project that combines web scraping with a notification system.

## How it is (roughly) planned to work?

At first, I'm running it locally on my personal Windows machine which isn't running 24/7. The main application is going to be a Windows service running in the background, and within the main app two processes are run separately in their own goroutines:

- A web server used for monitoring the status of the "poller" in the polling engine, and for creating/updating/deleting pollers in the engine.
- A poller engine which periodically polls the web content of predefined sources and parses the needed information from them.

When the poller engine finds the content it's looking for, the status is updated to the web server but also a notification is sent to the desktop.

## Future nice-to-haves

When the first milestone (running the service locally) is reached, it would be nice to put the polling engine running 24/7 in a Raspberry Pi or in the cloud. The web page used for managing and monitoring could still be run locally, and the polling engine could send an email etc. to notify of a status change. 