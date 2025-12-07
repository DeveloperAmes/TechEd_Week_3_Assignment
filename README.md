# TechEd_Week_3_Assignment

Building a simple clicker/idle game to engage visitors to my site.

# What requirements did you achieve?

I believe I have achieved all of the basic requirements and a couple of the stretch goals such as using a single function to handle all upgrades and adding some animations to improve the user experience. I do think that perhaps some of my functions and the whole structure of my code could be better organised in general.

# Were there any requirements or goals that you were unable to achieve?

- I'm not entirely sure that my functions and code are well organised.
- I have tried to add a few extra animations to my page but I couldn't figure out why they weren't working or I didn't know what to Google to find the code.
- I didn't really have time to try and learn how to make a user menu, although I would have liked to learn how to do this (especially as I have added sound effects). I tried to add an icon to toggle the sound effects on and off but sadly did not have time to do this.

# If so, what was it that you found difficult about these tasks?

I tried to look at the Cookie Clicker game's Dev Tools to try and work it out but couldn't really find what I was looking for in there.

# Feedback requested:

- Is my code in my createUpgradeElements function really messy? I know that I've added the event listeners within that function but is there a better way to organise it?
- Whenever I load my page in browser view, it seems to load half off the page for a second on the right side of the screen before moving to the center. If this also happens to you on page load, could you explain why this is happening?
- Which is better to use for data that is constantly being updated in local storage: let or const?

# Useful external sources:

- Unsplash for the cartoon flower
- Pixabay for the sound effects
- The cookie API
- Freepik for the background image
- YouTube video on how to add animations to JavaScript events https://www.youtube.com/watch?v=LE9EaIZdjFM

# Errors or bugs I encountered:

- I couldn't understand why initially when saving the data to local storage, it was just saving as "0" rather than the actual values that were displaying. Bertie managed to find the issue - it was because I had accidentally converted the count data into strings using backticks instead of just using the count variable in my setItem() method.

# What went really well and what could have gone better?

- I'm pleased that I managed to get everything working eventually (with the help of Sam and Bertie).
- I'm not really too happy with the styling. I think that there are probably some contrast issues and some things weren't working (such as trying to place items within the centre of a grid section). The first grid row seems to disappear when in mobile view, which I wanted to have to create more space between the top of the page and the rest of the content. The reason for this was so that if someone was trying to play on a mobile phone, they would be able to more comfortably reach the flower with their thumb. The way that the layout is in mobile view now means that the flower would likely be out of reach for the user.
- The upgrade buttons still sometimes take a while to actually load when the page loads (noticeable 3-5 seconds).
- I really wanted to add more animations, like having a mini version of the flower clicker appear and disappear when the user has clicked (similar to the cookie game) but wasn't sure what to look for on Google to make this work.
- I kept forgetting to push to GitHub pretty much for the whole day on Friday and Saturday. I need to get into the habit of doing it more regularly.
