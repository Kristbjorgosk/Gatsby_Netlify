---
title: How you explain the basics of internet to a 5y old
date: 2020-11-25T18:05:21.346Z
description: About the internet, the way you are able to click on a link and
  receive that data to your computer
---
You are at home about to visit a website in your computer, what goes on behind the scene so the browser will display the website for your is like this: 

**Browser - dns server - data center - optical fiber cables - router - browser.**

Let's break it down. The dns server is a server that keeps all the domain names and ip addresses together, when you enter an ip address the browser needs to know what ip address in behind the domain name, signal is sent to the dns server from your browser and the dns server finds the matching ip address and forwards it to the data center. Dns server is like a phonebook, it keeps each domain and their ip address together. 

The data center sends back the data you need via optical fiber cable, it travels in a light pulse and may need to travel even under sea to get to you.\
There are about 8 millions data centers all around the world but you may want to access data from different data centers depending on what you are browsing, so it is pretty obvious that the data needs to travel a long way so you can display the data in your browser. 

The optical fiber cable is connected to the router in your home and from the router it finally reaches your browser and you can display the data / website. 

If you are browsing the internet in your mobile a signal containing the data will be sent from the data server to a cell tower and from the tower to your mobile. 

- - -

When you are sending for example an email or photo to your friend, the data is broken into pieces, the pieces are called packages. When all the packages have reached their destination they are reassembled so your friend can view it. This is done with **TCP or Transmission Control Protocol**, it makes sure to break the data in small bits so it can be sent and makes sure that the packages are reassembled correctly, so it does not allow the packages to arrive in different order. Because of TCP you can be sure that an email you have sent will arrive to your friend just the same as you wrote it and the words have not been mixed up. 

- - -

When browsing the internet you may have noticed that some links start with **http** but others with **https**. The “s” stands for security, it will protect your data so hackers can not easily access your personal information. This is important for example when you are shopping online and writing your card detail or when you are in your online bank. 

- - -

**Traditional Web Hosting** is when you buy a space on a server that you share with others websites/applications. You will pay for a set amount of space and if your website is getting more traffic then before you need to buy additional space on the server (the server is located in one of the data centers we talked about above).\
**Cloud Computing** is new technology and is more flexible, you pay for as much space on a server as you need to host your website, if the traffic increases you will automatically get more space to handle the traffic and if the traffic goes down your space decreases. 

- - -

**Static website** is a website that is built with only html and css, it has no interaction other then hyperlinks and forms and is simple to build while a **dynamic website** is more complex and built with for example, javascript and php to interact with the user depending on what action the user picks.