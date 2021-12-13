import React from 'react';
import InlineEdit from '@twp0217/react-inline-edit';

export default () => {
  const [editValue, setEditValue] = React.useState<string>('');

  const handleEdit = () => {
    console.log('onEdit');
  };

  const handleBlur = () => {
    console.log('onBlur');
  };

  const handleConfirm = (value: string) => {
    console.log('onConfirm');
    setEditValue(value);
  };

  const handleCancel = () => {
    console.log('onCancel');
  };

  return (
    <InlineEdit
      defaultValue={editValue}
      readView={editValue || '请点击输入值'}
      editView={<input placeholder="请输入值" />}
      onEdit={handleEdit}
      onBlur={handleBlur}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};
