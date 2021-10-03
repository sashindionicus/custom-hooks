import useInput from "../../hooks/useInput";
import './use-input.css'

function UseInput() {

	const username = useInput('')
	const password = useInput('')

	return (
		<div className="use-input">
			<input {...username} type="text" placeholder="Username"/>
			<input {...password} type="text" placeholder="Pass"/>
			<button onClick={() => console.log(username.value, password.value)}>ONE CLICK</button>
		</div>
	)
}

export default UseInput