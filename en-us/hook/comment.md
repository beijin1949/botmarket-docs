# Comment Hook

When your robot receives a comment, it will be triggered.

### Methods

<Badge text="POST" />

### Body

| parameter name | type   | default value | description                 |
|----------------|--------|---------------|-----------------------------|
| bot_id         | int    | -             | Bot ID                      |
| customer_kid   | string | -             | User of the comment KOOK ID |
| content        | string | -             | Comment content             |
| time           | date   | -             | Comment time                |

### Data Example

```json
{
  "id": 1,
  "customer_kid": "1732477990",
  "content": "hello",
  "time": "2024-01-01"
}
```