
type CheckBoxProps = {
  label: string,
  value: boolean,
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ label, value, onChange }: CheckBoxProps) => {

  return (
    <label className="checkbox">
      <input type="checkbox" defaultChecked={value} onChange={onChange} />
      {label}
    </label>
  )
}

export default Checkbox