---
layout: post
title: AI Can Write Accessible Code. Can You Trust It?
summary: AI can produce accessible code, but it sometimes ignores accessibility instructions, even when it claims to follow them. My experience shows why developers need to check the code themselves. Automated tests help, but accessibility expertise and testing with disabled people are still necessary. Organizations remain responsible for the accessibility of AI-generated code.

excerpt: AI coding assistants can promise to follow accessibility requirements and still produce inaccessible code. My experience shows why trusting those assurances is risky.
---
I gave an AI coding assistant a set of explicit accessibility instructions. It acknowledged them, explained why they mattered, and assured me it would follow them. Then it broke them.

<figure>
    <img src="/img/warning-ai.jpg" alt="Two yellow road signs on a wooden post surrounded by dense foliage. The upper sign shows a black arrow pointing up and right, with a red stop-sign symbol below it. The lower sign reads WARNING HIGH SPEED ROAD CROSSING AHEAD.">
    <figcaption>Image public domain - Pexels</figcaption>
</figure>

I pointed out the problems and asked it to correct them. It did, but introduced other problems. Sometimes it repeated the exact same mistakes. I asked it to review its own output against my instructions before presenting anything to me. It agreed. The problems continued.

I even asked the AI what I could do to make it follow the instructions consistently. It suggested changes to my prompts and additional rules. I implemented them. When those didn't work, I asked again. More suggestions, more changes, more assurances.

Over several months, I've spent an unreasonable amount of time trying to get a system to consistently follow requirements it can explain well. Sometimes I've needed eight or nine rounds of corrections to get an acceptable result.

I've been vocal about my opposition to generative AI. That hasn't changed. I also use AI tools in a professional context because I want my criticism to be informed by experience. Working with these tools has given me reasons to question their reliability.

My experience with AI coding assistants has raised questions about how much trust developers and organizations should place in their ability to meet accessibility requirements.

## Following accessibility instructions

I've worked on implementing accessibility rules for AI-generated code and integrating checks into development workflows. I've also seen AI coding assistants violate those rules despite having been instructed to follow them.

One example involved converting Markdown into HTML. The AI had been instructed to produce semantically meaningful HTML, but instead generated div soup: a collection of `<div>` elements where proper HTML elements should have been used.

Markdown provides structural information. Headings, lists, and paragraphs have meaning that should be preserved when converting them to HTML. Replacing that structure with generic `<div>` elements can remove information that screen reader users rely on to understand and navigate content.

Developers can include requirements in project configuration files or instructions that their AI coding assistants are supposed to follow. They can provide examples of accessible implementations and require the AI to review its work before presenting the code.

These measures may improve the results. Verifying the generated code is necessary to determine whether the requirements have been met.

I've seen AI coding assistants correctly explain accessibility requirements and identify problems in code. Yet they still produce code that violates those requirements right after explaining them.

There's no reason to assume that placing accessibility instructions in a configuration file makes them more reliable than other instructions. My experience gives me reason to question whether instructions alone provide assurance that the output meets accessibility requirements.

## Trusting AI's assurances

I expect a colleague to act on the requirements when they tell me they understand them. If they make a mistake, I can discuss it with them. Over time, I learn how reliably they work and where they might need support.

AI systems use language that encourages similar expectations. They acknowledge instructions and provide detailed explanations. They can identify a mistake and explain how they plan to prevent it. They do this when challenged about their work.

I've had an AI tell me, repeatedly, that it understood my requirements and would apply them consistently. I've also had it explain why its previous attempts to follow those requirements had failed.

Those explanations often sound convincing. Some are detailed enough to suggest the system has identified the underlying problem. But I have no way of knowing whether its explanation accurately describes what happened or whether the proposed solution will work.

With a colleague, I can discuss the problem, understand their reasoning, and hold them accountable for their work. An AI can generate an explanation that sounds reasonable without providing any reliable insight into why it produced a particular result.

This matters because AI coding assistants can produce good results. A developer might use one to generate several accessible components, each of which works as expected. That experience builds confidence in the tool.

A developer who has received several good results may begin reviewing subsequent output less carefully. And when the AI confidently reports that it has followed the project's accessibility requirements, that assurance can reinforce the developer's confidence. The developer still has to determine whether the code meets those requirements.

