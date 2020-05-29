# Design changes

## Home page
* Consolidate the ROS content
  * Remove info page and merge content with home
  * Content sections should be in blocks
  * Possibly with accompanying illustrations or icons of some kind
  * Each block can have main points overview showing by default
  * Further info hidden in panel, displayed when [same icon as More Info] is clicked
* Get users building policy earlier
  * Add a CTA, something like "Let's start with the introductions. Who is this policy for? (you can use an alias for your organisation if you prefer, then you can just find and replace with the actual name later)"
  * Add a text input below that, same dotted border style as in build process
  * Change the #build CTA button to say "Next question"
  * Put that button next to or just below the input
  * Push the "Find out more" button down below the previous content
  * Centre it and change text to "Tell me more" with fa-arrow-down
  * When user provides org name, save it and send them to #build
  * In process, first question should be pre-filled with the provided org name, and hidden from user, with applicable edit-related classes added

## Build process
* Make the build process more intuitive
  * When #build loads, display a prompt that says something like "Would you like some help? Select yes to have helpful tips guide you through the build process (recommended for first timers), select no to hide these prompts."
  * Add tips to the content json, explaining features like:
    * where to find explanatory info
    * editable buttons
    * progress bar
    * Preview button
    * Edit button
    * Skip button
  * One tip per question, figure out best place to display
    * Overlaid on relevant element
    * X in corner of tip display removes it from the DOM
* Differentiate the sections more
  * Create a colour theme for each section
  * could be shades of main colour or different colours
  * would need the progress bar to match maybe
* Add icon to each answer:
  0.1 pencil
  0.2.0 user-friends
  0.2.1 users
  0.2.2 user
  0.2.3 pencil
  0.3.0 building
  0.3.1
  0.3.2 laptop-house
  0.4.0 user-circle
  0.5.0 calendar-alt
  0.5.1 calendar-week
  0.5.2 calendar-day
  0.5.3 bell
  0.6.0-2 laptop
  0.6.3-4 mobile-alt
  0.6.5