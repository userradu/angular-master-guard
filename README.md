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

## Notes

### CanActivateChild

If the parent component is not accessible (canActivate, canLoad), then the child component will not be accessible.

If the parent component is accessible (canActivate, canLoad), but the child component is not accessible (canActivateChild), then the parent component will not be loaded neither. This behavior is the same even if an async guard is used for the parent component and a sync guard for the child component. 

### Multiple guards behavior

It doesn't matter the return value(true/false) of a sync guard, the next guards will be executed as well.

If there are 2 sync guards which return false and each guard has its own redirect, the user will be redirected to the page specified by the last guard. 

The guards are not executed in order if there are async guards.

If a guard(sync or async) returns false, any async guard will be canceled/not executed.
