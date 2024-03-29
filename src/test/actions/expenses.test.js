//import React from 'react'; 
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense, editExpense,startAddExpense,removeExpense} from '../../actions/expenses';

configure({adapter: new Adapter()})

const createMockStore=configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
    });
  });
   
  
  test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' });
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: {
        note: 'New note value'
      }
    });
  });
  
  test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense:expenses[2]
    });
  });

  test('should add expense to database and store',(done)=>{
    const store = createMockStore({})
    const expenseData = {
      description:'mouse',
      amount:1500,
      note: 'this is better',
      createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
      expect(1).toBe(2)
      //suppose to fail use 1 for correct answer 
      done()
    })
  })

  test('should add expense with default to database and store',()=>{

  })

  
  // test('should setup add expense action object with default values', () => {
  //   const action = addExpense();
  //   expect(action).toEqual({
  //     type: 'ADD_EXPENSE',
  //     expense: {
  //       id: expect.any(String),
  //       description: '',
  //       note: '',
  //       amount: 0,
  //       createdAt: 0
  //     }
  //   });
  // });