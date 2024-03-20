---
layout: page
  exclude: 'yes'
  permalink: /sitemap/
---

  {% for post in site.posts %}
    <ul>{% unless post.published == false %}
    
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a> - {{ post.date }}</li>

    {% endunless %}
        </ul>
  {% endfor %}
  {% for page in site.pages %}
    {% unless page.sitemap.exclude == "yes" or page.name == "feed.xml" %}
    <url>
      <loc>{{ site.url }}{{ page.url | remove: "index.html" }}</loc>
      {% if page.sitemap.lastmod %}
        <lastmod>{{ page.sitemap.lastmod | date: "%Y-%m-%d" }}</lastmod>
      {% elsif page.date %}
        <lastmod>{{ page.date | date_to_xmlschema }}</lastmod>
      {% else %}
        <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
      {% endif %}
      {% if page.sitemap.changefreq %}
        <changefreq>{{ page.sitemap.changefreq }}</changefreq>
      {% else %}
        <changefreq>monthly</changefreq>
      {% endif %}
      {% if page.sitemap.priority %}
        <priority>{{ page.sitemap.priority }}</priority>
      {% else %}
        <priority>0.3</priority>
      {% endif %}
    </url>
    {% endunless %}
  {% endfor %}
