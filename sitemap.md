---
layout: page
  exclude: 'yes'
  permalink: /sitemap/
---

  {% for post in site.posts %}
 <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a> - {{ post.date }}

  {% endfor %}
