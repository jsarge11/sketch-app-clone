import * as userRed from '../usersReducer';
import * as shapesRed from '../shapesReducer';

test('can get user', () => {
    let user = "billybob"
    let expectedAction = {
        type: 'GET_USER',
        payload: user
    }
    expect(userRed.getUser(user)).toEqual(expectedAction)

});

test('can log out', () => {
    let expectedAction = {
        type: 'LOGOUT',
        payload: undefined
    }
    expect(userRed.logOut()).toEqual(expectedAction)

});

test('can delete blur from thing', () => {
    let thing = 'stupid blur';
    let expectedAction = {
        type: 'DELETE_BLUR_ON_SELECTED',
        payload: thing
    }
    expect(shapesRed.deleteBlurOnSelected(thing)).toEqual(expectedAction)

});

test('can update blur on thing', () => {
    let thing2 = 'stupid sexy blur';
    let expectedAction = {
        type: 'UPDATE_BLUR_ON_SELECTED',
        payload: thing2
    }
    expect(shapesRed.updateBlurOnSelected(thing2)).toEqual(expectedAction)

});

test('can add blur to thing', () => {
    let oneTrueThing = 'is that a new blur ur wearin? you go girl!';
    let expectedAction = {
        type: 'ADD_BLUR_ON_SELECTED',
        payload: oneTrueThing
    }
    expect(shapesRed.addBlurOnSelected(oneTrueThing)).toEqual(expectedAction)

});