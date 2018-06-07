import * as shapesRed from '../shapesReducer';


//=== Skyler's 5 Unit Tests ===//

describe('actions', () => {
    test('should create action to update letter spacing', () => {
        let updatedLetterSpacing = {type: 'text', fontFamily: 'sans serif', fontSize: 14, letterSpacing: 5}
        let expectedAction = {
            type: shapesRed.UPDATE_LETTER_SPACING,
            payload: updatedLetterSpacing
        }
        expect(shapesRed.updateLetterSpacing(updatedLetterSpacing)).toEqual(expectedAction)
    }),

    test('should create action to update line height', () => {
        let updatedLineHeight = {type: 'text', fontFamily: 'sans serif', fontSize: 14, lineHeight: '100%'}
        let expectedAction = {
            type: shapesRed.UPDATE_LINE_HEIGHT,
            payload: updatedLineHeight
        }
        expect(shapesRed.updateLineHeight(updatedLineHeight)).toEqual(expectedAction)
    }),

    test('should create action to update text align', () => {
        let updatedTextAlign = {type: 'text', fontFamily: 'sans serif', fontSize: 14, textAlign: 'center'}
        let expectedAction = {
            type: shapesRed.UPDATE_TEXT_ALIGN,
            payload: updatedTextAlign
        }
        expect(shapesRed.updateTextAlign(updatedTextAlign)).toEqual(expectedAction)
    }),

    test('should create action to update font weight', () => {
        let updatedFontWeight = {type: 'text', fontFamily: 'sans serif', fontSize: 14, fontWeight: 600}
        let expectedAction = {
            type: shapesRed.UPDATE_FONT_WEIGHT,
            payload: updatedFontWeight
        }
        expect(shapesRed.updateFontWeight(updatedFontWeight)).toEqual(expectedAction)
    }),

    test('should create action to update font size', () => {
        let updatedFontSize = {type: 'text', fontFamily: 'sans serif', fontSize: 16}
        let expectedAction = {
            type: shapesRed.UPDATE_FONT_SIZE,
            payload: updatedFontSize
        }
        expect(shapesRed.updateFontSize(updatedFontSize)).toEqual(expectedAction)
    })

})