---
layout: page
title: Blog
permalink: /blog/
---

## Exploring accessibility and inclusion

You can also find an [archive of posts on my old site](https://incl.ca), going back to the early 2000's.

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <div class="post-details">
        <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

        <p class="excerpt-date">{{ post.date | date_to_string }}</p>
  
        <div class="entry">
          {{ post.excerpt }}
        </div>
      </div>

    </article>
  {% endfor %}
</div>
