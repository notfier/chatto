import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';


render(
    React.createElement( 'h1', null, 'Hello Chatto World!' ),
    document.getElementById( 'root' )
);

/* actions */
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// action creators
function addTodo( text ) {
    return { type: ADD_TODO, text };
};

function completeTodo( index ) {
    return { type: COMPLETE_TODO, index };
};

function setVisibilityFilter( filter ) {
    return { type: SET_VISIBILITY_FILTER, filter };
};

// reducers
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter( state = SHOW_ALL, action ) {
    switch ( action.type ) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

function todos( state = [], action ) {
    switch ( action.type ) {
        case ADD_TODO:
            return [
                ...state,
                { text: action.text, completed: false }
            ]
        case COMPLETE_TODO:
            return [
                ...state.slice( 0, action.index ),
                Object.assign( {}, state[ action.index ], { completed: true } ),
                ...state.slice( action.index + 1 )
            ]
        default:
            return state
    }
};

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

// store
let store = createStore( todoApp );

console.log( store.getState() );

let unsubscribe = store.subscribe( () => console.log( store.getState() ) );

// Dispatch some actions
store.dispatch( addTodo( 'Learn about actions' ) );
store.dispatch( addTodo( 'Learn about reducers' ) );
store.dispatch( addTodo( 'Learn about store' ) );
store.dispatch( completeTodo( 0 ) );
store.dispatch( completeTodo( 1 ) );
store.dispatch( setVisibilityFilter( VisibilityFilters.SHOW_COMPLETED ) );

// stop listening to state updates
unsubscribe();
