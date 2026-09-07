# Organization logo sources

Retrieved 2026-09-07. Assets are stored in `public/images/organizations/` and
served locally, with their original colors and proportions.

| Organization | Asset source |
| --- | --- |
| NEOM | [Official image CDN](https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&wid=480), linked in the [NEOM homepage](https://www.neom.com/en-us) organization metadata. |
| Hiverlab | [Official wordmark](https://hiverlab.com/assets/hiverlab-logo-CFFK3ejb.png) used by [Hiverlab](https://hiverlab.com/). |
| Google | Inline Google wordmark SVG from the [Google brand resource site](https://about.google/brand-resource-center/logos-list/). |
| CompTIA | [Wikimedia Commons SVG](https://commons.wikimedia.org/wiki/File:Comptia-logo.svg), attributed to CompTIA and sourced there from its logo guidelines. |
| Toronto Metropolitan University | [Official logo SVG](https://www.torontomu.ca/etc.clientlibs/ryecms/static/clientlib-site/resources/images/tmu_logo.svg) from the [university brand toolkit](https://www.torontomu.ca/brand/brand-toolkit/university-logo/). |
| Splice Digital | Inline navigation logo SVG from [Splice Digital](https://splicedigital.com/). |
| Fiverr | [Official green wordmark](https://fiverr-res.cloudinary.com/image/upload/v1/attachments/generic_asset/asset/d60fda24bdfb2d58a9f9fcdd9b2e019e-1668776270346/Fiverr_Logo_GreenGreen_RGB%20%281%29.png) served by Fiverr's image CDN. |
| ADP | [Wikimedia Commons SVG](https://commons.wikimedia.org/wiki/File:Automatic_Data_Processing_(logo).svg), used according to [ADP's official logo guidelines](https://www.adp.com/about-adp/corporate-social-responsibility/adp-logo-guidelines.aspx). |
| Yo Technology | Local text monogram; the company's live site did not expose a verifiable logo when checked. |
| Web Dev Services | Local portfolio service mark created for the independent-work entry. |
| AVA | [Official dark logo](https://www.avashopofficial.com/ava-logo-dark.png) served by the [AVA website](https://www.avashopofficial.com/). |
| HVEN | [Official application icon](https://hven.app/icon-06b35709.svg) served by the [HVEN website](https://hven.app/). |
| RempTek AI | [Official dark wordmark](https://remptek.com/remptek-ai-dark.png) served by the [RempTek website](https://remptek.com/). |
| Bearlot's Furry Friends | [Official application logo](https://www.bearlotsfurryfriends.com/assets/logo.png) served by the [Bearlot's Furry Friends website](https://www.bearlotsfurryfriends.com/). |
| Greenfield Marine Technologies | [Official GMT wordmark](https://www.greenfieldmarine.net/_next/static/media/gmt-logo-new.1pv-2-oyttln-.png) served by the [Greenfield Marine website](https://www.greenfieldmarine.net/). |
| Sentra Middleware | Original local project mark created for this portfolio. |
| J.A.R.V.I.S | Original local project mark created for this portfolio. |
| WiFi Spatial Mapper | Original local project mark created for this portfolio. |

The carousel's relationship labels follow `public/resume/CV.pdf`: NEOM is a
project delivered at Hiverlab, and CompTIA represents Security+ and Network+
certifications. The other organizations correspond to employment entries.
NEOM, Hiverlab, and Splice use dark tiles to preserve their original logo colors.
Experience cards reuse these local assets, with Splice and Fiverr shown together
for the 2014–2017 independent-work entry.

Update carousel metadata in `src/content/organizations.ts` and experience in
`src/content/experience.ts`. The carousel pauses on hover, the repeating copy
is hidden from screen readers, and reduced-motion mode displays one static,
wrapping list.
