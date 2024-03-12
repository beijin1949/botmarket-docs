# Gift Hook

It will be triggered when your robot receives a gift.

### Methods

<Badge text="POST" />

### Body

| parameter name | type   | default value | description                         |
|----------------|--------|---------------|-------------------------------------|
| bot_id         | int    | -             | Bot ID                              |
| customer_kid   | string | -             | The user who gives the gift KOOK ID |
| gift_price     | float  | -             | The value of the gift               |
| time           | date   | -             | Time of giving                      |

### Data Example

```json
{
  "id": 1,
  "customer_kid": "1732477990",
  "gift_price": 1.00,
  "time": "2024-01-01"
}
```