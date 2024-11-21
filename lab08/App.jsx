import React from 'react';
import { Image } from 'antd';
import { Carousel } from 'antd';
const carouselStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
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
    <div style={carouselStyles}>
        <Carousel dotPosition="top">
            {
                albums.map(albumToJSX)
            }
        </Carousel>
    </div>
);

const onChange = (currentSlide) => {
    console.log(currentSlide);
};


export default function App() {

    return (
        <>
            <header>
                <h1>Spotify Demo</h1>
            </header>
            <main>
                <p>Hello React!</p>
                <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />

                return (
                <Carousel afterChange={onChange}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
                );

            </main>
        </>
    );
}