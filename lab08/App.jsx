import React, { useRef } from 'react';
import { Image, InputNumber } from 'antd';
import { Carousel } from 'antd';
import { Form } from "antd";
import { useState } from 'react';
import { Button, Input } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};



const onChange = (currentSlide) => {
    console.log(currentSlide);
};



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

    const [tracks, setTracks] = useState([]);

    function trackToJsx(tracksJSON) {

    }

    function albumToJSX(albumJSON) {
        return (
            <div key={albumJSON.id}>
                <img src={albumJSON.image_url} />
                <h3>{albumJSON.name}</h3>
            </div>
        )
    }

    async function fetchData() {
        const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';
        const url = `${baseURL}?q=${searchTerm}&type=track&limit=${limit}`;
        const request = await fetch(url);
        const data = await request.json();
        console.log(data);
        // set state variable to redraw...
        setTracks(tracks.push);
    }

    const searchTerm = useRef();
    const limit = useRef();

    const handleSubmit = () => {
        console.log("Search term value", searchTerm.current.Input.value);
        console.log("Limit value", limit.current.InputNumber.value);
    }


    return (
        <>
            <header>
                <h1>Spotify Demo</h1>
            </header>
            <main>

                <Form name="basic" labelCol={{
                    span: 8,
                }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }} onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item label="Search Term" name="search term"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the name of the artist you want',
                            },
                        ]}
                    >
                        <Input ref={searchTerm} />
                    </Form.Item>

                    <Form.Item label="Limit" name="Limit"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the number of songs you want',
                            },
                        ]}
                    >
                        <InputNumber ref={limit} />
                    </Form.Item>


                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit" onClick={fetchData}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>


                <div style={carouselStyles}>
                    <Carousel dotPosition="top">
                        {
                            <iframe key="1EjQRTG53jsinzk2xlVVJP"
                                src="https://open.spotify.com/embed/track/1EjQRTG53jsinzk2xlVVJP?utm_source=generator"
                                width="100%" border="0" height="352"
                                frameBorder="0" allow="autoplay; 
                            clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"></iframe>

                        }
                    </Carousel>
                </div>

            </main>
        </>
    );
}