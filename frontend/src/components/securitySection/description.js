export default [
  {},
  {
    title: 'noSQL Injections',
    content:
      'NoSQL injections enable an attacker to inject code into the query that would be executed by the database. These flaws are introduced when software developers create dynamic database queries that include user supplied input\n\n In MongoDB, $gtselects those documents where the value of the field is greater than (i.e. >) the specified value. Thus above statement compares password in database with empty string for greatness, which returns true.\n\nWhen you type {$gt: ""} in place of the password, it will always be true and will allow the hacker to hack in.\n\nTo prevent you should: \n\nValidate inputs to detect malicious values\n\nTo minimize the potential damage of a successful injection attack, do not assign DBA or admin type access rights to your application accounts. Similarly minimize the privileges of the operating system account that the database process runs under.\n\nBuild your noSQL queries so that they are not sent directly to the database',
  },
  {
    title: 'Cross Site Scripting (XSS)',
    content:
      'Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.\n\nAn attacker can use XSS to send a malicious script to an unsuspecting user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. These scripts can even rewrite the content of the HTML page.\n\nTry adding a comment to a page with an injected malicious script into different HTML elements. Secure version of the website will simply display the code, but unsecure will actually inject and execute it!\n\nThis will display a button that shows an alert with a message on click:\n\n<button onclick="alert(\'button script injection\')"> ;</button>\n\nAnd this one will inject the same functionality in a broken image element. The difference is that it will execute the script immediately after the page loads!\n\n<img src="https://placeimgxxx.com/320/320/any" onerror="alert(\'img injection\')">',
  },
  {
    title: 'Broken Authentication & Session Management - IdentityManager',
    content:
      'These types of weaknesses can allow an attacker to either capture or bypass the authentication methods that are used by a web application.These types of weaknesses can allow an attacker to either capture or bypass the authentication methods that are used by a web application.\nIt consists in stealing a logged-in users token and using it by a hacker. In order to prevent such behavior, user session support must be implemented. A user logging in creates a session - his credentials will be valid as long as the session is in the database. When logging out the user removes the session, which results in the uselessness of the token that the hacker stole.\n\nIn our example, the user is stored in the local memory of the browser. To see how the security works - log in to the site - copy the authorization token - log out - the token moves to another browser or incognito card. As you can see, in protected mode, the stolen token does not work, while in unprotected mode, it does.',
  },
  {
    title: 'Insecure Direct Object References - DOM (Document Object Model)',
    content:
      'Insecure direct object references (IDOR) are a type of access control vulnerability that arises when an application uses user-supplied input to access objects directly \n\nConsider a website that uses the following URL to access the customer account page, by retrieving information from the back-end database: https://insecure-website.com/customer_account?customer_number=132355 \n\nThis is a highly inappropriate approach. In our case, unprotected user tasks are downloaded in this way. To download all the tasks from the database, simply replace: \n\nhttp://localhost:5000/api/tasks/?userid=5e7a117dd1af1149ccedd889\n\nto:\n\nhttp://localhost:5000/api/tasks/?\n\nTo prevent this from happening, it is necessary to:\n-deliver data using the POST\n method to protect the server from empty query queries.',
  },
  {
    title: 'Cross-Site Request Forgery (CSRF)',
    content:
      "Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated. CSRF attacks specifically target state-changing requests, not theft of data, since the attacker has no way to see the response to the forged request. With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker’s choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application.\n\nLogin to app and go to comments page and add a comment with content:\n\n<img src=\"https://placeimgxxx.com/320/320/any\" onerror=\"fetch('http://localhost:5000/api/tasks/', { method: 'POST', headers: { 'Content-Type': 'application/json', 'HOST': 'localhost:5000' }, body: localStorage.getItem('odis-user') }).then((res) => res.json()).then((res) => console.dir(res))\" />;\n\nSwitch to unsecure version and watch the console output in the browser. Injected script have just sent a request to a server with your tokens and your personal tasks info have been stolen.",
  },
];
