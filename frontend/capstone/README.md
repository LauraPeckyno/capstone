
Capstone project for Laura Peckyno | PerScholas Cohort #31
----------------------------------------------------------

This application is a resource for older adults in Pennsylvania who are interested in finding senior discounts. I've tried to limit this to Pennsylvania to make the data scraping a little more managable. No public database was available for use, so I scraped data from many websites to generate my own database of discounts and social services. These are categorized and, when possible, include descriptions, urls, and eligibility details.

The site allows users to find discounts by category, featured status, or by search terms. the pagination limits the discounts to a max of 6 per page. 
A user login was added, but I'm still working out the bugs. My goal was to allow an administrative user to log in, change the featured discounts, and add, edit, or delete the discounts from the database. The backend of this is functional but the frontend isn't passing the user prop after authentication.

Wireframe (overview)
--------------------
App (parent to all)
navbar (every page)
image (every page)
content description (text, every page)
searchbar (homepage only)
featured discounts (could be monetized, every page)
   note: homepage only includes all featured discounts
category discounts (up to 6 per page)
pagination (for discounts)
footer (every page)
   note: includes contact, privacy, and login links
       user authentication: includes create account, login, logout
       note: This is currently bugged. Console logs and review of database confirm 
       that this is functional ( token passed, account created, login successfully checks password, )
       but a suspected prop error prevents the pages from rendering the result.

FUTURE WORK
------------
I'd like to work out the bug in the user authentication. It's definitely a prop I'm not passing quite right. The data is passing to the backend and the database properly and I'm seeing tokens generated. But the page components aren't rendering properly with the user data. I will continue to debug.

Because a comprehensive api doesn't currently exist, I scraped data from many websites to create the collection. There may be a need for this and I see a future opportunity to expand the work.

I see a potential for a mobile app. A brief search for existing apps didn't turn up many results (the two I fond were from other countries). There is a potential to build something useful that could be monetized in multiple ways.