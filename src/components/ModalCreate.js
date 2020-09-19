import React, { useState } from 'react'

const ModalCreate = (props) => {

    const [textValue, setTextValue] = useState('');

    return (
        <>
         {props.collapsible &&
            <div style={styles.modalStyle}>
                <button
                    onClick={() => props.closeModal()} 
                    style={{...styles.btn, ...styles.btnClose}}
                >
                    X
                </button>
                <input 
                    onChange={(e) => setTextValue(e.target.value)}
                    type="text"
                    value={textValue}
                    style={styles.inputStyle}
                />
                <button
                    onClick={() => {
                        props.addTodo(textValue);
                        setTextValue('');
                    }} 
                    style={{...styles.btn, ...styles.btnAdd}}
                >
                    Add
                </button>
            </div> 
         }   
        </>
    )
}

const styles = {
    modalStyle: {
        position: "absolute",
        width: "500px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        color: "#a8dadc",
        padding: "30px 50px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "#fff 0 0 4px",
    },
    inputStyle: {
        border: "none",
        borderRadius: "8px",
        boxShadow: "rgb(42 140 144) 0 0 4px",
        padding: "8px 16px",
        fontSize: "18px",
        color: "rgb(42 140 144)",
        outline: "none",
        marginTop: "32px"
    },
    btn: {
        padding: "8px 0",
        border: "none",
        borderRadius: "8px",
        boxShadow: "rgb(42 140 144) 0 0 4px",
        backgroundColor: "#a8dadc",
        color: "#fff",
        fontSize: "18px",
        outline: "none",
        cursor: "pointer"
    },
    btnAdd: {
        marginTop: "16px",     
    },
    btnClose: {
        position: "absolute",
        top: "16px",
        right: "16px",
        fontWeight: "bold",
        width: "36px"
    }
}

export default ModalCreate
