---
title: how to let my agents on to the website(docker)
description: "look at my respo: https://github.com/yixuan1112-coder/CTF-generation-AI-agent"
type: knowledge
pubDate: Aug 12 2026
updatedDate: Aug 12 2026
---
Step A — Rent a VPS (5 min, ~€4/month)



Hetzner Cloud is the cheapest good option (https://console.hetzner.cloud):

1. Create project → Add Server

2. Location: pick one near you

3. Image: Ubuntu 24.04

4. Type: CX22 (2 vCPU, 4 GB) — plenty

5. Add your SSH key, or note the root password they email you

6. Create → copy the IPv4 address



DigitalOcean or Vultr work identically at ~$6/mo if you prefer.



Step B — Free hostname (5 min)



HTTPS needs a real hostname. duckdns.org (https://www.duckdns.org) is free:



1. Sign in with GitHub

2. Type a subdomain, e.g. yixuan-ctf → add domain

3. Paste your server's IPv4 into the current ip box → update ip



You now own yixuan-ctf.duckdns.org. Verify it resolves before continuing:



ping -c1 yixuan-ctf.duckdns.org     # must show your server's IP



⚠️ Don't skip this check. Caddy asks Let's Encrypt for a certificate, and that fails if DNS isn't pointing at the server yet.



Step C — One command on the server



ssh root@<your-server-ip>



git clone https://github.com/yixuan1112-coder/CTF-generation-AI-agent

cd CTF-generation-AI-agent

sudo bash deploy/bootstrap.sh yixuan-ctf.duckdns.org your@email.com



Takes ~5 minutes. Installs Docker, Python, both images, systemd, and Caddy with automatic HTTPS.



Step D — Check before telling anyone



The script ends with a report. It must say docker:



arena service : active

agent sandbox : docker / strong

maker         : docker / network: none

deployed 0c3e319 on default branch



If the sandbox line says anything else, the script prints a loud warning — don't accept public submissions in that state.



Then open https://yixuan-ctf.duckdns.org — leaderboard, /library, /submit, /docs, all on HTTPS.
