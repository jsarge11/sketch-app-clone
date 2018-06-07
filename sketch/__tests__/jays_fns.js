import dragEquation from '../src/fns/dragEquation'
import * as reducerShape from '../src/ducks/shapesReducer'

test('function should return appropriate y', () => {
 let result = dragEquation(100);
 let result2 = dragEquation(150);
 let result3 = dragEquation(200);

 let correct = false;
 if (result === 1 && 
     result2 === 2.375 &&
     result3 === 4.300000000000001) {
      correct = true;
     }

     expect(correct).toBe(true);
})
test('should update item in array', () => {
      let correctArray = [{id: 1, name: 'circle', body: { borderRadius: "50%", width: 100, height: 100}}, 
                          {id: 2, name: 'square', body: {borderRadius: "0%", width: 500, height: 500}}]


      let shapes = [{id: 1, name: 'circle', body: { borderRadius: "50%", width: 100, height: 100}}, 
                {id: 2, name: 'square', body: { borderRadius: "0%", width: 150, height: 150}}]

      let selected = {id: 2, body: {borderRadius: "0%", width: 500, height: 500}};

      shapes.map(item => {
          if (item.id === selected.id) {
              Object.assign(item.body, selected.body)   
          }
      })

      expect(shapes).toEqual(correctArray);
})
test('should update rotate property', () => {

 let updatedRotate = {transform: "rotate(45deg)"}
 let expectedAction = {
     type: reducerShape.UPDATE_ROTATE_ON_SELECTED,
     payload: updatedRotate
 }
 expect(reducerShape.updateRotateOnSelected(updatedRotate)).toEqual(expectedAction)
})
test('should update size property', () => {

 let updatedSize = {width: 100, height: 100}
 let expectedAction = {
     type: reducerShape.UPDATE_SIZE_ON_SELECTED,
     payload: updatedSize
 }
 expect(reducerShape.updateSizeOnSelected(updatedSize)).toEqual(expectedAction)
})

test('should update position property', () => {

 let updatedSize = {x: 100, y: 100,}
 let expectedAction = {
     type: reducerShape.UPDATE_POSITION_ON_SELECTED,
     payload: updatedSize
 }
 expect(reducerShape.updatePositionOnSelected(updatedSize)).toEqual(expectedAction)
})

