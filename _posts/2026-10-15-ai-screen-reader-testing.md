---
layout: post
title: AI can operate a screen reader. What does that actually test?
summary: AI cannot replace expert human testing. An AI agent may complete a task using screen reader output. That result only tells us what the agent did. It does not tell us how much mental effort a person would need to complete the same task. An accessibility expert must test and interpret the result. Teams also need usability testing with disabled users to understand real experiences. AI results alone cannot show that a product is accessible or conforms to WCAG.

excerpt: AI agents can operate screen readers and complete tasks. That does not mean a feature passed screen reader testing. This article looks at what AI testing can show, what it misses, and why expert human testing is still required.
---
In the space of a couple of weeks, four people from different contexts have reached out to me to talk about using AI for accessibility testing.

The conversations were different, but each came back to the same thing: what an AI agent can tell us when it uses a screen reader.

<figure>
    <img src="/img/home-elevation.jpg" alt="Architectural drawing showing the front elevation and floor plan of a townhouse.">
    <figcaption>James Gibbs, <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>, via <a href="https://commons.wikimedia.org/wiki/File:James_Gibbs_-_Design_for_an_Unidentified_Town_House,_Elevation_and_Plan_-_B1975.2.342_-_Yale_Center_for_British_Art.jpg">Wikimedia Commons</a>.</figcaption>
</figure>


An AI test can show that one agent completed one route, using one setup and the information it was given. Anything broader is an informed guess.

That’s useful. Accessibility testing takes time and expertise, and conventional automated tools only find certain kinds of problems. AI agents appear to go further. They can navigate an interface, collect screen reader output, and report whether they completed a task. For a team without an accessibility specialist, that’s appealing.

If an AI agent completes a checkout using captured output from the NVDA screen reader in Chrome, the report should say exactly that. “The checkout passed screen reader testing” says far more than the test showed.

Even the narrower claim covers only one kind of access. People who use magnification, voice control, switch access, or other forms of input need separate testing.

If AI belongs in accessibility testing at all, it belongs as a limited tool inside an expert-led process. It should not replace the expert, perform the final evaluation, or determine the result.

## Inspecting the house

Using AI to test a website with a screen reader is like inspecting a house from its floor plan and photographs. You can spot missing doors, narrow corridors, and obvious hazards. But you can’t tell what it’s actually like to find your way around, recover when you take a wrong turn, or live there day to day.

The analogy matches how many tools work. An AI agent can use the accessibility tree, which is the structure a browser builds for assistive technology. It can also receive an estimate of what a screen reader would say, or text captured from a real screen reader.

Tools vary. [Speakable](https://getspeakable.dev/docs/automated-screen-reader-testing) estimates announcements without running a screen reader. [BrowserStack](https://www.browserstack.com/docs/app-accessibility/screen-reader-automation) can operate screen reader interactions and capture the speech as plain text.

These outputs can expose missing names, unexpected output, broken focus movement, and routes that can’t be completed. But they don’t convey the speech's pace, the effect of interruptions, or the effort of remembering your location while new information continues to arrive.

## What a person has to do

An AI agent starts with advantages a person doesn’t have. Take booking a flight from Los Angeles to New York City.

The agent knows the goal before it begins. Depending on its setup, it can look directly at the page’s structure and find the origin and destination fields, date picker, flight options, and purchase button.

A person has to find their own route. They need to understand what the controls do and recognize whether each interaction worked. Did the dates register? Did the fare change? They have to find their way back if they miss an announcement or choose the wrong flight. Keeping track of all this while listening for the next announcement creates cognitive load.

A pass tells us the agent found a route, not what finding it was like. AI performs; people experience.

## Why a pass or fail needs checking

An agent can complete a task because its setup gives it information that might not be available through the screen reader experience. It can also get stuck for unexpected reasons. It might choose an unusual way to navigate, misunderstand an announcement, or overlook a familiar screen reader command.

Run the same test twice, and an AI agent can take a different path each time, so one run can’t stand in for every run.

Until someone with accessibility expertise has interpreted a result, we don’t know what it means.

## Why human testing is required

AI output needs expert human testing before it can support an accessibility conclusion. Different human activities provide different evidence.

A skilled tester using assistive technology can notice when an announcement comes too late, when the wording is confusing, or when an interaction takes too much effort.

Expert accessibility evaluation adds knowledge of standards, browsers, assistive technologies, and interaction patterns. An expert can investigate whether a problem comes from the product, the browser, the screen reader, or the agent’s setup.

Usability testing with disabled users adds something else: What is it actually like to use the product? Disabled users bring their own technology, settings, habits, expectations, and ways of solving problems.

These roles can overlap. A disabled person may also be a skilled tester or accessibility expert. The distinction is what we’re trying to learn from the activity.

## One route is still one route

To paraphrase [Stephen Shore’s observation about autism](https://a4.org.au/sites/default/files/2022-SenateAutism-ServicesSupportandlifeoutcomesforautisticAustralians.pdf), if you’ve met one disabled person, you’ve met one disabled person. We can’t assume one person’s screen reader experience represents everyone.

One accessibility expert can’t speak for every disabled person either. That isn’t their role. An expert evaluates systematically, while usability testing with disabled users provides evidence about specific lived experiences. We need both, and we need to be honest about the limits of each.

People navigate in different ways. In [WebAIM’s 2026 Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey11/), 67.8% of respondents said they would first use headings to find information on a long page. That rose to 72.1% among advanced users and fell to 41.4% among beginners.

An AI agent is neither an accountable accessibility expert nor a disabled user with lived experience. Its route can’t stand in for either.

## What if you don’t have a specialist?

Start with what you already have. Run conventional automated checks, and use AI agents to explore important tasks, including errors and recovery.

Without expert human testing, AI results can identify things to investigate, but they can’t support a pass, an accessibility conclusion, or a conformance claim. Treat every result as something to check.

When an agent uncovers a real problem, add a fixed test that will catch it if it comes back.

If you have a limited budget for human help, focus it on tasks where failure has serious consequences. That could include signing in, recovering an account, completing an important form, making a payment, or responding to an error.

You can hire an accessibility specialist for a focused review. For usability testing with disabled users, work with a disability-led consultancy, a local disability organization, or a paid panel. [Easy Surf](https://easysurf.ca/) is one example of a disability-led company offering this work.

Pay disabled users for their time and expertise. Fix the obvious problems tools can detect first, so people can spend their time finding what the tools missed.

## What AI results can support

We can’t rely on AI alone to show that a product conforms to WCAG.

Conformance means meeting every applicable requirement. [W3C says](https://www.w3.org/WAI/WCAG22/Understanding/conformance) this takes automated checks and human evaluation by people who understand how disabled people use the web. It also warns that [evaluation tools can produce false or misleading results](https://www.w3.org/WAI/test-evaluate/tools/selecting/).

This matters most in an Accessibility Conformance Report (ACR), a buying decision, or a public accessibility claim, where readers assume the testing was complete.

Say what you tested and how. Give the product version, test setup, method, and scope. Heck, share the prompt you used.

Use AI to widen the inspection if it helps, but keep it as a tool. Expert evaluation and usability testing with disabled users must remain central to the process.