## Accessibility expertise still matters

I've worked in digital accessibility for roughly 30 years. I know how to evaluate many common accessibility problems and recognize when something needs further testing.

When an AI generates a form, I can examine how the labels are associated with their controls. I can test keyboard interaction and consider how errors are communicated. If it produces a custom component, I know there are questions about accessible names and interaction patterns that need answering.

That knowledge helps me recognize problems in generated code. A developer without accessibility expertise may not know what to look for.

I've encountered many interfaces over the years that appeared to work perfectly well until someone tried to use them with a keyboard or screen reader. The people responsible for those interfaces often believed they were accessible. The fact that an AI generated the code wouldn't make those failures any less likely to go unnoticed by someone who doesn't understand accessibility.

Accessibility expertise makes it possible to recognize and correct problems in generated code. Developers who rely on AI to supply that expertise may accept its assurances without recognizing the defects. The people who most need help understanding accessibility may also be the people least equipped to recognize when the AI has failed.

## The problem with documented processes

For years, I've encountered organizations that have accessibility policies, documented procedures, and detailed standards. They've commissioned audits and received recommendations from accessibility experts, yet their products remain inaccessible.

Sometimes the organization points to the existence of those policies or procedures as evidence of its commitment to accessibility. Meanwhile, disabled people continue encountering barriers.

I can see AI coding instructions becoming another version of this problem.

An organization might add accessibility rules to its AI coding tools and share them with developers. It might even require everyone to use the same configuration file when generating code.

The organization can demonstrate that accessibility requirements have been included in its development process. The accessibility of the resulting product still needs to be evaluated.

There are ways to enforce some requirements more reliably. Linters can identify certain coding problems, while automated accessibility tests can catch some WCAG failures. Other automated tests can verify specific behaviors, including aspects of keyboard interaction and focus management.

These measures have value. They can prevent some problems from reaching production and reduce the amount of manual checking required.

Passing automated tests provides useful evidence about the requirements those tests cover. But automated checks have limitations. They cannot determine whether every interaction makes sense to someone using assistive technology or whether the experience works for disabled people.

I worry that organizations will treat the presence of detailed instructions and automated checks as sufficient evidence that they've addressed accessibility. They may believe they've reduced the need for specialized expertise because their AI tools have been instructed to produce accessible code.

A developer still needs to understand the requirements well enough to evaluate the results. Accessibility testing still needs to happen. Disabled people still need to be involved in evaluating whether the product works for them. Organizations remain responsible for the barriers they introduce.

## Who pays for the mistakes?

When an AI coding assistant violates accessibility instructions, the developer has to review the output, identify the problems, and request corrections. Sometimes correcting the generated code takes longer than writing it properly in the first place.

An accessibility failure has consequences beyond the development team.

A disabled person might be unable to complete a healthcare appointment because a form doesn't work with their assistive technology. They might be unable to submit a job application because a custom control cannot be operated with a keyboard.

The person encountering the barrier has no way of knowing whether the developer used AI. They don't know what instructions were provided or how confidently the AI claimed to have followed them. All they know is that they cannot complete the task.

I've spent much of my career trying to get organizations to understand that accessibility requires ongoing attention throughout design and development. We already have problems with teams treating automated testing results as proof of accessibility, despite the limitations of those tools.

I don't want to see AI-generated code introduce another layer of misplaced confidence.

## Verifying the results

AI can generate accessible code. It can explain accessibility requirements and suggest appropriate implementation techniques. I've seen it provide useful answers to technical accessibility questions.

I have also experienced how inconsistently it follows explicit instructions, including instructions it helped create.

**AI can produce accessible code, but its ability to do so provides no guarantee that it will, even when explicitly instructed.**

I wouldn't trust an AI's assurance that the code it produced is accessible. I'd want evidence from testing, including testing with disabled people. I'd also want the developers responsible for that code to understand accessibility well enough to recognize problems that automated checks cannot identify.

Organizations using AI to generate code need to retain that expertise and accept responsibility for the results. The instructions they give their AI tools are only one part of the development process.
