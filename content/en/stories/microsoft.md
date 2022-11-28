---
layout: page
title: "Microsoft DevOps Dojo InnerSource Case Study"
---

## Summary
When done right, InnerSource is one of the most effective ways to release trapped value in the enterprise. InnerSource is not just for source code, it can be used for any content including sales, presales, marketing, solution, delivery or education in your organization.

Microsoft has been practicing InnerSource within the product groups to develop code for more than 5 years with early pockets of cross team collaboration on code reaching back many more years. In the string of collaboration efforts, the DevOps Dojo within Microsoft Professional Services is one of the more recent groups to use InnerSource, this time, to create content collaboratively.

Read on to learn how Microsoft’s DevOps Dojo leveraged InnerSource to help them:

* **Solve the problem** of having many divergent copies of customer-facing content, instead creating a “single source of truth” for the resources used in the delivery of their DevOps masterclasses
* **Empower a global community** of DevOps practitioners and Microsoft consultants to engage in the co-creation of the assets, asynchronously, ancillary to their day-job
* Enable team members to **incorporate customer feedback** to improve the content live with customers and have it propagated quickly to the entire organization
* **Grow skills** in communication, documentation, and community building that led to personal fulfilment, professional success, and promotions
* Build **deep and lasting personal** connections across the globe.

## Background

Microsoft engineering has undergone a massive transformation over the past number of years: From taking a year to release a packaged software in 2014, to having deployment to production 82,000 times a day in 2019, and today 5.6M times a month. Customers naturally were asking: “How did that happen?” and “What’s the secret sauce behind the scenes?” A group within Microsoft Professional Services (now called Microsoft Industry Solution) decided to address this challenge and share Microsoft’s learnings of practicing InnerSource with content directly delivered to customers.  The DevOps Dojo initiative started in early 2019.
DevOps Dojo is a community of practice at Microsoft. It started with a small group of volunteers from the Services organization, then expanded to Customer Success, Digital Advisory, Product Groups, and other organizations. All participation is voluntary and happens adjacent to their core job priorities. It is a community where cross-functional teams practice agile, continuous collaboration and automation principles of DevOps to find the best path to delivering software from idea to production with quality. It includes a diverse set of participants across roles, levels of experience and geographies, all working to learn together and share those learnings with Microsoft’s customers.

## Problems to Be Solved

When DevOps Dojo started out the cross-functional IP was closed source. This posed a problem. The teams were working with technologies that had just come out, with tools that were still in beta. The core content was being updated by the Product Groups on a continuous basis. Links to resources and reports had to be regularly updated.

Each member of the Dojo would often create their own local copy to customize or update for customers. There was a proliferation of versions of the content, each slightly different from each other: There was no “single source of truth”. Global updates could not be easily issued, and customer feedback stayed with the Dojo member closest to the customer.

Michael Watson, Architect at Microsoft, elaborated on the issue: “DevOps Dojo is a collaboration of more than just Microsoft staff. We were bringing people together to talk about this subject matter. Even though we had a point of view, many of the people we were engaging had years of experience. We wanted to learn from each other and keep up to date with what was happening in the industry.”

While contemplating the problem, one of the Dojo members, Alvaro Guadamillas, remembered: “I saw so much amazing content created by the DevOps Dojo community that from day one I felt the need to make this content as open to everyone as possible. After two months of being part of the Dojo Community, I felt enough trust to share one idea: Why don’t we make DevOps Dojo content InnerSource? Why don’t we apply Pull Requests to the creation of the content and collaborate at scale to have the latest and the greatest content available to everyone at Microsoft? Why don’t we avoid having multiple copies of the same presentation  distributed everywhere and having a single source of truth instead?”
At a Dojo masterclass event in Shanghai, Alvaro met with some of the other core team members and suggested the approach. Looking at how it addressed their challenges and recognizing that there was a global InnerSource community that already existed to help them on their journey, it was agreed that they would experiment with an InnerSource approach. With consideration of the cultural impact of InnerSource, the team decided to pilot InnerSource first on a subset of the DevOps Dojo solution. With the support of the Dojo community, including the Azure DevOps engineering team, and the expertise from GitHub, they created the first InnerSource pilot in Microsoft Professional Services.  

## Foundations & Implementation

One of the first steps the team took was to get some expert advice to help them on their journey. They called on Natalie Bradley from GitHub who had significant experience in working with organizations to help them on their InnerSource journey. With Natalie's help, the team set about getting all the appropriate policies and processes in place to help the team. All the content was stored as markdown files in GitHub and the Dojo communicated day to day through the Community’s Channels on Microsoft Teams. 

![InnerSource at Microsoft](/images/stories/microsoft.png)
*Figure 1: InnerSource at the DevOps Dojo at Microsoft*

The team focused on delivering a seamless experience for contributors. They also took care to provide governance clarity, including nominating who was responsible for each area, and how they would resolve any disputes that may arise.

From Day One the team knew that it would be essential to be able to track and celebrate both contributions to, and usage of, their output. Therefore, the initial set up also included metrics around downloads as well as tracking the number and source of pull requests.

