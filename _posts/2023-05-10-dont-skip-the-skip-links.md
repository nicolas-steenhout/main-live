---
layout: post
title: Don't skip the skip links
summary: Skip links are links that allow a keyboard-only user to skip specific content. It is important that the markup is done properly for them to work as intended.
excerpt: I explain some important aspects of using skip links correctly to improve accessibility and usability.
---
I was recently auditing a client's site and found a "skip link" that was marked up as a button. Great to find a "skip link", but not so great that it was semantically a button.

<figure>
    <img src="/img/hands-on-surface.jpg" alt="Hands of a woman of color typing on a blue keyboard of a Microsoft Surface tablet.">
    <figcaption class="image-caption"><span>Photo by </span><a href="https://unsplash.com/es/@wocintechchat" rel="">Christina @ wocintechchat.com</a><span> on </span><a href="https://unsplash.com" rel="">Unsplash</a></figcaption>
</figure>

## What are skip links?

Skip links, if you aren't familiar with them, are a link that allow keyboard-only users to bypass large blocks of content. Typically they are used to avoid having to tab through the entire header and main navigation menu. They also are sometimes used to jump over social media widgets or other elements with many links or other interactive elements.
## Why are skip links important?

Folks who don't rely on keyboard to navigate a page can move their mouse to any element they want to click on. Keyboard-only users have to use the keyboard's tab key to move from one interactive element to the next. It's not too harsh if there's only 3 or 4 interactive elements between the top of the page and the main content.

It becomes a lot more work for the keyboard-only user if you have a lot of interactive elements. For example, if you have a mega menu that has half a dozen top level items, and each of these have another half a dozen items. And then you have a search form.

Suddenly keyboard-only users have to tab through nearly 40 elements before reaching the main content. That's additional effort, and additional cognitive load to process all that information.

<div class="inline-quote">I once audited a newspaper website that had 173 interactive elements between the top of the page and the main content!</div>

Some might suggest it's fine if it's the first time they are visiting your site. Because it gives users the option to explore and see all the navigation option. If they want. But we shouldn't force users to do this.
## Where to place the skip link?

The skip link should be the first interactive element on the page. That ensures keyboard-only users have immediate access to it.
## Don't overdo the skip links

I've seen sites with several skip links in a row. This kind of defeats the purpose. You almost need a "skip the skip links" link when you have 3 or 4 or even 5 skip links!
## Show the skip link or not?

You don't have to expose the skip link at all times. Many designers chafe at the idea of having an extra element in the header. Beyond eating up valuable real estate space in the header, I've even heard some say it "pollutes" their design .

You can expose the link on focus. That way, sighted keyboard-only users will see the link on the first use of the tab key.
## Semantically meaningful

I mentioned a recent finding of a skip link being implemented as a button. This is problematic because of the semantic meaning of elements. Links typically take the user somewhere. Buttons typically make something happen.

Sighted users aren't likely to care either way. Unless they look at the source code, they won't know what's what. Screen readers typically announce what kind of element you've landed on.

Screen reader users will expect different behaviors if they encounter a link or a button.
## Conclusion
Use skip links. Place them as the first interactive element on the page. Feel free to visually hide the link as long as it's exposed on focus. Use the correct markup (link).