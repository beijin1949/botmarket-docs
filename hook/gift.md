# 礼物Hook

当你的机器人收到礼物时将会触发

### 发送方式

<Badge text="POST" />

### 请求体

| 参数名          | 类型     | 默认值 | 说明             |
|--------------|--------|-----|----------------|
| bot_id       | int    | -   | 机器人 ID         |
| customer_kid | string | -   | 赠送礼物的用户 Kookid |
| gift_price   | float  | -   | 礼物价值           |
| time         | date   | -   | 赠送时间           |

### 数据示例

```json
{
  "id": 1,
  "customer_kid": "1732477990",
  "gift_price": 1.00,
  "time": "2024-01-01"
}
```