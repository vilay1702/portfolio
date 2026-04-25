# GitHub Pages Deployment (via GitHub Actions)

This project deploys to GitHub Pages using a GitHub Actions workflow
(`.github/workflows/main.yml`). The site is served on the apex custom
domain **vilaybende.com**.

---

## One-time setup on GitHub

Do these in `https://github.com/vilay1702/portfolio`:

### 1. Switch the Pages source to "GitHub Actions"

Settings → **Pages** → **Build and deployment** → **Source**: select
**GitHub Actions**.

> If it was previously set to "Deploy from a branch" (`gh-pages` or
> `main /docs`), change it now. The new workflow uploads its own
> artifact and will not push to a branch.

### 2. Workflow permissions

Settings → **Actions** → **General** → **Workflow permissions**:

- Select **Read and write permissions**
- Save

(The workflow file already requests the `pages: write` and
`id-token: write` permissions it needs at the job level.)

### 3. Custom domain

Settings → **Pages** → **Custom domain**: enter `vilaybende.com` and
save. After the DNS check turns green, tick **Enforce HTTPS**.

The repo already contains `public/CNAME` with `vilaybende.com`, so the
domain survives every deploy.

### 4. DNS records (at your domain registrar)

Apex `vilaybende.com` — four `A` records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optional IPv6 (`AAAA`):

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

`www.vilaybende.com` — single `CNAME` record:

```
vilay1702.github.io
```

### 5. Old "branch" deploy cleanup (only if you used it before)

If a `gh-pages` branch exists from the previous setup, you can delete
it — the new workflow does not use it:

```bash
git push origin --delete gh-pages
```

Also remove the `gh-pages` package and the `predeploy`/`deploy` scripts
from `package.json` if any are still present. (They are not in this
repo right now.)

---

## How the workflow runs

Triggers:

- **Push to `main`** → build + deploy
- **Pull request to `main`** → build only (no Pages upload, no deploy)
- **Manual** → Actions tab → "Deploy to GitHub Pages" → Run workflow

Jobs:

1. **build** — `npm ci`, `npm test`, `npm run build`, then upload the
   `./build` directory as a Pages artifact (skipped on PRs).
2. **deploy** — uses `actions/deploy-pages@v4` to publish the artifact
   to the `github-pages` environment (skipped on PRs).

The build step runs with `CI=false` so that ESLint warnings do not
fail the build (Create React App treats warnings as errors when
`CI=true`, which GitHub Actions sets by default).

---

## Local verification

```bash
npm ci
npm run build      # should produce ./build with index.html and CNAME
```

Confirm `build/CNAME` contains `vilaybende.com` after the build — if
it does not, something is wrong with `public/CNAME`.

---

## Troubleshooting

**"Get Pages site failed" in the workflow**
The Pages source is not yet set to "GitHub Actions" (step 1 above).

**Site loads at `vilay1702.github.io/portfolio` but `vilaybende.com`
is broken**
DNS is not propagated yet, or the custom domain is not entered in
Settings → Pages. Verify with `dig vilaybende.com +short`.

**Build fails on ESLint warnings**
Either fix the warning, or keep `CI: false` in the build step. It is
already set in the workflow.

**404 on the deployed site**
Check the Actions run — the build job must succeed and the deploy job
must show a green check with the "Deployed to github-pages" URL.
