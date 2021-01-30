# SRComp Livestream Video Scheduler

A HTML and JavaScript video scheduler for the livestream of the competition.

Piggybacks off the events created as part of https://github.com/srobo/livestream-overlay to run video of matches in-sync with sr-comp.

## Usage

Install dependencies: `npm install`

Build: `npm run build`

Copy `settings.example.js` to `settings.js`

Edit the `settings.js` with the appropriate `srcomp` settings.

Use chroma-key with your streaming software.

Place videos of matches in `/match_videos/` with the title `match-[matchnum].mp4`. e.g. `match-5.mp4`.

## Development

You can test with a local copy of sr-comp by using https://github.com/PeterJCLaw/srcomp-dev
