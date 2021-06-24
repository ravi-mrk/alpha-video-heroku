---
id: doc6
title: Pyinit_main error 
sidebar_label: Pyinit_main error
---

If you have the error ``` Fatal Python Error: pyinit_main: can't initialize time ``` This is due to a dependency issue with libseccomp2. Make sure this package is updated. If you are using a raspberry pi or raspberry pi OS then use the commands bellow to fix this.

``` wget http://ftp.us.debian.org/debian/pool/main/libs/libseccomp/libseccomp2_2.5.1-1_armhf.deb ``` This downloads the package. 

``` sudo dpkg -i libseccomp2_2.5.1-1_armhf.deb ``` This installs the new package.

Finally restart your system with the command ``` sudo reboot ``` . This should fix the issue
