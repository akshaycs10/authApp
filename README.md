## A good Auth App that should not be taken advantage of.

- Create an endpoint that issues a jwt token. 
- Create 2nd endpoint that blacklists this token.
- Create 3rd endpoint to show session history of the user.
- And a middleware for accessing rest of the endpoints. (Rest of the endpoints can be just normal Hello-world stuff, not important, just for testing)
- The login endpoint can accept username/password or a google token (access-token, id-token, one-time-code). Depending upon where it is coming from it verifies the user and issues token.

#### Scenarios to watch out for:
- Dont let any attacker DDos you on any of the above endpoints. I will let you figure on what and how to `limit` the attacker.
- Ability to know how many tokens each user has issued and device details. Sort of like session history in gmail or any other apps you must have seen.

#### Extra points if...
- Not used expressjs or similar library for such a small thing. Its a cheap shortcut. Library for JWT handling or google sso  is fine.
- Code documentation. Swagger or in-code documentation or any tool of your choice.
- Atleast 1 valid test case. 

#### Some Liberties:
- We are highly interested in the code and architecture. We dont mind if you have a hard coded list of usernames and a common password. But rest of the salting/hashing/encrypting should be like you would do in an production app.
- Should atleast work on your local machine.
- You can use your choice of DB with a logical reason. (Or No DB, pure file-based. Been a while seen this stuff)
