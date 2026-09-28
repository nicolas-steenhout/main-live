---
layout: post
title: It's time to retire the concept of decorative images.
summary: WCAG says some images can be hidden from screen readers because they are decorative. We use that label too often. An image may not give us important information, but it can still affect how we understand or feel about a page. We should consider what an image adds before deciding that a screen reader should ignore it.

excerpt: Very few images are truly decorative. An image can add meaning, mood, or context without providing information. It may be time for WCAG to use a better category.
---
I don't mean getting rid of alt="". We still need a way to tell screen readers to ignore images when there's nothing to convey. I'm talking about the category label itself and how it shapes the decisions we make about images.

<figure>
    <img src="/img/fluffy-dog.jpg" alt="A large, fluffy black dog lies sprawled on a cream carpet, resting its chin between its outstretched paws. Eyes closed and sound asleep.">
    </figure>

The concept made sense when it was introduced. Think spacer GIFs and visual flourishes that genuinely added nothing. Telling screen readers to ignore them avoided unnecessary noise.

We use images differently today. They are often chosen to set a mood or shape how someone experiences a page.

Consider a hero image on an article about burnout: Someone sitting alone at a kitchen table late at night. You don't need the photo to understand the article. It may give you no essential information, but it adds a feeling of loneliness and exhaustion.

An image can be non-informative without being meaningless.

In accessibility audits, I routinely see recommendations to treat images like this as decorative and use empty alt text. Sometimes that recommendation is made without really asking what a sighted person gets from the image. Sometimes “decorative” becomes shorthand for “I don't want to write alt text for this.”

The current WCAG 3 draft continues to use the concept, with an outcome called “Decorative images hidden.” It defines a decorative image as one that serves only an aesthetic purpose, provides no information, has no functionality, and can be ignored without losing meaning or context.

By that definition, the burnout photo isn't decorative nor purely aesthetic. It adds meaning.

Some images really do add nothing that needs an alternative. A divider, background texture, or an icon that repeats a text label next to it doesn't need a description. Describing everything would create noise and waste screen reader users' time.

Maybe “non-contributing” is a better category label. The question we should ask before hiding an image is what it adds to the experience. That might be information, but it might also be meaning, mood, or context.

If we're deliberately giving sighted users some of those things, why are we comfortable deciding they don't matter for blind users?

WCAG 3 is still a draft. There is still time to retire “decorative images.”

And here's a photo of my big fluffy dog, to grab your attention. And yes, I wrote alt text ;)