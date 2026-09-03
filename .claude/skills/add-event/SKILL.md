---
name: add-event
description: >-
  Add an event to the InnerSource Commons website (this Hugo repo) from a few
  details - title, date, image, and either a full write-up or an external link.
  Creates the content file with correct front matter, drops the image in place,
  previews the affected pages in Hugo, captures the required full-page
  screenshots, and opens a draft PR ready for review. Use whenever someone wants
  to add or announce an event (a community call, a meetup, a summit) on the site.
---

# add-event

Turn a short description of an event into a reviewed draft PR that adds it to the site.
This skill owns the events-specific knowledge - where event files live, their front matter, how they render, and which image goes where - and layers it on top of the site-wide page-editing discipline in the repo's root `CLAUDE.md` (Hugo preview, full-page screenshot of every changed page, clean build, screenshot attached to the PR).

## What an event is on this site

An event is one Markdown file under `content/en/events/<slug>.md`, plus its banner image under `static/images/events/<file>`.
The events page (`/events/`) lists every event: those dated yesterday-or-later appear at the top as upcoming, older ones fall under "Previous Community Calls".
The homepage "Upcoming Event" card shows the banner of the next future event that carries a `redirect`.

Two shapes, picked by whether the event has its own page or points somewhere external:

- **Redirect event** - the card links straight to an external page (a meetup signup, an external ticketing page, a partner's event page).
  The event has no body page of its own; the front matter carries `type: redirects` and a `redirect:` URL.
- **Full-page event** - the event has a write-up hosted on the site itself (a summit, a flagship event).
  No `type`/`redirect`; the Markdown body below the front matter becomes the event page, reachable from the events list.

### Front matter

| Field | When | Meaning |
| --- | --- | --- |
| `title` | always | The event name, shown on the card and page. |
| `image` | always | Banner path, e.g. `/images/events/my-event.jpg`. The file lives at `static/images/events/my-event.jpg`. |
| `date` | always | The event date, `YYYY-MM-DD`. Drives upcoming-vs-past placement. |
| `publishDate` | recommended | When the event starts showing on the site. Set to today (or earlier) to publish now; a future date stages it. |
| `type: redirects` | redirect events | Marks the event as a link-out with no body page. |
| `redirect` | redirect events | The external URL the card and buttons open. |
| `target` | optional | Link target, usually `_blank` for a redirect that should open in a new tab. |
| `bigHeading` | optional | `true` renders the title larger - reserved for flagship events. |
| `youtubeLink` / `blogPostLink` | optional, past events | Adds a "Watch Recording" / blog button on the past-event card. |

A redirect event's body can hold a short summary paragraph; Hugo uses it as the card's summary text.

## The flow

1. **Gather the details.**
   Title, date, banner image, and either the external link (redirect event) or the write-up (full-page event).
   If the image is missing, say so and ask for it - the card looks broken without one.
2. **Add the image.**
   Save the banner to `static/images/events/<file>` using a clear, dated slug (match the file name to the event slug).
3. **Create the content file** at `content/en/events/<slug>.md` with the front matter above.
   Use a redirect event unless the details include a full write-up meant to live on the site.
4. **Preview and screenshot** per the root `CLAUDE.md`: run `hugo server --buildDrafts --buildFuture`, open the events page and the homepage, confirm the new card renders and links correctly, then capture a full-page screenshot of each changed page.
   Run a clean `hugo` build once to catch anything the dev server misses.
5. **Open a draft PR** on a feature branch.
   Put the screenshots in a "Screenshots" section of the PR description by dropping them into the GitHub description box (never commit the screenshot files).
   Leave the PR as a draft for review.

## Scope

- Events are English-only in practice; add the file under `content/en/events/` and leave the other language trees alone unless asked.
- This skill adds one event per run. For a batch, run it once per event so each gets its own reviewable card and screenshot.
