---
title: 'The daily reflections--June 1st 2026'
description: 'How to restart the robot over SSH, build a complete map, and enable navigation for space capsule operation.'
pubDate: 'May 31 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

Restarting the machine generally involves first connecting your computer and the robot to the same Wi-Fi network, then remotely logging in via SSH and using conda to access the robot's virtual environment.

## Wi-Fi and SSH Setup

Make sure your computer and the robot are on the same Wi-Fi network before you begin. Once connected, log in to the robot remotely over SSH. After you are in, use conda to activate the robot's virtual environment so you can run the required commands in the correct context.

## Map Building

During the operation of the space capsule, first activate two options using code. Select the **Map** option, then manipulate the robot to walk around the scene once. Make sure the boundaries are filled completely, without any gaps — a thorough pass helps the map capture the full area accurately.

## Navigation

After the map is built, enable navigation mode and check if the map is compliant. If it is, you can operate the space capsule by selecting options according to the previously configured code and program.
