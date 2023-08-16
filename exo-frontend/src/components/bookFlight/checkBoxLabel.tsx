type labelProps = {
  label: string
}

export default function CheckBoxLabel(props: labelProps) {
  return (
    <label className="form-check-label" htmlFor="defaultCheckBox">
      {props.label}
    </label>
  )
}
