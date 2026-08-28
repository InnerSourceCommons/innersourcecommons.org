# innersourcecommons.org

Hugo static site for the InnerSource Commons Foundation.

## When modifying pages

- **Preview locally before opening a PR**: `hugo server --buildDrafts --buildFuture`, then check every page you touched at `http://localhost:1313/...`. If `hugo` isn't on `PATH`, it's typically installed via `winget install Hugo.Hugo.Extended`.
- **Attach a full-page screenshot of every changed page to the PR description**, under a "Screenshots" section — capture the whole page top to bottom, not just the changed area, so each change is reviewed in the context of how it sits within the overall page. A markdown or CSS diff doesn't show how the page actually renders, and layout/spacing/image-crop issues only show up visually.
  - Attach it through the browser: open the PR on github.com and drop the image straight into the description, the same as dragging a file into the comment box, so GitHub stores it as a `user-attachments` upload.
    Never commit the screenshot into the repo as a file. It is a review artifact, not site content, and a committed binary stays in the repo's history for good.
- Run a full `hugo` build (not just the dev server) at least once before opening the PR — the dev server's incremental rebuild can miss errors a clean build catches.
