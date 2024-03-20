---
layout: page
  exclude: 'yes'
  permalink: /sitemap/
  title: Sitemap
---

 
 ## Pages
  {% for page in site.pages %}
   <a href="{{ site.url }}{{ page.url }}">{{ page.title }}</a>
   {% endfor %} 
   
   ## Posts
 {% for post in site.posts %}
 <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}

  {% endfor %}
 
   
   