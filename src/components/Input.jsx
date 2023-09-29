import { useCallback, useMemo, useRef } from "react"

const Input = ({ className = "", type, name = null, value, placeholder, setValue, error, autoComplete }) => {

    const input = useRef(null)
    const clickHandler = useCallback(() => input.current.focus(), [input])

    const memorizedClassName = useMemo(() => {
        if(className) return `input ${className}`
        return `input`
    }, [className])

    return (
        <div className={memorizedClassName}>
            <div className="input-box" onClick={clickHandler}>
                <div className="input-content">
                    <input 
                        ref={input}
                        type={type} 
                        name={name}
                        value={value} 
                        onChange={setValue}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                    />
                    <label className="placeholder">
                        {placeholder}
                    </label>
                </div>
            </div>
            <div>
                <small className="input-message">
                    {error}
                </small>
            </div>
        </div>
    )
}

export default Input