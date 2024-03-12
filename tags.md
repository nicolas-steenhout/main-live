---
layout: page
title: Tags
permalink: /tags/
---

Here are all the tags used on this site:

{% assign tags = site.tags | sort %}
<ul>
{% for tag in tags %}
 <li>
    <a href="/tag/{{ tag | first | slugify }}/">
            {{ tag[0] | replace:'-', ' ' }} ({{ tag | last | size }})
    </a>
</li>
{% endfor %}
</ul>
