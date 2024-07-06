export default function CurrentTime() {
    return <h2>{new Date().toLocaleTimeString()}</h2>;
}