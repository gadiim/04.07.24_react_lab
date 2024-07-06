export default function CurrentTime() {
    return <h2>{new Date().toLocaleTimeString('en-UK', { timeZone: 'Europe/Kyiv' })}</h2>;
}
