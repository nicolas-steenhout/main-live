---
layout: post
title: Second ignore me
tags: [Handmade, Test]
---

Ignore this second post - I'm exploring tags and this post is to test that they work. Or not, as the case might be.


<p>
  Tagged
  {% for tag in page.tags %}
  <a class="post" href="/tag/{{tag}}">#{{tag}}</a>{% unless forloop.last %}, {% endunless %}
  {% endfor %}
</p>
