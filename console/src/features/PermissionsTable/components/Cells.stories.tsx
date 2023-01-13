import React from 'react';
import { Meta, Story } from '@storybook/react';
import { z } from 'zod';
import { SimpleForm } from '@/new-components/Form';
import { useTableMachine } from '../hooks/useTableMachine';

import {
  EditableCell,
  EditableCellProps,
  InputCell,
  InputCellProps,
} from './Cells';

export default {
  title: 'Features/Permissions Table/Components/Cells',
  component: InputCell,
  decorators: [
    (StoryComponent: React.FC) => (
      <SimpleForm schema={z.any()} onSubmit={() => {}}>
        <StoryComponent />
      </SimpleForm>
    ),
  ],
  parameters: { chromatic: { disableSnapshot: true } },
} as Meta;

export const InputCellComponent: Story<InputCellProps> = args => {
  const machine = useTableMachine();

  return <InputCell {...args} machine={machine} />;
};
InputCellComponent.args = {
  roleName: 'User',
  isNewRole: true,
  isSelectable: true,
  isSelected: true,
};

export const InputCellComponentNewRole: Story<InputCellProps> = args => {
  const machine = useTableMachine();

  return <InputCell {...args} machine={machine} />;
};
InputCellComponentNewRole.args = {
  roleName: '',
  isNewRole: true,
  isSelectable: true,
  isSelected: true,
};

export const EditableCellComponent: Story<EditableCellProps> = args => (
  <table>
    <thead>
      <tr>
        <th className="px-4">Default</th>
        <th className="px-4">Current Edit</th>
        <th className="px-4">No Access</th>
        <th className="px-4">Full Access</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <EditableCell {...args} />
        <EditableCell {...{ ...args, isCurrentEdit: true }} />
        <EditableCell {...{ ...args, access: 'noAccess' }} />
        <EditableCell {...{ ...args, access: 'fullAccess' }} />
      </tr>
    </tbody>
  </table>
);
EditableCellComponent.args = {
  isEditable: true,
};
