# Eleventy PWA Starter

This repo aims to provide a simple way to build your PWAs using Eleventy

## Progressive Web Apps
A progressive web app requires the following components:
- A manifest JSON file containing a description of the app
    - It usually includes the name, icons and colors
- A service worker that sits in the browser and handle the requests
    - This file caches some of the assets and provide them when needed, especially when the user is offline

### Tedious tasks when building a PWA

A PWA needs icons of different sizes. This might not be a problem for one project but in the long run, it becomes necessary to have a way to **generate the different icons size from a single file.**

In the service worker, the assets planned for caching are specified in an array. With a static site generator like eleventy it would be possible to add a label in certain files that would be added for caching afterwards. 


## Goals

- Template-agnostic starter 
- Minimal config & plugins


## Usage
WIP