import { useEffect, useState } from "react";

function GetCurrentAddress() {
    const [address, setAddress] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
                console.log("latitude and lonitude is",latitude,longitude);

                fetch(url)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Failed to fetch address.");
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setAddress(data.address);
                    })
                    .catch((err) => {
                        setError(err.message);
                    });
            },
            (err) => {
                setError("Unable to retrieve location. Please check your permissions.");
            }
        );
    }, []);

    return (
        <div className="text-3xl font-bold">
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : address ? (
                <div>
                    {address.city || "N/A"}
                    <br />
                   
                </div>
            ) : (
                <div>Loading your location...</div>
            )}
        </div>
    );
}

export default GetCurrentAddress;
