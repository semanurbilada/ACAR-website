import { useMemo } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function Map({ 
    containerStyle = {
        width: '300px',
        height: '250px'
    } }) {
        
    const center = useMemo(() => ({ 
        lat: 40.850114, 
        lng: 29.383686
    }), []);

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
            <GoogleMap
                zoom={18}
                center={center}
                mapContainerStyle={containerStyle}> 
            </GoogleMap>
        </LoadScript>
    );
}