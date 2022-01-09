# REDUX

**Global state management tool**

**Context API is a dependency injection system , not a state management system**

More than just a state management tool. It is also a data fetching and caching tool.

- Predictable state updates
- Optimized render performance
- Keeping logic outside the react component tree
- Sharinng logic across platforms
- Redux devtools
- Middleware
- Ecosystem
- Customizability

## React-Redux

### useSelector()

Gives us the entire redux state/store and lets us extract a value from it.

Reruns the selectors whenever actions are dispatched.

### useDispatch()

Returns the store's dispatch method

---

## REDUX-TOOLKIT

Inspired by create-react-app and apollo-boost.

Has decreased the redux boiler plate code drastically.

Siplifies TS usage pattern

It is a collection of many stand-alone functions.

### 1. configureStore()

- A small wrapper around the Redux createStore function
- Automatically sets up the Redux DevTools extension by default
- Automatically adds redux-thunk by default, plus middleware to check for accidental mutations and non-serializable values (Dev mode only checks ).
- Accepts either root reducer function , or an object of slice reducers and will autoamtically call combineReducers
- Accepts middlewares and store enhancers as arras and compose them properly.
- Options are passed as named arguments

### Immer

- An immutable update library .
- Uses ES6 proxies to let you mutate your data , but applies the changes immutably.

### createReducer()

- Accepts a lookup table of action types to reducer functions.
- It uses Immer internally.

```javascript
// Normal redux

const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { ...state, value: state.value + 1 };
    case "decrement":
      return { ...state, value: state.value - 1 };
    case "incrementByAmount":
      return { ...state, value: state.value + action.payload };
    default:
      return state;
  }
}
```

```javascript

// Toolkit

import { createAction, createReducer } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction<number>('counter/incrementByAmount')

const initialState = { value: 0 } as CounterState

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})
```

### createAction()

- Generates an action creator that uses the given type and accepts payload as an argument

### createSlice()

- Instead of using createReducer or createAction , we use createSlice.
- Internally uses createAction and createReducer
- Accepts an object of reducers, and returns auto-generated actions creators, action types and a reducer function

```javascript
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState = { value: 0 } as CounterState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

createSlice accepts a single configuration object parameter, with the following options:

```javascript
function createSlice({
    // A name, used in action types
    name: string,
    // The initial state for the reducer
    initialState: any,
    // An object of "case reducers". Key names will be used to generate actions.
    reducers: Object<string, ReducerFunction | ReducerAndPrepareObject>
    // A "builder callback" function used to add more reducers, or
    // an additional object of "case reducers", where the keys should be other
    // action types
    extraReducers?:
    | Object<string, ReducerFunction>
    | ((builder: ActionReducerMapBuilder<State>) => void)
})
```

### createAsyncThunk()

```javascript
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "./userAPI";

// First, create the thunk
const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: "users",
  initialState: { entities: [], loading: "idle" },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
});

// Later, dispatch the thunk as needed in the app
dispatch(fetchUserById(123));
```

---

## **RTK Query**

- Advanced data fetching and caching library built for Redux Toolkit
- Abstracts the data fetching process completely - just define a set of endpoints, and use the auto-generated hooks in the components to fetch data.
- Manages caching and loading status for each request automatically.
- UI-agnostic core, with additional React-specific functionality on top
- It generates hooks for data fetching and mutation.
- An apiSlice is created, which then has multiple endpoints.
- It will make request and will cache different responses based on different inputs.
