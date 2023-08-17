type checkBoxProps = {
  label: string
}

export default function CheckBox(props: checkBoxProps) {
  return (
    <div>
      <input className="" type="checkbox" value="true" id="defaultCheckBox" />
      <label className="form-check-label" htmlFor="defaultCheckBox">
        {props.label}
      </label>
    </div>
  )
}
