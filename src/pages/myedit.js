import React from 'react'
import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone'

/* const MyAvatar = () => {
    const [image, setImage] = React.useState('"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F22%2F20210622154903_3c36a.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680538933&t=2f476e8c725e0c8e7131f1c102d11766"')
    const editor = React.useRef(null);
    return (
        <Dropzone
            onDrop={(dropped) => setImage(dropped[0])}
            noClick
            noKeyboard
            style={{ width: '250px', height: '250px' }}
        >
            {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                    <AvatarEditor ref={editor} width={250} height={250} image={image} />
                    <input {...getInputProps()} />
                </div>
            )}
        </Dropzone>
    )
} */
const MyEditor = () => {
    const editor = React.useRef(null);

    const [image, setImage] = React.useState("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F22%2F20210622154903_3c36a.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680538933&t=2f476e8c725e0c8e7131f1c102d11766")

    return (
        <div>
            <AvatarEditor
                image={image}
                width={250}
                height={250}
                border={50}
                scale={1.2}
                ref={editor}
                borderRadius={50}
            />
            <button onClick={() => {
                if (this.editor) {
                    // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
                    // drawn on another canvas, or added to the DOM.
                    const canvas = editor.current.getImage()

                    // If you want the image resized to the canvas size (also a HTMLCanvasElement)
                    const canvasScaled = editor.current.getImageScaledToCanvas()
                }
            }}>Save</button>
        </div>
    )

}

export default MyEditor
