import * as actions from '../../actions/eventActions';

describe('recommended', () => {
  it('should return three objects', () => {
    // const text = 'Finish docs'
    const expectedAction = {
      type: types.ADD_TODO,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})