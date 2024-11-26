import React, { useRef } from 'react';
import { Image, InputNumber } from 'antd';
import { Carousel } from 'antd';
import { Form } from "antd";
import { useState } from 'react';
import { Button, Input } from 'antd';

export default function App() {

    const [tracks, setTracks] = useState(null);

    const onFinish = (values) => {
        console.log('Success:', values);
        fetchData(values.search_term, values.limit)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    async function fetchData(searchTerm, limit) {
        const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';
        const url = `${baseURL}?q=${searchTerm}&type=track&limit=${limit}`;
        const request = await fetch(url);
        const data = await request.json();
        console.log(data);
        // set state variable to redraw...
        setTracks(data);
    }

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const carouselStyles = {
        "width": "640px",
        "border": "solid 1px #000",
        "margin": "auto"
    };

    function trackToJsx(trackJSON) {
        return (<iframe key="1EjQRTG53jsinzk2xlVVJP"
            src={`https://open.spotify.com/embed/track/${trackJSON.id}?utm_source=generator`}
            width="100%" border="0" height="352"
            frameBorder="0" allow="autoplay; 
            clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>)

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
                    <Form.Item label="Search Term" name="search_term"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the name of the artist you want',
                            },
                        ]}
                    >
                        <Input ref={searchTerm} />
                    </Form.Item>

                    <Form.Item label="Limit" name="limit"
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
                        <Button type="primary" htmlType="submit" >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                {
                    tracks && <div style={carouselStyles}>
                        <Carousel dotPosition="top">
                            {
                                tracks.map(trackToJsx)
                            }
                        </Carousel>
                    </div>
                }
            </main>
        </>
    );
}