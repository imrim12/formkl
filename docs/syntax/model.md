# Form model

By default, formkl adapter will initialize the model with the below schema, and also provide a two-ways binding feature. You can simply use `<formkl v-model="yourModel"/>`

## Basic Schema

And the model structure would look like this

```json
{
  "personal-info": {
    "fullname": null,
    "bio": null
  }
}
```

In Typescript

```typescript
export type Schema = {
  [section: string]: {
    [field: string]: any;
  }
};
```

## Section with multiple responses

And the model structure would look like this

```json
{
  "work-experience": [
    {
      "company": null,
      "position": null,
      "start-date": null,
      "end-date": null
    }
  ]
}
```
In Typescript

```typescript
export type Schema = {
  [section: string]: Array<{
    [field: string]: any;
  }>
};
```

## Field with multiple responses
```json
{
  "personal-info": {
    "addressed": [
      null,
    ],
  }
}
```
In Typescript

```typescript
export type Schema = {
  [section: string]: {
    [field: string]: Array<any>;
  }
};
```