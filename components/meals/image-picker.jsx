"use client"
import { useRef, useState } from "react"
import styles from "./image-picker.module.css"
import Image from "next/image"

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState()

    const imageInput = useRef()

    const handlePickImageClick = () => {
        imageInput.current.click()
    }

    const handlePickImageChange = (event) => {
        const file = event.target.files[0]

        if(!file) {
            setPickedImage(null);
            return
        }

        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    }

    return <div className={styles.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.preview}>
            {pickedImage && <Image 
                src={pickedImage} 
                alt="Image picked by user"
                fill /> 
            }

            {!pickedImage && <p>No image picked yet.</p> }
                 
        </div>
        <div className={styles.controls}>
            <input 
                className={styles.input}
                type="file" 
                name={name} 
                id={name} 
                accept="image/png, image/jpeg" 
                ref={imageInput}
                onChange={handlePickImageChange}
                required
            />
            <button className={styles.button} type="button" onClick={handlePickImageClick}>
                Pick an Image
            </button>
        </div>

    </div>
}