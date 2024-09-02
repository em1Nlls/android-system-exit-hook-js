# Android System Exit Hook

This repository contains a Frida script designed to connect to the `System.exit()` method of Android applications. This script logs the exit code each time `System.exit()` is called and prevents the application from exiting.

## Script Overview

The code binds to the `java.lang.System` class and overrides the `exit(int)` method to log the exit code and stop the application from terminating.
