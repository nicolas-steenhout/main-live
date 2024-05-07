---
layout: post
title: Headers are not headings
summary: I explain the difference between headers and headings
excerpt: I explain the difference between headers and headings.
---
Lots of people seem to confuse the terms "heading" and "header". There is a difference, and it matters.

Using correct vocabulary when talking about a design or a page ensures both the accessibility consultant and the designer are talking about the same thing.

<figure>
    <img src="/img/header-heading.png" alt="Text header inside a header element, followed by text heading inside a h1 element.">
    
</figure>

A designer recently asked me about a concept they were working on. They kept talking about the "header" while showing me their prototype. So I was looking at the header.

But they meant the "heading". Which was not located in the header. We wasted a few minutes getting on the same page

The conversation was a lot easier once we were referring to the element in question by the proper name!

A header is a block of content that typically shows information about a page, and a site at large. It can include a logo, a site navigation, a search form, an author, etc. It sometimes also includes a heading. Headers (sometimes marked up as a &lt;banner&gt; ) are landmark elements. Screen reader users can build a mental map of a page by looking at the different landmarks on a page. They can also navigate directly to different landmarks on a page.

Headings are elements used to create a structure on a page. Start each section or block of content with a heading. Nest headings hierarchically. The first heading is a <h1>. Each block of content below that should start with a <h2>. Blocks of content within a <h2> should start with a <h3>. The headings on a page help create a document outline. The document outline can help screen reader users create a mental map of the page. Screen reader users can also navigate directly to a specific heading, or navigate from one heading to the next.