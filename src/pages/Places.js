import InfoSection from '../components/InfoSection';

export default function Places() {
    return(
        <section className="container flex flex-col">
            <InfoSection 
                mainTitle="ANA DEPO"
                image="/main.jpg"
                place="Main"
                size={750}
                icon="location"
                address="Adres: Şekerpınar, Ayça Sk. No:21, 41420 Çayırova/Kocaeli"
            />

            <InfoSection 
                secondTitle="2 NO'LU DEPO"
                image="/second.jpg"
                place="Second"
                size={700}
                icon="location"
                address="Adres: 20 Damla Sokak, Çayırova/Kocaeli"
            />
        </section>
    );
}