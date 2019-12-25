# AngularMasterGuard

This project was created in order to learn more about the following:

1. Child routes

2. Route guards
- the different type of guards
- how to run multiple guards in order

3. Resolve - pre-fetching component data

4. Lazy loading

The site should have the following:

- a page with a list of records (CanActivate)

- a page to create a new record (child route, CanActivateChild, CanDeactivate)

- a page to edit a records (child route, CanActivateChild, CanDeactivate, Resolve)

- a login page

- a not found page

- a number of different dummy guards to understand how multiple guards interact. 
The guards will need to be sync (return boolean) and async (return observable). 

- a master guard to run a list of guards in order
