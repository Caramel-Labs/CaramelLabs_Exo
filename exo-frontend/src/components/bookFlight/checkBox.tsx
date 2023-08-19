type CheckBoxProps = {
  label: string
  checked: boolean
  onChange: (newChecked: boolean) => void
}

export default function CheckBox(props: CheckBoxProps) {
  const handleChange = () => {
    props.onChange(!props.checked)
  }

  return (
    <div className="flex items-center">
      <input
        className="w-5 h-5 rounded-sm ring-white ring-offset-white"
        type="checkbox"
        checked={props.checked}
        onChange={handleChange}
        id={`checkBox_${props.label}`} // Provide a unique ID for each checkbox
      />
      <label
        className="form-check-label text-xs text-neutral-400 pl-3"
        htmlFor={`checkBox_${props.label}`} // Match the ID with the checkbox ID
      >
        {props.label}
      </label>
    </div>
  )
}
