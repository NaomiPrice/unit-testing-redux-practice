import counterReducer from '../src/counter.reducer.js';

// counterReducer should initally be 0
test('counterReducer should initally be 0', () => {
  const action = {};
  // First argument is the existing state, the second is your action
  const returnedState = counterReducer(undefined, action);
  expect(returnedState).toBe(0);
});

// counterReducer should be able to ADD
test('counterReducer should add 1', () => {
  const action = {type: 'ADD'};
  // First argument is the existing state, the second is your action
  const returnedState = counterReducer(undefined, action);
  expect(returnedState).toBe(1);
});

// counterReducer should be able to SUBTRACT
test('counterReducer should subtract 1', () => {
  const action = {type: 'SUBTRACT'};
  // First argument is the existing state, the second is your action
  const returnedState = counterReducer(undefined, action);
  expect(returnedState).toBe(-1);
});

// counterReducer should be able to ADD & SUBTRACT (two actions)
test('counterReducer should subtract and add', () => {
  const action1 = {type: 'ADD'};
  const action2 = {type: 'SUBTRACT'};
  // First argument is the existing state, the second is your action
  const returnedState2 = counterReducer(undefined, action2)
  const returnedState = counterReducer(returnedState2, action1);
  expect(returnedState).toBe(0);
});

// counterReducer should ignore actions it doesn't care about IGNORE_ME
test('ignore actions it does not care about', () => {
  const action = {type: 'IGNORE_ME'};
  // First argument is the existing state, the second is your action
  const returnedState = counterReducer(undefined, action);
  expect(returnedState).toBe(0);
});