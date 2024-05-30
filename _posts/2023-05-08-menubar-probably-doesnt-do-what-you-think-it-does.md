---
layout: post
title: Menubar probably doesn't do what you think it does
summary: The role menubar is not meant to be used to build navigation on the web. It should be used if you need to copy how menubars work on desktop applications.
excerpt: The role menubar is not meant to be used to build navigation on the web. It should be used if you need to copy how menubars work on desktop applications.
---

ARIA roles are powerful, but they need to be used correctly!

Did you know that the ARIA role "menubar" isn't actually intended to build mega menus for website? It's intended for web applications to replicate the functionality of menubars in desktop applications.

<figure>
    <img src="/img/menubar.jpg" alt="Screenshot of Microsoft Word interface on MacOS, showing the menubar.">
    <figcaption class="image-caption"><span>Photo by </span><a href="https://unsplash.com/@anniespratt" rel="">Annie Spratt</a><span> on </span><a href="https://unsplash.com" rel="">Unsplash</a></figcaption>
    </figure>

It should not be used for web navigation. Simple as that.

A lot of sites, and even patterns libraries, use the menubar role, and its children elements to build navigation menus. To implement it correctly requires a lot of heavy lifting. Unfortunately, I see a lot of poorly implemented menus relying on role=”menubar”.

<div class="inline-quote" aria-hidden>But it's the wrong element to use for mega menus or web navigation. Even if it's implemented correctly!</div>

Semantics matter. If a screen reader user encounters a menubar, they'll have certain expectations of behavior, based on the element they are encountering.

To complicate matters, the behavior of keyboard navigation is changed when the cursor is on a menubar. Navigating through a menubar when you expect web navigation will increase your user's cognitive load.

Is it going to block a user from navigating the site? Probably not. If it's been implemented correctly. But it's still complicating your users’ experience. 