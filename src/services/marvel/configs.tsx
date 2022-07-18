import md5 from 'md5'

export default function createAuth() {
    const ts = new Date().getTime()
    const privateKey = 'c2fee6a89fcb6579ca2f62c697e32f1f06aaa053'
    const publicKey = 'c196bc828c4f1d7e999cd99121b27809'
    const hash = md5(ts.toString() + privateKey + publicKey)
    return {
        ts,
        apikey: publicKey,
        hash
    }
}