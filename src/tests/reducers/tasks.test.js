import {
  addTask,
  completeTask,
  clearTasks,
} from '../../reducers/actions/tasks-action';
import taskReducer from '../../reducers/tasks';
import sortCompare from '../../reducers/funcs/sort-compare';

const addedTaskId = 4;
let testData = [
  {
    id: 1,
    title: 'Задача 1',
    amount: 2,
    status: false,
  },
  {
    id: 2,
    title: 'Задача 2',
    amount: 2,
    status: true,
  },
];

testData = testData.sort(sortCompare);

describe('Task Reducer', () => {
  it('ADD', () => {
    clearLocalStorage();

    const reducerResult = taskReducer(testData, addTask(
      {
        id: addedTaskId,
        title: 'Задача 4',
        amount: 1,
        status: false,
      }
    ));

    let expectResult = [...testData, {
      id: addedTaskId,
      title: 'Задача 4',
      amount: 1,
      status: false,
    }];
    expectResult = expectResult.sort(sortCompare);

    expect(reducerResult).toMatchObject(expectResult);
  });

  it('COMPLETE', () => {
    // CASE ONE
    completeById(1, [
      {
        id: 1,
        title: 'Задача 1',
        amount: 2,
        status: true,
      },
      {
        id: 2,
        title: 'Задача 2',
        amount: 2,
        status: true,
      },
    ]);

    testData = [
      {
        id: 1,
        title: 'Задача 1',
        amount: 2,
        status: false,
      },
      {
        id: 2,
        title: 'Задача 2',
        amount: 2,
        status: true,
      },
    ];

    // CASE TWO
    completeById(2, [
      {
        id: 1,
        title: 'Задача 1',
        amount: 2,
        status: false,
      },
      {
        id: 2,
        title: 'Задача 2',
        amount: 2,
        status: false,
      },
    ]);
  });

  it('CLEAR', () => {
    clearLocalStorage();
    const reducerResult = taskReducer(testData, clearTasks());

    expect(reducerResult).toMatchObject([]);
  });
});

function clearLocalStorage() {
  localStorage.setItem('tasksHistory', JSON.stringify([]))
  localStorage.setItem('tasks', JSON.stringify([]))
}

function completeById(id, expectRes) {
  clearLocalStorage();

  testData = testData.filter(task => task.id != addedTaskId);
  const actual = taskReducer(testData, completeTask(id));
  expectRes = expectRes.sort(sortCompare);
  
  expect(actual).toMatchObject(expectRes);
}