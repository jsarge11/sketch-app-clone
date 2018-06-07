import * as shapesRed from '../src/ducks/shapesReducer';
import * as projectRed from '../src/ducks/projectsReducer';




    test("resetChanged function will set array to empty", () => {
    
        let correctChanged = {
            type: shapesRed.RESET_CHANGED,
            payload:[]
        }
        expect(shapesRed.resetChanged()).toEqual(correctChanged)
    });
    
   test('add selected', () => {
       let selected = 3;
       let expectedAction = {
           type: 'ADD_SELECTED',
           payload: selected
       }
       expect(shapesRed.addSelected(selected)).toEqual(expectedAction)

   });

   test('set project to null', () => {
       let expectedAction = {
           type: "RESET_SELECTED",
           payload: null
       }
       expect(projectRed.resetSelected()).toEqual(expectedAction)
   })

   test('set selected project', () => {
       let id = 7;
       let expectedAction = {
           type: "SET_SELECTED",
           payload: id
       }
       expect(projectRed.selectedProject(id)).toEqual(expectedAction)
   });

   test('expect to delete shadow on selected', () => {
       let selected = "puppy";
       let expectedAction = {
           type: "DELETE_SHADOW_ON_SELECTED",
           payload: selected
       }
       expect(shapesRed.deleteShadowOnSelected(selected)).toEqual(expectedAction)
   })




//SPENCER'S UNIT TESTS
