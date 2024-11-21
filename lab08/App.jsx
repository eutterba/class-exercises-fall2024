import React from 'react';
import { Image } from 'antd';
import { Carousel } from 'antd';
import { Form } from "antd";
import { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Input, Radio, Tag } from 'antd';

const customizeRequiredMark = (label, { required }) => (
    <>
        {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
        {label}
    </>
);
const [form] = Form.useForm();
const [requiredMark, setRequiredMarkType] = useState('optional');
const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
};

const onChange = (currentSlide) => {
    console.log(currentSlide);
};

const [tracks, setTracks] = useState([]);

export default function App() {

    const carouselStyles = {
        "width": "640px",
        "border": "solid 1px #000",
        "margin": "auto"
    };

    const albums = [
        {
            "id": "6BzxX6zkDsYKFJ04ziU5xQ",
            "name": "COWBOY CARTER",
            "image_url": "https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599",
            "spotify_url": "https://open.spotify.com/album/6BzxX6zkDsYKFJ04ziU5xQ"
        },
        {
            "id": "2UJwKSBUz6rtW4QLK74kQu",
            "name": "BEYONCÉ [Platinum Edition]",
            "image_url": "https://i.scdn.co/image/ab67616d0000b2730d1d6e9325275f104f8e33f3",
            "spotify_url": "https://open.spotify.com/album/2UJwKSBUz6rtW4QLK74kQu"
        },
        {
            "id": "6PeoltoiWQWCyWA0JBHVGN",
            "name": "16 CARRIAGES",
            "image_url": "https://i.scdn.co/image/ab67616d0000b273f5220893852002a2a3078bab",
            "spotify_url": "https://open.spotify.com/album/6PeoltoiWQWCyWA0JBHVGN"
        },
        {
            "id": "6oxVabMIqCMJRYN1GqR3Vf",
            "name": "Dangerously In Love",
            "image_url": "https://i.scdn.co/image/ab67616d0000b27345680a4a57c97894490a01c1",
            "spotify_url": "https://open.spotify.com/album/6oxVabMIqCMJRYN1GqR3Vf"
        },
        {
            "id": "2m1enA3YrMLVvR3q0MqLpL",
            "name": "COWBOY CARTER",
            "image_url": "https://i.scdn.co/image/ab67616d0000b2734903a9678d5664b9cd9a3fd8",
            "spotify_url": "https://open.spotify.com/album/2m1enA3YrMLVvR3q0MqLpL"
        }
    ];

    function albumToJSX(albumJSON) {
        return (
            <div key={albumJSON.id}>
                <img src={albumJSON.image_url} />
                <h3>{albumJSON.name}</h3>
            </div>
        )
    }



    return (
        <>
            <header>
                <h1>Spotify Demo</h1>
            </header>
            <main>
                <Form form={form} layout="vertical" initialValues={{
                    requiredMarkValue: requiredMark,
                }}
                    onValuesChange={onRequiredTypeChange}
                    requiredMark={
                        requiredMark === 'customize' ? customizeRequiredMark : requiredMark
                    }
                >
                    <Form.Item label="Required Mark" name="requiredMarkValue">
                    </Form.Item>
                    <Form.Item label="search term" required tooltip="This is a required field">
                        <Input placeholder="Bob Dylan" />
                    </Form.Item>
                    <Form.Item label="Field B" required tooltip="This is a required field">
                        <Input placeholder="5" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>

                <div style={carouselStyles}>
                    <Carousel dotPosition="top">
                        {
                            albums.map(albumToJSX)
                        }
                    </Carousel>
                </div>

            </main>
        </>
    );
}