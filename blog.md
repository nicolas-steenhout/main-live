---
layout: page
title: Blog
permalink: /blog/
---

## Exploring accessibility and inclusion

<!--You can also find an [archive of posts on my old site](https://incl.ca), going back to the early 2000's.-->

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <!-- https://blog.webjeda.com/fetch-image-jekyll/-->
      {% assign foundImage = 0 %}
      {% assign images = post.content | split:"<img " %}
      {% for image in images %}
        {% if image contains 'src' %}
            {% if foundImage == 0 %}
                {% assign html = image | split:"/>" | first %}
                <img {{ html }} />
                {% assign foundImage = 1 %}
            {% endif %}
        {% endif %}
      {% endfor %}

      <div class="post-details">
      <p><strong>{{post.url}}</strong></p>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>

        <p class="excerpt-date">{{ post.date | date_to_string }}</p>
  
        <div class="entry">
          {{ post.excerpt }}
        </div>
      </div>

    </article>
  {% endfor %}
</div>

