import * as React from 'react';
import Image from '@theme/IdealImage';
import thumbnail from '@site/docs/manu/V9 操作手册/media/image3.png';
import Viewer from 'react-viewer';
import Container from '@mui/material/Container';

export function Img(props) {

    const [img, setImg] = React.useState(props.img)
    const [src, setSrc] = React.useState('');
    const [visible, setVisible] = React.useState(false);


    return (
        <>
            <Image img={img}
                onClick={() => {
                    setSrc(img.default)
                    setVisible(true)
                }}
            />
            <Viewer
                noClose={false}
                noToolbar={true}
                noFooter={true}
                visible={visible}
                onMaskClick={() => { setVisible(false); }}
                onClose={() => { setVisible(false); }}
                images={[{
                    src
                }]}
            />
        </>

        //      </BrandingCssVarsProvider>
    );
}

function Imgs(props) {
    return (
        < Img
            img={require('@site/docs/manu/V9 操作手册/media/image3.png')}
        />
    )
}
export default Imgs;
