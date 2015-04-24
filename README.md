# SafeDOM
A failed attempt to prevent DOM XSS.

Inspired form Nafeez's work Hookish (http://hookish.skepticfx.com/), I was working on a project called SafeDOM. A library that protects from DOM XSS automatically. It was just an attempt but it failed pathetically because browsers are selfish about standards and JS is mad by nature.

**Architecture**

![SafeDOM](https://cloud.githubusercontent.com/assets/4301109/7295253/8efd4686-e9d1-11e4-953d-d41cbd62e8c5.png)

1. Developer includes SafeDOM.js as the first script that loads in the HTML page.
2. SafeDOM.js will hook the common DOM Sources of XSS, whatever data that is coming to the source is passed through a suitable encoding/stripping function before assigning to a variable or writing to an Execution Sink. Simple as that. 

**Why it failed?**

1. Browsers are not standard. Not all things works on cross browsers.
2. location.href is universally non-redefinable which is a common DOM XSS Source.
3. JavaScript is mad by nature - See the below video
[![JavaScript Madness](https://cloud.githubusercontent.com/assets/4301109/7317300/edf391ec-ea9c-11e4-823e-7dbb399e7a33.png)](https://drive.google.com/file/d/0B_Ci-1YbMqshZDl3X0wyVGJNRTA/view?usp=sharing)

 
**Final Thoughts**

If you have any alternate ideas on achieving this , do let me know!
