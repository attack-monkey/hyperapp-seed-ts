# Hyperapp - Seed App (typescript / parcel / tsx )

Hyperapp seed with:

- typescript / tsx
- parceljs
- bootstrap
- hyperappRouter
- auto code splitting + lazy loaded components
- immutable update (iu-ts)

## Install

Install parcel.js globally (This is the bundler)

```

npm install -g parcel-bundler

```

Install dependencies

```

npm install

```

## Start

```

npm start

```

## Immutable Update

This app uses iu-ts (immutable update - typescript) to immutably update deep nested objects.  

**Declarative actions are still recommended**, however using iu-ts removes the need to nest actions (allowing for easier refactor).

eg.

```tsx

// The following immutably increments state.counter.count using iu

<button onclick={() => actions.counterUp(1))}>-</button>


```

```ts

export const actions: Actions = {
    counterUp: value => state => iu(state, 'counter/count', state.counter.count + value),
    counterDown: value => state => iu(state, 'counter/count', state.counter.count - value)
}

```