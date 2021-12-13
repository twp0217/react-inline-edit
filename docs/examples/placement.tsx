import React from 'react';
import InlineEdit from '@twp0217/react-inline-edit';

export default () => {
  const [editValue, setEditValue] = React.useState<string>('');

  return (
    <InlineEdit
      defaultValue={editValue}
      placement="top"
      readView={editValue || '请点击输入值'}
      editView={<input placeholder="请输入值" />}
      onConfirm={setEditValue}
    />
  );
};
