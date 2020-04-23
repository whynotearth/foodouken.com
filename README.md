# foodouken.com

In light of the recent COVID-19 Pandemic, my team and I were looking for a way to support the local economy. Subsequently, we are creating a food delivery app to not only increase business for local food dispensaries but to also provide those of you living in Siem Reap with an easy and convenient means to connect with nearby vendors. The app – Foodouken – is a free food delivery app which was made in Siem Reap, for Siem Reap as a means to help local bussiness and our personal friends, the service will remain free for the duration of the COVID-19 pandemic.

If you would like to get involved, we are seeking programmers, experienced marketers, technical copywriters and UX designers (Figma). In donating your time and expertise, you will not only be welcomed into a collaborative and motivated team, but you will also be giving back to the town and people of Siem Reap. Please pm me with any questions or to let me know if you would like to participate in this project.

If you are a restraunt that would be interested in trialing this service, feel free to drop a comment below or pm me for more details.

Love,
Chris

## design file

https://www.figma.com/file/Q671pbdFk3omco20xmxk5o/foodouken.com?node-id=1245%3A57965

If you have a question about design feel free to reference our design doc, add a comment, or reach out on https://discord.gg/5T7D33c

## frontend (vue.js/tailwind css)

Most of the site is setup using endpoints provided by meredith-core, our REST API:

https://stagingapi.whynot.earth/api/v0/pages/slug/bang-bang-bakery-cafe/

Your job is to style and beautify those endpoints. Since we are working with tailwind css, many of the finer nuances of loading, animations, transitions still need to be done.

## backend (.net)

We host on Google Cloud Platform, postgres database. Our API, meredith core can be found here:

https://github.com/whynotearth/meredith-core

Your job is to create manipulate the API to be better suited for food delivery. Currently, we are mashing a lot json in a single cell in our database and punching out endpoints. We will want to segment that into better modules.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Detailed new contributor guide

For more detailed assistance Visit **[New contributor guide](https://github.com/whynotearth/whynot.earth/wiki/New-Contributor-Guide)**
