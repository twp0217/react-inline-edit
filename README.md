# react-inline-edit

Inline edit component for React（基于 React 的内联编辑组件）

## 安装

```bash
npm install @twp0217/react-inline-edit --save
```

## 使用

```typescript
import React from 'react';
import InlineEdit from '@twp0217/react-inline-edit';

export default () => {
  const [editValue, setEditValue] = React.useState<string>('');

  return (
    <InlineEdit
      defaultValue={editValue}
      readView={editValue || '请点击输入值'}
      editView={<input placeholder="请输入值" />}
      onConfirm={setEditValue}
    />
  );
};
```

## API

### InlineEditProps

| 名称           | 类型                 | 默认值    | 说明               |
| -------------- | -------------------- | --------- | ------------------ |
| className      | string               | -         | 类名               |
| style          | React.CSSProperties  | -         | 样式               |
| keepOpenOnBlur | `boolean`            | `false`   | 失去焦点时保持打开 |
| hideActions    | `boolean`            | `false`   | 是否隐藏操作按钮   |
| confirmText    | `string`             | `Confirm` | 确认文本           |
| cancelText     | `string`             | `Cancel`  | 取消文本           |
| defaultValue   | `string`             | -         | 默认值             |
| isEditing      | `boolean`            | -         | 是否正在编辑       |
| loading        | `boolean`            | -         | 加载中             |
| placement      | `top` \| `bottom`    | -         | 按钮位置           |
| readView       | `React.ReactNode`    | -         | 查看视图           |
| editView       | `React.ReactNode`    | -         | 编辑视图           |
| onEdit         | `() => void`         | -         | 编辑事件           |
| onBlur         | `() => void`         | -         | 失去焦点事件       |
| onConfirm      | `(value: T) => void` | -         | 确认事件           |
| onCancel       | `() => void`         | -         | 取消事件           |

## 支持

- 如果项目对你有帮助，请点颗星星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
