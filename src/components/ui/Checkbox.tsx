import React from 'react';
import { Square, CheckSquare } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  const Icon = checked ? CheckSquare : Square;

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only" // Hide the native checkbox
      />
      <Icon className={`w-6 h-6 transition-colors ${checked ? 'text-primary-500' : 'text-neutral-800'}`} />
      {label && <span className="font-medium text-neutral-800">{label}</span>}
    </label>
  );
};

export default Checkbox;