When designing the DevOps Dojo, the team didn’t think of the Dojo simply as a short-term program. They believed the Dojo was a transformational program for both internal Microsoft field and Microsoft’s customers. They adopted a product-centric model through a “lean product” process and approach. You can find out more details about the lean product approach in the [DevOps Dojo blog](https://devblogs.microsoft.com/devops/devops-dojo-lean-product-part-1/).

## A Single Source of Truth – Delivered

Within a couple of months, the initial core team had a minimum viable product (MVP) up and running. Content for the masterclasses was being delivered to the community in a way that was constantly up-to-date. Labs and the instructions for the lab delivery were created and updated in the same way.

As Harleen Kaur, Technical Consultant at Microsoft, described: “As a coach I would prepare for each session, and if I saw a link or reference that needed to be changed, my first instinct was to do that on the website, so everyone else would benefit from the change. I was able to do that in the moment. If I couldn’t, I may have forgotten to go back later to do it.”

The core team then began to hold regular sessions to help spread the word. They showed the content that was available, and how the team could use it, or even better, contribute to it. They did live role-play to demonstrate how the various InnerSource roles worked, and even live edits to the content on calls so people could see how the reviewing and approving process worked and how easy it was. Through this process they were also identifying different customer challenges and experiences to incorporate.

Participation and contributions soon spread across the world. The Dojo currently has multiple business units working together across 36 countries to deliver the latest, most accurate content to Microsoft’s customers.

Deep Mehta, Technology Consultant at Microsoft shared: “IP reuse is something we always wanted to provide, but in the past, it has been a challenge. InnerSource has helped us deliver that. Plus, we encourage those who reuse the content to help by contributing back. InnerSource also helps you network with people around the organization. You get to know contributors; you get to learn from them. That is a major plus point.”

Dave McKinstry, Microsoft’s DevOps FastTrack Program Manager, added: “What I’ve noticed from an engineering perspective, is that when you open up your source code, quality inherently goes up. People want to make things better.”

## Innovation Enabled

As the use of the DevOps Dojo content increased, the team realized additional tools could help the users get to know the content. They were inspired to implement a QnA Chatbot to improve the experience for the users of the content.

The chatbot enables the Dojo community to ask anything in their community Teams channel supported by AI bots and QnA Maker (an Azure Cognitive Service). Besides providing real-time answers with language support, the solution organically improves questions and answers by the community. Integrated with powerful AI capabilities, the solution is designed to help Dojos get answers related to Dojo Content, Readiness, Offerings and Delivery quickly in a conversational style in Microsoft Teams.

Once requirements were defined and the team had a good understanding of the integration architecture, they began the implementation through InnerSource. The QnA Bot went public at Microsoft as planned. All improvements and contributions happen through an InnerSource process and can quickly take effect through automation pipelines.

Yue Sheng, who worked on the AI Chatbot outside of her core job responsibilities, shared: “You have mentors, teachers, and friends here. Everything is a bi-directional process. We are always trying new innovations. I get fresh interesting things through the process.”

As Kan Tang, one of the leaders of DevOps Dojo observed: “At Microsoft, we all have our job focus. Sometimes you see something you want to try outside of your core responsibilities. People come to DevOps Dojo, and they have autonomy to experiment and innovate. “

## Learning Through InnerSource

Through their practice of InnerSource, the Dojo community also noted that publishing their content through InnerSource created a wonderful learning opportunity. InnerSource requires a team to capture and document everything so the team can collaborate asynchronously and not rely on being in close physical proximity to each other. As the team observed: writing makes you think, thinking makes you reflect, reflection makes you deliberate, deliberation makes you learn more deeply.

“In our writing, we constantly challenge each other, learn from one another, and iterate collectively,” commented Kitty Chiu, DevOps Architect at GitHub.

“For me, what made me join the team was the concept of sharing content and learning from different parts of the world and different roles. We were always sharing ideas and different points of view. It’s a real enrichment, a conversation that brought a lot of value,” shared Giulia Cupani, Azure Program Manager.

## Worldwide Connections

The DevOps Dojo team is distributed across the globe. This presents many challenges such as time zone constraints not allowing the entire team to meet together.
Kitty Chiu, based in Australia, described how the InnerSource process and focus on content creation allowed for them to engage seamlessly in the process: “Before the pandemic the Microsoft culture usually involved face-to-face meetings. That was a challenge if you are working in a different time zone. We often had to fly to Seattle to collaborate on projects like this. When the Covid-19 pandemic hit, the notion of asynchronous communication became the norm. InnerSource was where conversations started. Everyone could contribute equally; it didn’t matter where they sat in the world.”
Margarita Sanz, DevOps and Cloud Consultant at Microsoft, also shared how InnerSource allowed the team to develop a common purpose across the global team: “I have never seen people more committed to a goal than this team. The team went from China to Madrid, passing through India and Switzerland, to multiple time zones in the US, etc. Different time zones, different languages, and different backgrounds, but the same goal, and above all, the same CULTURE.”

## Customer First

Microsoft often talks about a “customer first” culture. In this case, the DevOps Dojo team demonstrated how taking an InnerSource approach for the creation of their content not only ensured their customer received the latest, most up-to-date content, but also allowed them to have the customer engage in the update process.

The teams deliver their masterclasses directly to customers. Paul Fijnvandraat, Principal Consultant at Microsoft, shared that if a customer had feedback or a question to be answered (in pre-sales or delivery), he created a pull request to have the question and answer added to the DevOps Dojo content. In this way, the customer feedback propagated to the entire organization almost immediately.

## Impact for the Team

The DevOps Dojo delivers significant value to Microsoft and its customers. However, from talking with the DevOps Dojo team, one additional benefit is the incredible impact on the individual participants.

Many members of the Dojo were formally rewarded and promoted because of its huge success, but it seems the biggest reward of all was even more personal. Those in the Dojo reported that they had forged close relationships across regions and experience levels, that they built new skills and had amazing learning experiences. Margarita Sanz described:

*“I know by heart finding a team where you feel supported, and valued is not easy, and even though the path hasn’t always been smooth, I would walk it again without doubt. We were not a team, we were friends, we were family working side by side supporting each other. The day I joined Dojo, I felt like I was joining a new family. Today I develop, learn, and grow hand in hand with all of them, and I couldn’t be prouder and more excited about the future that lies ahead.”*
As described by Kan Tang: *“What do we gain out of this experience? Tremendous learning and growth, new opportunities, happiness, self-confidence, and life-time friendships!”*

## Future Plans

Today, the DevOps Dojo content is continuously improved by the community, they have a single source of truth with the latest and greatest content, and the team can collaborate on a scale, at anytime and anywhere in the world.
They have seen the adoption of the DevOps Dojo content grow month on month and have started to see contributions begin from other regions in the world. The group looks forward to extending both the DevOps Dojo and InnerSource practices within Microsoft and perhaps even begin the process of open sourcing the DevOps Dojo content to the world!
*“We have over 80,000 engineers working on code at Microsoft, and we are constantly evaluating what would be interesting to openly share with our customers. InnerSource has allowed us to unlock that potential, reduce redundancy, and collaborate more effectively.”* Arno Mihm, Principal Program Manager for InnerSource @ Microsoft.

## Acknowledgements

This case study was written by Clare Dillon, Executive Director of InnerSource Commons, Daniel Izquierdo, CEO Bitergia & Director of InnerSource Commons, and Dr. Klaas-Jan Stol, Director of InnerSource Commons, following a series of interviews with the DevOps Dojo Teams at Microsoft.

Clare notes “Sharing stories about our InnerSource journeys is an important part of the InnerSource Commons community. We would like to send a huge thank you to all the wonderful people in Microsoft and GitHub who took the time to share their experiences and help us record this case study:

-   Deep Mehta – Technology Consultant, Azure Cloud & AI, Microsoft India
-   Margarita Sanz – DevOps and Cloud Consultant, Microsoft Spain
-   Álvaro Guadamillas – Business Program Manager, Azure Cloud & AI, Microsoft Spain
-   Michael Watson - Architect, Microsoft Australia
-   Yue Sheng – Consultant, Azure Cloud & AI, Microsoft China
-   Kitty Chiu – Senior DevOps Architect, GitHub, Australia
-   Harleen Kaur – Technical Delivery – Information Security & DevOps, Microsoft India
-   Dave Burnison - Senior Technical Advocate, GitHub, US
-   Karl Piteira - Principal Group PM Manager, Microsoft, US
-   Jeff Wilcox - Principal PM Manager, Microsoft, US
-   Natalie Bradley - Director, Customer Success Architects, GitHub, US
-   Dave McKinstry – Manager, DevOps FastTrack Program, GitHub, US
-   Paul Fijnvandraat – Principal Consultant, Microsoft Netherlands
-   Chris Witte - Senior Consultant, Microsoft US
-   Jihee Choi - Consultant, Microsoft US
-   Nicolas Mays - ASSC Consultant, Microsoft US
-   Geoff Sexton - Senior Consultant, US
-   Giulia Cupani – Azure Program Manager, Microsoft Switzerland
-   Aakanksha Lnu – Consulting Product Manager, Microsoft, UK
-   Beste Altinay - ASSC Architect, Microsoft Netherlands
-   Rui Melo - Architect, Microsoft, PORTUGAL
-   Nithyanathan R - ASSC Architect, Microsoft India
-   Charlie Gu - Architect, Microsoft, China
-   Harry Chen – Architect, Microsoft, US
-   Bahram Rushenas – Architect, Microsoft, US
-   Garry Trinder – Senior Cloud Advocate, Microsoft, UK
-   Kan Tang – Architect Manager, Retail & Consumer Goods Service Line, US
-   Arno Mihm – Principal Program Manager, InnerSource @Microsoft, US

For more information or to get more details, join the InnerSource Commons community Slack to spark up a conversation. You can also check out the [DevOps Dojo blog posts](https://devblogs.microsoft.com/devops/intro-of-devops-dojo/) (all created by the team using Markdown through an InnerSource process).

If you would like to share your InnerSource story, please reach out to us at [info@innersourcecommons.org](mailto:info@innersourcecommons.org).