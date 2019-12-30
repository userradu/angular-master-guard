# AngularMasterGuard

This project was created in order to learn more about Angular guards.

## Notes

### CanLoad

**This type of guard will not be executed once the module is loaded.**

Consider a situation where the user logs in, the module is loaded, logs out, logs in again (lets assume that he doesn't have the rights to see a certain page, but the module is loaded).

### CanActivateChild

If the parent component is not accessible (canActivate, canLoad), then the child component will not be accessible.

If the parent component is accessible (canActivate, canLoad), but the child component is not accessible (canActivateChild), then the parent component will not be loaded neither. This behavior is the same even if an async guard is used for the parent component and a sync guard for the child component. 

## Multiple guards behavior

### CanActivate + CanActivateChild

It doesn't matter the return value(true/false) of a sync guard, the next guards will be executed as well.

If there are 2 sync guards which return false and each guard has its own redirect, the user will be redirected to the page specified by the last guard. 

The guards are not executed in order if there are async guards.

### CanLoad

The guards are not executed in order if there are sync and async guards.

The guards will be executed in order if they are all async.

