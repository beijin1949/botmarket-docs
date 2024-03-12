# 评论Hook

当你的机器人收到评论时将会触发

### 发送方式

<Badge text="POST" />

### 请求体

| 参数名          | 类型     | 默认值 | 说明           |
|--------------|--------|-----|--------------|
| bot_id       | int    | -   | 机器人 ID       |
| customer_kid | string | -   | 评论的用户 Kookid |
| content      | string  | -   | 评论内容         |
| time         | date   | -   | 评论时间         |

### 数据示例

```json
{
  "id": 1,
  "customer_kid": "1732477990",
  "content": "你的机器人很好啊",
  "time": "2024-01-01"
}
```