import React, {useRef} from "react";
import useHover from "../../hooks/useHover"
import "./use-hover.css"

const UseHover = () => {
	const ref = useRef()
	const isHovering = useHover(ref)

	console.log(isHovering)
	return (
		<div className={"use-hover"} ref={ref} style={{background: isHovering ? 'royalblue' : 'gold'}}>
			<button onClick={() => console.log(ref.current)}>Click</button>
		</div>
	)
}

export default UseHover