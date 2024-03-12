---
layout: post
title: First ignore me
tags: [Handmade quilt]
---

Ignore this post - I'm exploring tags and this post is to test that they work. Or not, as the case might be.


<p>
  Tagged
  {% for tag in page.tags %}
  <a class="post" href="/tag/{{tag}}">#{{tag}}</a>{% unless forloop.last %}, {% endunless %}
  {% endfor %}
</p>
