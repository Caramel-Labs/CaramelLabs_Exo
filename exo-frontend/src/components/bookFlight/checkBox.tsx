type checkBoxProps = {
  label: string
}

export default function CheckBox(props: checkBoxProps) {
  return (
    <div className="flex items-center">
      <input className="w-5 h-5 rounded-sm ring-white ring-offset-white" type="checkbox" value="true" id="defaultCheckBox" />
      <label className="form-check-label text-xs text-neutral-400 pl-3" htmlFor="defaultCheckBox">
        {props.label}
      </label>
    </div>
  )
}
