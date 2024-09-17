# Intro
Hi CIS 620, my name is Rhett Bulkley!
A little bit about me: 
- I'm a software engineer based of out Utah working at another university there.
- This is my last class at CSU 
- Happily married and a proud dad of 3 amazing kids

# Funny / WarGames
Let's watch a short clip togheter.
I'd normally pause during this section and ask who recognized any of those noises when our protagonist was connecting.
I was there for those days and that was called Dial-up. Specifically what's demonstrated is a technic of network hacking/discovery called hammer dialing where a person calls a series of modems until they find a computer.

This was my favorite movie growing up and is one of the many things I find so fascinating about technology. I love technology and am excited to take this opportunity to share what I have learned about internet addressing protocols!

# Overview
As a bit of an overview here's what I'll be covering:
First I'll do a bit of review and talk about what an IP Address is.
That will lead into why version 6 was necessary.
From there I'll introduce us to the future and beyond.
So let's get started!!

# What is an IP Address?
IP addresses are unique digital identifiers that provide location context to a network capable device. For most of our devices these come in the form of a quartet of octets (or 4 sets of 3 digits joined by periods).

# IPV4 Maths
As an example shown here the maximum digit in any one portion of the address it the maximum possibly represented by 8 binary digits (or a maximum of 256 which is 0-255)
1 byte = 8 bits thus 4 bytes = 32 bits. When we run the combinatorics on the number of possible permutations of ip addresses we get 4,294,967,296
possible IP addresses.
While that may sound like a lot, we actually ran out of ip addresses a long time ago. I mean think about it... each of us have at least a laptop and cell phone device. We may also have a printer, smart tv, or smart watch. We all likely use at least one form of school technology like remote servers or rentals. Each of these devices needs it's own IP address. When we consider the current population of the world (roughly 8 billion) and consider that each person has at least 2-3 devices we'll come up with 24 billion addressable devices.
That's 24,000,000,000!!! This far and away eclipses but number of possible IP addresses. So how are we all connecting? We need a new solution!

# Network Address Translation
Network address translation is a form of architecture allowing for ip addresses to be shared by one or more devices. At first this may sound counter-intuitive but stay with me and it'll all make sense momentarily.
Let's imagine oursleves a common situation where we find ourselves paying for connectivity from a local internet service provider (or ISP).
That ISP often will give you a modem or uplink with an IP address. While most often this IP address is dynamic (or changeable) it represents the gateway to your local area network or LAN and grants you access to the wide area network or WAN, but how do we get between the two networks.
This is where NAT comes in. NAT is a translation service on the router which translates your local IP to and from is dynamic IP. Which is to say if you are making an outbound call to ilovedinosaurs.org, the IP address ilovedinosaurs.org is going to see is not your machines address that you get from running ifconfig (or the like). Instead what ilovedinosaurs.org is going to see is the public IP address assigned by your ISP. Then when they respond to your request that information upon hitting your gateway will be forwarding back to your local IP address via network address translation.

Another way to think about the aggregations of these seperate networks is subnets. Or minified versions of a wider net (short for network).

# CIDR
One common form of allocating/describing these sub networks (or subnets) is known as CIDER. CIDR is an evolution on top of classful network A, B, and C which we'll leave for another day. However, it's valuable information to consider when we talk about breaking up the web into more manageable sections in order to allow for more and more ip addresses.
cidr.xyz is a website you can play around with to get an idea of how many addresses are possible allocated to a given subnet classifcation. For instance with /32 there is 1 and only one with /28, there are much more.

With all this complexity it was relatively clear we needed an even better and more long term solution.

# IPV6
Introducing IPV6 tada! Officially adopted into the spec in 2017.

# IPv6 Q&A
So why IPV6? Plain and simple, we'd run out of IPs and needed to widen our possibilities.

> What is the difference between ipv4 and ipv6?

  Ipv6 is made up of eight sets of hexadecimal digits (or 128 bits / 16 bytes) while ipv4 (as mentioned earlier) is 4 sets of 8 (or 32 bits/ 4 bytes).

> Wait ipv6? What happened to IPV5?
Well, ipv5 was originally intended for streams meaning continuous delivery until the the flow was cut off instead of larger chunks. It also had a 32 bit limitation and never officially adopted due to the size limitations.

# Example
So what does an ipv6 address look like?
It is made up of 8 sets of hexadecimal, 128 bits, or 16 bytes capable.
If we do the math that's roughly 340 undecillion possible permutations make for a much more robust solution to our IP address limitations.

# What does this mean?
Do we still need NATs and CIDR ranges?
This is where things start to get interesting. In the world of subnets we simply cannot afford (out of purely numerical constraint) to assign every device a public IP address. With ipv6 we can. Thus every device no longer needs to sit behind a NAT. Instead I can know the IP of your device and route directly to it through the same way as if it were public. This should raise a few questions. We'll come back to this later.

# Cont.
Some other benefits we'll likely see out of the adjustment is lower cloud costs. This is because each ipv4 address costs these cloud companies money to hold in their adress space. Instead of you use ipv6 those addresses are for the time being free. Simple economics, the more you have of a commodity the harder it is to charge something for it.
Because we won't need network address translations going on everywhere, routers will likely notice a perfomance increase because they simply need to store a map of IP addresses and MACs.

# Ipv6 routing example
Here's an example of what a network looks like under strictly ipv6.
The important thing to keep in mind here is the need for a good firewall. Because your device can now hold a universally unique ip address in order to prevent unauthorized traffic to that device extra precaution will need to be taken.

# Cons
In fact, just as evidence that even the big tech firms will need to figure this out here's a relatively recent CVE.

Back in August Windows released a CVE with surprisingly little detail. However, the nerds of the internet did their best to sleuth it out.
The nature of the CVE made it pretty clear there was some tie to windows networking and the fact that it was a relatively high score 9+ and the ease of execution was low and it allowed for remote code execution it must have been pretty pervasive and serious.

And in fact it was. It turns out all that one needed to do was flood the windows device with some specially crafted ivp6 headers and voila! memory corruption/buffer overflow.

Here's what the script looked like. Pretty simple (though not necessarily intuitive). If you want to learn more go read the malware tech article. It makes for a fascinating read. The reverse engineering necessary on this one was pretty interesting.

# Takeaway
So what's the lesson? Patch your OS.

In all earnestness though, despite the issues we've seen from adoption ipv6 is an awesome advancement and will hopefully lead to some pretty cool improvements over the long term as routers learn to optimize for the header parsing and route tables no longer require translation. It'll be interesting to see how the future generation as they start to associate hex instead of 192.168 or 10.10. It'll definitely be a colloquil challenge for those of the slightly older generation like myself.

I tried to keep this more high level than perhaps necessary, as going too deep into the weeds isn't necessarily everyone's cup of tea. That being said, if you found any of this research interesting feel free to reach out over the interwebs. I am more than happy nerd out and discuss intricate details of Ipv6 headers and network identifiers.

Thanks for sticking with me! Stay curious everybody!
